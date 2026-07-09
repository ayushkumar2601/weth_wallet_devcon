'use client';

import { useAccount } from 'wagmi';
import { useWalletData } from '../../hooks/useWalletData';
import { ShieldAlert, Fingerprint, ExternalLink } from 'lucide-react';

export default function RiskPage() {
  const { isConnected } = useAccount();
  const { data, isLoading } = useWalletData('/approvals');

  if (!isConnected) {
    return <div className="p-8">Connect your wallet to analyze risk.</div>;
  }

  return (
    <div className="p-8 max-w-6xl mx-auto space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-zinc-100">Risk Center</h2>
        <p className="text-zinc-400 mt-1">Smart Contract interactions & ERC20 approvals</p>
      </div>

      {isLoading ? (
        <div className="text-zinc-500">Scanning blockchain for risky interactions...</div>
      ) : (
        <div className="space-y-6">
          <div className="bg-red-500/5 border border-red-500/20 p-6 rounded-xl">
            <h3 className="text-lg font-bold text-red-400 flex items-center gap-2 mb-4">
              <ShieldAlert size={20} />
              AI Recommendations
            </h3>
            <ul className="space-y-3">
              {data?.recommendations?.map((rec: string, i: number) => (
                <li key={i} className="text-sm text-zinc-300">
                  {rec}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-zinc-100 mb-4">Suspicious Interacted Contracts</h3>
            <div className="space-y-3">
              {data?.riskyApprovals?.length === 0 && (
                <div className="p-8 border border-zinc-800 border-dashed rounded-xl text-center text-emerald-500 bg-emerald-500/5">
                  Your wallet is safe. No interactions with known suspicious contracts found.
                </div>
              )}
              
              {data?.riskyApprovals?.map((risk: any, i: number) => (
                <div key={i} className="bg-zinc-900/50 border border-red-500/30 p-5 rounded-xl flex items-center gap-4">
                  <div className="w-10 h-10 bg-red-500/10 rounded-full flex items-center justify-center shrink-0">
                    <Fingerprint size={20} className="text-red-400" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-zinc-100 mb-1">{risk.contract}</div>
                    <div className="text-xs text-red-400">{risk.reason}</div>
                  </div>
                  <a href={`https://sepolia.etherscan.io/address/${risk.contract}`} target="_blank" rel="noopener noreferrer" className="p-2 text-zinc-400 hover:text-zinc-100 transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
