'use client';

import { useAccount } from 'wagmi';
import { useWalletData } from '../../hooks/useWalletData';
import { ArrowUpRight, ArrowDownLeft } from 'lucide-react';

export default function TransactionsPage() {
  const { isConnected, address } = useAccount();
  const { data, isLoading } = useWalletData('/transactions');

  if (!isConnected) {
    return (
      <div className="py-20 text-center text-sm text-neutral-500">
        Connect your wallet to view transaction history.
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="border-b border-neutral-200 dark:border-neutral-900 pb-4">
        <h1 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">
          Execution History
        </h1>
        <p className="text-xs text-neutral-500 mt-1">
          Immutable ledger of signed transfers and contract interactions
        </p>
      </div>

      {isLoading ? (
        <div className="py-12 text-center text-xs text-neutral-500">Loading history...</div>
      ) : (
        <div className="space-y-3">
          {(!data?.transactions || data.transactions.length === 0) && (
            <div className="py-12 border border-neutral-200 dark:border-neutral-800 border-dashed rounded-xl text-center text-xs text-neutral-500">
              No recent transactions found.
            </div>
          )}

          {data?.transactions?.map((tx: any, i: number) => {
            const isOutgoing = tx.from?.toLowerCase() === address?.toLowerCase();
            return (
              <div
                key={i}
                className="border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 p-4 rounded-xl flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-8 h-8 rounded-lg bg-neutral-100 dark:bg-neutral-900 flex items-center justify-center shrink-0 text-neutral-700 dark:text-neutral-300">
                    {isOutgoing ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownLeft className="w-4 h-4" />}
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-neutral-900 dark:text-white">
                        {tx.value || 0} {tx.asset}
                      </span>
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400">
                        {tx.category}
                      </span>
                    </div>
                    <div className="text-xs font-mono text-neutral-500 truncate mt-0.5">
                      {isOutgoing ? `To: ${tx.to}` : `From: ${tx.from}`}
                    </div>
                  </div>
                </div>

                <div
                  className="text-xs font-mono text-neutral-400 hidden sm:block truncate max-w-[140px]"
                  title={tx.hash}
                >
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
