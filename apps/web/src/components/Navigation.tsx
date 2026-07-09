'use client';

import { ConnectButton } from '@rainbow-me/rainbowkit';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Briefcase, History, ShieldAlert, List } from 'lucide-react';

export function Navigation() {
  const pathname = usePathname();

  const links = [
    { href: '/dashboard', label: 'Overview', icon: LayoutDashboard },
    { href: '/portfolio', label: 'Portfolio', icon: Briefcase },
    { href: '/transactions', label: 'History', icon: History },
    { href: '/audit', label: 'Audit Logs', icon: List },
    { href: '/risk', label: 'Risk Center', icon: ShieldAlert },
  ];

  return (
    <div className="w-64 bg-zinc-900 border-r border-zinc-800 h-full p-4 flex flex-col">
      <div className="mb-8 p-2">
        <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">WETH</h1>
        <p className="text-xs text-zinc-500 mt-1">MCP Intelligence</p>
      </div>

      <nav className="flex-1 space-y-1">
        {links.map((link) => {
          const Icon = link.icon;
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
                isActive 
                  ? 'bg-blue-500/10 text-blue-400' 
                  : 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50'
              }`}
            >
              <Icon size={18} />
              <span className="font-medium text-sm">{link.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto">
        <ConnectButton showBalance={false} />
      </div>
    </div>
  );
}
