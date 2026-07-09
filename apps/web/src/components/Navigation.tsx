'use client';

import { ConnectButton } from '@rainbow-me/rainbowkit';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Box, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export function Navigation() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { href: '/dashboard', label: 'Overview' },
    { href: '/signing', label: 'Signing & Wallets' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/transactions', label: 'History' },
    { href: '/risk', label: 'Risk Center' },
    { href: '/audit', label: 'Audit Logs' },
  ];

  return (
    <header className="w-full border-b border-neutral-200 dark:border-neutral-900 bg-background transition-colors">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
        {/* Top Left: Logo + Badge + Navigation Links strictly on the same line */}
        <div className="flex items-center gap-8 min-w-0 overflow-x-auto">
          <Link href="/dashboard" className="flex items-center gap-2.5 group shrink-0">
            <div className="w-8 h-8 rounded-none border border-neutral-300 dark:border-neutral-800 flex items-center justify-center bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-white">
              <Box className="w-4.5 h-4.5 stroke-[2.2]" />
            </div>
            <span className="text-xl font-bold tracking-tight text-neutral-900 dark:text-white">
              Weth
            </span>
            <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded-none border border-neutral-300 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300">
              v1.1
            </span>
          </Link>

          {/* Navigation Links strictly on the same horizontal line as Weth */}
          <nav className="flex items-center gap-6 shrink-0">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium pb-1 border-b-2 transition-all whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'border-neutral-900 dark:border-white text-neutral-900 dark:text-white'
                      : 'border-transparent text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Top Right: Theme Toggle + Connect Wallet */}
        <div className="flex items-center gap-4 shrink-0">
          {/* Theme Switch */}
          <div className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400">
            <Sun className="w-4 h-4" />
            <button
              type="button"
              onClick={toggleTheme}
              className="w-11 h-6 rounded-none bg-neutral-300 dark:bg-neutral-800 p-0.5 relative transition-colors focus:outline-none border border-neutral-400/30 dark:border-neutral-700 cursor-pointer"
              aria-label="Toggle theme"
            >
              <span
                className={`block w-4.5 h-4.5 rounded-none bg-white dark:bg-neutral-200 transition-transform ${
                  theme === 'dark' ? 'translate-x-5' : 'translate-x-0'
                } shadow-sm`}
              />
            </button>
            <Moon className="w-4 h-4" />
          </div>

          <div className="scale-95">
            <ConnectButton showBalance={false} />
          </div>
        </div>
      </div>
    </header>
  );
}
