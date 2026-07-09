'use client';

import { useAccount } from 'wagmi';
import { useWalletData } from '../../hooks/useWalletData';
import { Coins, CircleDollarSign } from 'lucide-react';

export default function PortfolioPage() {
  const { isConnected } = useAccount();
  const { data, isLoading } = useWalletData('/tokens');

  if (!isConnected) {
    return <div className="p-8">Connect your wallet to view your portfolio.</div>;
  }

  return (
    <div className="p-8 max-w-6xl mx-auto space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-zinc-100">Asset Portfolio</h2>
        <p className="text-zinc-400 mt-1">Your Sepolia ERC20 balances</p>
      </div>

      {isLoading ? (
        <div className="text-zinc-500">Loading assets...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data?.tokens?.length === 0 && (
            <div className="col-span-full p-8 border border-zinc-800 border-dashed rounded-xl text-center text-zinc-500">
              No ERC20 tokens found in this wallet.
            </div>
          )}
          
          {data?.tokens?.map((token: any, i: number) => (
            <div key={i} className="bg-zinc-900/50 border border-zinc-800 p-5 rounded-xl flex items-center gap-4">
              <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center shrink-0">
                <CircleDollarSign className="text-zinc-400" />
              </div>
              <div className="overflow-hidden">
                <div className="text-xs text-zinc-500 truncate mb-1">{token.contractAddress}</div>
                <div className="text-xl font-bold text-zinc-100 truncate" title={token.rawBalance}>
                  {token.rawBalance}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
