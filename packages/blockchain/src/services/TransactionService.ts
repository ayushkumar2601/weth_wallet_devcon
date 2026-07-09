import { redis } from '../client.js';
import { logger } from '@weth/shared';

export class TransactionService {
  static async getTransactions(address: string): Promise<any[]> {
    const cacheKey = `transactions:${address}`;
    const cached = await redis.get(cacheKey);
    if (cached) {
      return JSON.parse(cached);
    }

    const rpcUrl = process.env.SEPOLIA_RPC_URL;
    if (!rpcUrl) {
      logger.warn('SEPOLIA_RPC_URL is not set. Cannot fetch transaction history.');
      return [];
    }

    try {
      const response = await fetch(rpcUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          jsonrpc: '2.0',
          method: 'alchemy_getAssetTransfers',
          params: [
            {
              fromBlock: '0x0',
              toBlock: 'latest',
              fromAddress: address,
              category: ['external', 'erc20'],
              maxCount: '0x14', // Limit to 20
            }
          ],
          id: 1,
        }),
      });

      const data = (await response.json()) as any;
      const transfers = data?.result?.transfers || [];

      await redis.setex(cacheKey, 60, JSON.stringify(transfers));
      return transfers;
    } catch (err: any) {
      logger.error({ err, address }, 'Failed to fetch transaction history');
      return [];
    }
  }
}
