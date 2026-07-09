'use client';

import { useQuery, useMutation } from '@tanstack/react-query';
import { useAccount, useSendTransaction, useWaitForTransactionReceipt } from 'wagmi';
import { Check, X, Loader2, Send } from 'lucide-react';
import { parseEther } from 'viem';

export function PendingTransactions() {
  const { address, isConnected } = useAccount();
  const { sendTransactionAsync, isPending: isSigning } = useSendTransaction();

  const { data: drafts, refetch } = useQuery({
    queryKey: ['pending-drafts', address],
    queryFn: async () => {
      const res = await fetch(`http://localhost:3000/transactions/pending/${address}`);
      if (!res.ok) throw new Error('Failed to fetch');
      return res.json();
    },
    enabled: isConnected && !!address,
    refetchInterval: 3000,
  });

  const broadcastMutation = useMutation({
    mutationFn: async ({ draftId, hash }: { draftId: string, hash: string }) => {
      const res = await fetch('http://localhost:3000/transactions/broadcast', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ draftId, signedTransaction: hash })
      });
      if (!res.ok) throw new Error('Broadcast failed');
      return res.json();
    },
    onSuccess: () => refetch()
  });

  const handleSign = async (draft: any) => {
    try {
      const hash = await sendTransactionAsync({
        to: draft.toAddress as `0x${string}`,
        value: BigInt(draft.value || '0'), 
        data: (draft.data && draft.data !== '0x') ? draft.data as `0x${string}` : undefined
      });
      await broadcastMutation.mutateAsync({ draftId: draft.id, hash });
    } catch (err) {
      console.error(err);
    }
  };

  if (!drafts || drafts.length === 0) return null;

  return (
    <div className="mt-8 space-y-4">
      <h3 className="text-xl font-bold text-zinc-100 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
        Action Required: Pending Approvals
      </h3>
      
      {drafts.map((draft: any) => (
        <div key={draft.id} className="bg-blue-500/10 border border-blue-500/30 p-5 rounded-xl flex items-center justify-between">
          <div>
            <div className="text-sm text-blue-400 font-medium mb-1">AI Draft Ready for Signing</div>
            <div className="text-zinc-100 font-bold">
              Send {draft.value} Wei to {draft.toAddress.slice(0,6)}...{draft.toAddress.slice(-4)}
            </div>
            <div className="text-xs text-zinc-500 mt-1 font-mono">{draft.id}</div>
          </div>
          
          <button 
            onClick={() => handleSign(draft)}
            disabled={isSigning || broadcastMutation.isPending}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium text-sm flex items-center gap-2 transition-colors disabled:opacity-50"
          >
            {(isSigning || broadcastMutation.isPending) ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
            Sign & Broadcast
          </button>
        </div>
      ))}
    </div>
  );
}
