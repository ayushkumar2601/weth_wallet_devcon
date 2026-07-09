'use client';

import { useAccount } from 'wagmi';
import { useWalletData } from '../../hooks/useWalletData';
import { Activity, ShieldCheck, ArrowRight, Wallet } from 'lucide-react';
import Link from 'next/link';
import { PendingTransactions } from '../../components/PendingTransactions';

export default function DashboardPage() {
  const { isConnected, address } = useAccount();
  const { data: summary, isLoading } = useWalletData('/summary');
  const { data: analytics } = useWalletData('/analytics');

  if (!isConnected) {
    return (
      <div className="py-20 flex flex-col items-center justify-center text-center">
        <div className="w-16 h-16 bg-neutral-100 dark:bg-neutral-900 rounded-2xl flex items-center justify-center mb-6 border border-neutral-200 dark:border-neutral-800">
          <Wallet className="w-7 h-7 text-neutral-600 dark:text-neutral-400" />
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white mb-2">
          Connect Your Wallet
        </h2>
        <p className="text-sm text-neutral-500 max-w-md mb-6">
          Connect your MetaMask or compatible Ethereum wallet to inspect AI agent transactions, manage approvals, and sign pending drafts.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Top Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-200 dark:border-neutral-900 pb-5">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">
            Overview
          </h1>
          <p className="text-xs font-mono text-neutral-500 mt-1">
            Connected: {address}
          </p>
        </div>

        <Link
          href="/signing"
          className="inline-flex items-center gap-2 bg-neutral-900 text-white dark:bg-white dark:text-black px-4 py-2 rounded-lg font-medium text-xs hover:opacity-90 transition-opacity"
        >
          Open Signing &amp; Wallets
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* Pending Human-in-the-Loop Signing Queue */}
      <PendingTransactions />

      {/* Monochrome Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 p-6 rounded-xl">
          <p className="text-xs font-medium text-neutral-500 mb-2">ETH Balance</p>
          <div className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
            {isLoading ? '...' : summary?.ethBalance || '0.00'}
            <span className="text-sm font-normal text-neutral-500 ml-1.5">ETH</span>
          </div>
        </div>

        <div className="border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 p-6 rounded-xl">
          <p className="text-xs font-medium text-neutral-500 mb-2">ERC20 Assets</p>
          <div className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
            {isLoading ? '...' : summary?.tokenCount || '0'}
            <span className="text-sm font-normal text-neutral-500 ml-1.5">Tokens</span>
          </div>
        </div>

        <div className="border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 p-6 rounded-xl">
          <p className="text-xs font-medium text-neutral-500 mb-2">Recent Execution Count</p>
          <div className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
            {isLoading ? '...' : summary?.recentActivity || '0'}
            <span className="text-sm font-normal text-neutral-500 ml-1.5">Txs</span>
          </div>
        </div>
      </div>

      {/* Analytics & Insights in tasteful monochrome */}
      {analytics && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 p-6 rounded-xl space-y-4">
            <h3 className="text-sm font-semibold text-neutral-900 dark:text-white flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-neutral-500" />
              Agent Risk Assessment
            </h3>
            <ul className="space-y-2.5">
              {analytics.insights?.map((insight: string, i: number) => (
                <li key={i} className="flex items-start gap-2 text-xs text-neutral-600 dark:text-neutral-300">
                  <span className="text-neutral-400">&bull;</span>
                  {insight}
                </li>
              ))}
            </ul>
          </div>

          <div className="border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 p-6 rounded-xl flex flex-col justify-center space-y-4">
            <div className="flex justify-between items-center text-xs">
              <span className="font-medium text-neutral-500">Security Concentration Risk</span>
              <span className="font-mono font-bold text-neutral-900 dark:text-white">
                {analytics.riskLevel}
              </span>
            </div>
            <div className="w-full bg-neutral-100 dark:bg-neutral-900 rounded-full h-1.5">
              <div
                className="bg-neutral-900 dark:bg-white h-1.5 rounded-full transition-all"
                style={{ width: `${Math.min(100, analytics.riskScore || 20)}%` }}
              />
            </div>
            <p className="text-xs text-neutral-500">
              Zero-trust policy enforcement active. Only explicit red-button human signatures can commit transactions.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
