import { createPublicClient, http, PublicClient } from 'viem';
import { sepolia } from 'viem/chains';
import Redis from 'ioredis';
import { logger } from '@weth/shared';
import * as dotenv from 'dotenv';
dotenv.config({ path: '../../.env' }); // Load env variables from root for local dev

export const redis = new (Redis as any)(process.env.REDIS_URL || 'redis://localhost:6379');

redis.on('error', (err: any) => {
  logger.error({ err }, 'Redis Client Error');
});

export const viemClient: PublicClient = createPublicClient({
  chain: sepolia,
  transport: http(process.env.SEPOLIA_RPC_URL),
}) as any as PublicClient;
