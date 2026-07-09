'use client';

import { useAccount } from 'wagmi';
import { useWalletData } from '../../hooks/useWalletData';
import { Activity, Coins, FileCheck2, AlertTriangle, ArrowRight, ShieldAlert } from 'lucide-react';
import Link from 'next/link';
import { PendingTransactions } from '../../components/PendingTransactions';

export default function DashboardPage() {
  const { isConnected, address } = useAccount();
  const { data: summary, isLoading } = useWalletData('/summary');
  const { data: analytics } = useWalletData('/analytics');

  if (!isConnected) {
    return (
      <div className="h-full flex items-center justify-center flex-col text-center p-8">
        <div className="w-24 h-24 bg-zinc-900 rounded-full flex items-center justify-center mb-6 border border-zinc-800">
          <Activity size={32} className="text-zinc-500" />
        </div>
        <h2 className="text-2xl font-bold text-zinc-100 mb-2">Connect Your Wallet</h2>
        <p className="text-zinc-400 max-w-md">
          Please connect your MetaMask or compatible wallet to view your Sepolia portfolio, analyze risk, and draft secure transactions.
        </p>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-6xl mx-auto space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-zinc-100">Overview</h2>
        <p className="text-zinc-400 mt-1">Address: {address}</p>
      </div>

      <PendingTransactions />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Coins size={64} />
          </div>
          <p className="text-sm font-medium text-zinc-400 mb-2">ETH Balance</p>
          <div className="text-4xl font-bold text-zinc-100">
            {isLoading ? '...' : (summary?.ethBalance || '0')}
            <span className="text-lg text-zinc-500 ml-2">ETH</span>
          </div>
        </div>

        <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <FileCheck2 size={64} />
          </div>
          <p className="text-sm font-medium text-zinc-400 mb-2">ERC20 Tokens</p>
          <div className="text-4xl font-bold text-zinc-100">
            {isLoading ? '...' : (summary?.tokenCount || '0')}
            <span className="text-lg text-zinc-500 ml-2">Assets</span>
          </div>
        </div>

        <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Activity size={64} />
          </div>
          <p className="text-sm font-medium text-zinc-400 mb-2">Recent Activity</p>
          <div className="text-4xl font-bold text-zinc-100">
            {isLoading ? '...' : (summary?.recentActivity || '0')}
            <span className="text-lg text-zinc-500 ml-2">Txs</span>
          </div>
        </div>
      </div>

      {analytics && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="bg-blue-500/5 border border-blue-500/20 p-6 rounded-xl">
            <h3 className="text-lg font-bold text-blue-400 flex items-center gap-2 mb-4">
              <ShieldAlert size={20} />
              Portfolio Insights
            </h3>
            <ul className="space-y-3">
              {analytics.insights?.map((insight: string, i: number) => (
                <li key={i} className="flex items-start gap-2 text-sm text-zinc-300">
                  <ArrowRight size={16} className="text-blue-500 mt-0.5 shrink-0" />
                  {insight}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-xl flex flex-col justify-center gap-6">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-zinc-400">Risk Level</span>
                <span className={`font-bold ${analytics.riskLevel === 'HIGH' ? 'text-red-400' : analytics.riskLevel === 'MEDIUM' ? 'text-yellow-400' : 'text-emerald-400'}`}>
                  {analytics.riskLevel}
                </span>
              </div>
              <div className="w-full bg-zinc-800 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${Math.min(100, analytics.riskScore)}%` }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-zinc-400">Diversification</span>
                <span className="font-bold text-zinc-100">{analytics.diversificationLevel}</span>
              </div>
              <div className="w-full bg-zinc-800 rounded-full h-2">
                <div className="bg-emerald-500 h-2 rounded-full" style={{ width: `${Math.min(100, analytics.diversificationScore)}%` }}></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
// Note: ShieldAlert import will error if missing, let's fix it by adding ShieldAlert.
