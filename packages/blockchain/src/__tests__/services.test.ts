import { describe, it, expect, vi } from 'vitest';
import { BalanceService } from '../services/BalanceService.js';
import { TransactionService } from '../services/TransactionService.js';
import { EnsService } from '../services/EnsService.js';

// Mock dependencies
vi.mock('../client.js', () => ({
  viemClient: {
    getBalance: vi.fn().mockResolvedValue(1000000000000000000n), // 1 ETH
    getEnsAddress: vi.fn().mockResolvedValue('0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045'),
  },
  redis: {
    get: vi.fn().mockResolvedValue(null),
    setex: vi.fn().mockResolvedValue('OK'),
  }
}));

describe('Blockchain Services', () => {
  it('BalanceService should get balance', async () => {
    const result = await BalanceService.getBalance('0x123');
    expect(result.eth).toBe(1);
    expect(result.network).toBe('sepolia');
  });

  it('BalanceService should return empty tokens for now', async () => {
    const result = await BalanceService.getTokenBalances('0x123');
    expect(result).toEqual([]);
  });

  it('TransactionService should return empty array for now', async () => {
    const result = await TransactionService.getTransactions('0x123');
    expect(result).toEqual([]);
  });

  it('EnsService should resolve name', async () => {
    const result = await EnsService.resolveName('vitalik.eth');
    expect(result.address).toBe('0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045');
  });
});
