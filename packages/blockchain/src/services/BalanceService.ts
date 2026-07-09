import { viemClient, redis } from '../client.js';
import { formatEther } from 'viem';
import { logger } from '@weth/shared';

export class BalanceService {
  static async getBalance(address: string): Promise<{ eth: number; network: string }> {
    const cacheKey = `balance:${address}`;
    const cached = await redis.get(cacheKey);
    if (cached) {
      return JSON.parse(cached);
    }

    const balanceWei = await viemClient.getBalance({ address: address as `0x${string}` });
    const balanceEth = parseFloat(formatEther(balanceWei));

    const result = { eth: balanceEth, network: 'sepolia' };
    await redis.setex(cacheKey, 10, JSON.stringify(result)); // cache for 10 seconds

    return result;
  }

  static async getTokenBalances(address: string): Promise<any[]> {
    const cacheKey = `tokenBalances:${address}`;
    const cached = await redis.get(cacheKey);
    if (cached) {
      return JSON.parse(cached);
    }

    const rpcUrl = process.env.SEPOLIA_RPC_URL;
    if (!rpcUrl) {
      logger.warn('SEPOLIA_RPC_URL is not set. Cannot fetch token balances.');
      return [];
    }

    try {
      const response = await fetch(rpcUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          jsonrpc: '2.0',
          method: 'alchemy_getTokenBalances',
          params: [address, 'erc20'],
          id: 1,
        }),
      });

      const data = (await response.json()) as any;
      const tokenBalances = data?.result?.tokenBalances || [];

      // We should ideally fetch metadata for each token, but for now we'll just filter non-zero balances.
      const parsedBalances = tokenBalances
        .filter((t: any) => t.tokenBalance !== '0x0000000000000000000000000000000000000000000000000000000000000000')
        .map((t: any) => ({
          contractAddress: t.contractAddress,
          rawBalance: t.tokenBalance,
        }));

      await redis.setex(cacheKey, 60, JSON.stringify(parsedBalances));
      return parsedBalances;
    } catch (err: any) {
      logger.error({ err, address }, 'Failed to fetch token balances');
      return [];
    }
  }
}
