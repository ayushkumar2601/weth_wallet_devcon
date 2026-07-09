'use client';

import { useQuery } from '@tanstack/react-query';

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
    <div className="space-y-6">
      <div className="border-b border-neutral-200 dark:border-neutral-900 pb-4">
        <h1 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">
          Audit Logs
        </h1>
        <p className="text-xs text-neutral-500 mt-1">
          Immutable execution trace of MCP agent tools and human approvals
        </p>
      </div>

      {isLoading ? (
        <div className="py-12 text-center text-xs text-neutral-500">Loading audit trail...</div>
      ) : (
        <div className="border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 rounded-xl overflow-hidden">
          <table className="w-full text-left text-xs">
            <thead className="bg-neutral-100 dark:bg-neutral-900 text-neutral-500 font-mono border-b border-neutral-200 dark:border-neutral-800">
              <tr>
                <th className="p-4 font-medium">Timestamp</th>
                <th className="p-4 font-medium">Tool Execution</th>
                <th className="p-4 font-medium">Draft ID</th>
                <th className="p-4 font-medium">Payload Trace</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200 dark:divide-neutral-900">
              {(!data || data.length === 0) && (
                <tr>
                  <td colSpan={4} className="p-8 text-center text-neutral-500">
                    No execution logs recorded yet
                  </td>
                </tr>
              )}

              {data?.map((log: any) => (
                <tr
                  key={log.id}
                  className="hover:bg-neutral-50 dark:hover:bg-neutral-900/40 transition-colors"
                >
                  <td className="p-4 font-mono text-neutral-500 whitespace-nowrap">
                    {new Date(log.createdAt).toLocaleString()}
                  </td>
                  <td className="p-4">
                    <span className="inline-block px-2 py-1 rounded bg-neutral-100 dark:bg-neutral-900 font-mono font-medium text-[11px] text-neutral-800 dark:text-neutral-200">
                      {log.toolName}
                    </span>
                  </td>
                  <td className="p-4 font-mono text-neutral-500">{log.transactionId || 'N/A'}</td>
                  <td className="p-4 max-w-xs truncate">
                    <pre className="font-mono text-[11px] text-neutral-500 truncate">
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
