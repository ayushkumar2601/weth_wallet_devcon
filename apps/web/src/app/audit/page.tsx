'use client';

import { useQuery } from '@tanstack/react-query';
import { Activity, Fingerprint } from 'lucide-react';

export default function AuditPage() {
  const { data, isLoading } = useQuery({
    queryKey: ['audit'],
    queryFn: async () => {
      const res = await fetch('http://localhost:3000/transactions/audit/all');
      if (!res.ok) throw new Error('Failed to fetch data');
      return res.json();
    },
    refetchInterval: 5000,
  });

  return (
    <div className="p-8 max-w-6xl mx-auto space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-zinc-100">Audit Logs</h2>
        <p className="text-zinc-400 mt-1">Immutable system execution trace</p>
      </div>

      {isLoading ? (
        <div className="text-zinc-500">Loading audit trail...</div>
      ) : (
        <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl overflow-hidden">
          <table className="w-full text-left text-sm">
            <thead className="bg-zinc-800/50 text-zinc-400">
              <tr>
                <th className="p-4 font-medium">Timestamp</th>
                <th className="p-4 font-medium">Tool Execution</th>
                <th className="p-4 font-medium">Draft ID</th>
                <th className="p-4 font-medium">Trace Payload</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/50">
              {data?.length === 0 && (
                <tr>
                  <td colSpan={4} className="p-8 text-center text-zinc-500">No logs found</td>
                </tr>
              )}
              {data?.map((log: any) => (
                <tr key={log.id} className="hover:bg-zinc-800/20 transition-colors">
                  <td className="p-4 text-zinc-400 whitespace-nowrap">
                    {new Date(log.createdAt).toLocaleString()}
                  </td>
                  <td className="p-4">
                    <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-blue-500/10 text-blue-400 font-medium text-xs">
                      <Activity size={12} />
                      {log.toolName}
                    </span>
                  </td>
                  <td className="p-4 text-zinc-500 font-mono text-xs">
                    {log.transactionId || 'N/A'}
                  </td>
                  <td className="p-4 max-w-xs truncate">
                    <pre className="text-xs text-zinc-500 truncate" title={JSON.stringify(log.requestPayload)}>
                      {JSON.stringify(log.requestPayload)}
                    </pre>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
