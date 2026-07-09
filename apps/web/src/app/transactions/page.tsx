'use client';

import { useAccount } from 'wagmi';
import { useWalletData } from '../../hooks/useWalletData';
import { History, ArrowUpRight, ArrowDownLeft } from 'lucide-react';

export default function TransactionsPage() {
  const { isConnected, address } = useAccount();
  const { data, isLoading } = useWalletData('/transactions');

  if (!isConnected) {
    return <div className="p-8">Connect your wallet to view transaction history.</div>;
  }

  return (
    <div className="p-8 max-w-6xl mx-auto space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-zinc-100">Transaction History</h2>
        <p className="text-zinc-400 mt-1">Recent ERC20 and ETH transfers</p>
      </div>

      {isLoading ? (
        <div className="text-zinc-500">Loading history...</div>
      ) : (
        <div className="space-y-3">
          {data?.transactions?.length === 0 && (
            <div className="p-8 border border-zinc-800 border-dashed rounded-xl text-center text-zinc-500">
              No recent transactions found.
            </div>
          )}
          
          {data?.transactions?.map((tx: any, i: number) => {
            const isOutgoing = tx.from.toLowerCase() === address?.toLowerCase();
            return (
              <div key={i} className="bg-zinc-900/50 border border-zinc-800 p-4 rounded-xl flex items-center gap-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${isOutgoing ? 'bg-red-500/10 text-red-400' : 'bg-emerald-500/10 text-emerald-400'}`}>
                  {isOutgoing ? <ArrowUpRight size={20} /> : <ArrowDownLeft size={20} />}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-zinc-100">{tx.value || 0} {tx.asset}</span>
                    <span className="text-xs text-zinc-500 px-2 py-0.5 rounded-full bg-zinc-800">{tx.category}</span>
                  </div>
                  <div className="text-xs text-zinc-500 truncate mt-1">
                    {isOutgoing ? `To: ${tx.to}` : `From: ${tx.from}`}
                  </div>
                </div>
                <div className="text-xs text-zinc-600 hidden md:block w-32 truncate" title={tx.hash}>
                  {tx.hash}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
