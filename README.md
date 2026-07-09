<div align="center">

# WETH
### MCP-Native Ethereum Infrastructure & Zero-Trust Agentic Wallet for AI Systems

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Model Context Protocol](https://img.shields.io/badge/MCP-1.0.0-8A2BE2?style=for-the-badge)](https://modelcontextprotocol.io)
[![Next.js](https://img.shields.io/badge/Next.js-15-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![Ethereum Sepolia](https://img.shields.io/badge/Ethereum-Sepolia_Testnet-627EEA?style=for-the-badge&logo=ethereum&logoColor=white)](https://sepolia.etherscan.io/)

*Bridging Autonomous AI Agents with Decentralized Finance through Deterministic Policy Engines, Real-Time Blockchain Indexing, and Human-in-the-Loop Cryptographic Execution.*

</div>

---

<!-- ========================================================================== -->
<!-- HERO IMAGE / DEMO BANNER                                                   -->
<!-- ========================================================================== -->
<div align="center">
  <img src="public/image.png" alt="WETH Zero-Trust AI Agent Execution & Landing Page" width="100%" />
  <p><i>Figure 1: WETH Landing Page — Zero-Trust AI Agent Execution with Ironclad Ethereum Security</i></p>
  <br />
  <img src="public/dashboard.png" alt="WETH AI Agentic Wallet Infrastructure Hero Banner" width="100%" />
  <p><i>Figure 2: WETH Human-in-the-Loop Web Dashboard — Autonomous AI Reasoning paired with Zero-Trust Execution</i></p>
</div>

---

## Table of Contents

- [1. Executive Overview & Core Philosophy](#1-executive-overview--core-philosophy)
- [2. Deep Dive: How AI Interacts with Ethereum in WETH](#2-deep-dive-how-ai-interacts-with-ethereum-in-weth)
  - [2.1 The AI-to-Ethereum Bridge via Model Context Protocol (MCP)](#21-the-ai-to-ethereum-bridge-via-model-context-protocol-mcp)
  - [2.2 Autonomous Read, Risk & Portfolio Intelligence](#22-autonomous-read-risk--portfolio-intelligence)
  - [2.3 Zero-Trust Agentic Transaction Lifecycle](#23-zero-trust-agentic-transaction-lifecycle)
  - [2.4 Deterministic Policy & AI Risk Scoring Engine](#24-deterministic-policy--ai-risk-scoring-engine)
- [3. System Architecture & Diagrams](#3-system-architecture--diagrams)
  - [3.1 End-to-End System Architecture](#31-end-to-end-system-architecture)
  - [3.2 AI-Driven Transaction & Human-in-the-Loop Sequence Flow](#32-ai-driven-transaction--human-in-the-loop-sequence-flow)
  - [3.3 AI Portfolio Security & Allowance Auditing Pipeline](#33-ai-portfolio-security--allowance-auditing-pipeline)
- [4. Complete MCP Tool Suite (13 Specialized Tools)](#4-complete-mcp-tool-suite-13-specialized-tools)
- [5. Application Gallery & Visual Showcase](#5-application-gallery--visual-showcase)
- [6. Monorepo Structure & Packages](#6-monorepo-structure--packages)
- [7. Quickstart & Deployment Guide](#7-quickstart--deployment-guide)
- [8. Claude Desktop & AI Agent Configuration](#8-claude-desktop--ai-agent-configuration)
- [9. Audit Trail & Compliance](#9-audit-trail--compliance)
- [10. Security & Threat Model](#10-security--threat-model)

---

## 1. Executive Overview & Core Philosophy

As Large Language Models (LLMs) and autonomous agents evolve from conversation assistants into actionable economic agents, their integration with blockchain networks becomes critical. However, granting direct private key custody to non-deterministic AI models introduces catastrophic financial risk.

**WETH** solves this fundamental challenge by creating an **MCP-Native, Zero-Trust Execution Infrastructure** between AI models (such as Claude, Gemini, or custom LLM copilots) and Ethereum:

```
+--------------------------------------------------------------------------------------------------+
|                                    THE WETH SECURITY PARADIGM                                    |
|                                                                                                  |
|   [ AI AGENT SANDBOX ]                   [ POLICY & RISK ENGINE ]          [ HUMAN WALLET ]      |
|   Reads Chain State                      Evaluates Gas & Allowance         Holds Private Key     |
|   Simulates Transactions     ------->    Enforces Max Spend Limits   ----> Signs Approved Drafts |
|   Drafts Intent Actions                  Detects Anomalies / Drains        Broadcasts On-Chain   |
+--------------------------------------------------------------------------------------------------+
```

1. **AI Autonomous Intelligence Layer**: AI agents can query live token balances, index historical token flows via Alchemy, resolve ENS domains, simulate transactions against EVM state, and scan wallets for risky ERC20 allowances.
2. **Deterministic Guardrail Layer**: Before any transaction draft is created, WETH's automated **Policy Engine** and **Risk Engine** intercept the payload, checking deterministic rules (maximum transfer volume, contract blacklists, unusual gas spikes, concentration limits).
3. **Non-Custodial Human Execution Layer**: AI agents **never** hold private keys. Instead, they produce cryptographically verified transaction drafts. Human operators review and sign these drafts inside a sleek Next.js 15 Web Dashboard using MetaMask or wallet extensions.

---

## 2. Deep Dive: How AI Interacts with Ethereum in WETH

### 2.1 The AI-to-Ethereum Bridge via Model Context Protocol (MCP)

WETH turns raw Ethereum JSON-RPC and Alchemy Indexer APIs into structured, semantic tools via the **Model Context Protocol (MCP)**. Instead of prompting an LLM to generate raw hex-encoded calldata or manage brittle RPC calls, WETH exposes **type-safe JSON schemas (Zod)** directly to the model's tool-calling engine.

When an AI agent receives a natural language prompt such as:
> *"Analyze my Sepolia wallet `ayush.eth`, check if I have suspicious token approvals, and draft a 0.5 ETH transfer to `vitalik.eth` if safe."*

The model autonomously reasons over its available MCP toolset and executes structured function calls sequentially.

### 2.2 Autonomous Read, Risk & Portfolio Intelligence

AI agents connected to WETH act as institutional-grade blockchain analysts:

- **Token Balance Indexing (`alchemy_getTokenBalances`)**: AI inspects real-time native ETH and ERC20 balances, calculating portfolio concentration and diversification metrics.
- **Transaction Flow Mapping (`alchemy_getAssetTransfers`)**: AI maps historical incoming and outgoing asset transfers to detect wallet behavioral patterns.
- **Smart Contract Risk Auditing (`detect_risky_approvals`)**: AI inspects ERC20 `allowance()` states across protocols to identify unlimited spending permissions granted to unverified or potentially compromised spender contracts.

### 2.3 Zero-Trust Agentic Transaction Lifecycle

WETH establishes an explicit, auditable separation between **Intent Generation (AI)** and **Cryptographic Authorization (Human)**:

```
[ Natural Language Prompt ]
            │
            ▼
┌────────────────────────────────────────────────────────┐
│ Phase 1: Autonomous AI Intelligence & State Simulation │
├────────────────────────────────────────────────────────┤
│ 1. resolve_ens(name) -> Address                        │
│ 2. estimate_gas(tx) -> EIP-1559 Cost Breakdown        │
│ 3. simulate_transaction(tx) -> EVM Revert Check        │
└────────────────────────────────────────────────────────┘
            │
            ▼
┌────────────────────────────────────────────────────────┐
│ Phase 2: Deterministic Policy & Risk Interception      │
├────────────────────────────────────────────────────────┤
│ 4. analyze_transaction_risk(draft) -> Risk Score 0-100 │
│    ├── Threshold Verification (e.g. < 10 ETH Limit)    │
│    ├── Blacklisted Recipient Verification              │
│    └── Policy Compliance Flag                          │
└────────────────────────────────────────────────────────┘
            │
            ▼
┌────────────────────────────────────────────────────────┐
│ Phase 3: Cryptographic Human-In-The-Loop Execution     │
├────────────────────────────────────────────────────────┤
│ 5. create_transaction_draft() -> PENDING_APPROVAL      │
│ 6. Next.js Web Application Fetches Drafts              │
│ 7. Human Signs via MetaMask (Private Key Local)        │
│ 8. Broadcast & Permanent Audit Log Recording          │
└────────────────────────────────────────────────────────┘
```

### 2.4 Deterministic Policy & AI Risk Scoring Engine

Every AI action passes through two independent evaluation layers:

| Layer | Type | Responsibility | Examples |
| :--- | :--- | :--- | :--- |
| **Policy Engine** | Hard Deterministic Rules | Instant acceptance or rejection based on hardcoded governance limits. | • Reject transfer > 10 ETH<br>• Reject interaction with blacklisted addresses<br>• Require explicit simulation success |
| **Risk Engine** | Quantitative Scoring | Computes a composite risk score (`0.0 - 100.0`) categorized into `LOW`, `MEDIUM`, `HIGH`, or `CRITICAL`. | • New / unverified recipient address<br>• High gas consumption relative to value transferred<br>• Portfolio concentration erosion |

---

## 3. System Architecture & Diagrams

### 3.1 End-to-End System Architecture

```mermaid
graph TB
    subgraph AI["AI Layer (Client Sandbox)"]
        Claude["Claude Desktop / AI Copilot"]
        LLM["Agent LLM Runtime"]
    end

    subgraph MCP["MCP Infrastructure Layer"]
        MCPServer["WETH MCP Server (Stdio/SSE)"]
        ToolRegistry["13 Structured Blockchain Tools"]
    end

    subgraph Core["Core Application & Policy Layer"]
        Fastify["Fastify Backend API"]
        Policy["Deterministic Policy Engine"]
        Risk["Quantitative Risk Scoring Engine"]
        Audit["Immutable Audit Logger"]
    end

    subgraph Data["Persistence & Caching"]
        Postgres[(PostgreSQL / Prisma)]
        Redis[(Redis Cache / RPC Limiter)]
    end

    subgraph Blockchain["Ethereum & Indexing Layer"]
        Viem["Viem / EVM Execution Service"]
        Alchemy["Alchemy Indexer APIs"]
        Sepolia["Ethereum Sepolia Network"]
    end

    subgraph Frontend["Human Execution Layer"]
        WebDashboard["Next.js 15 Dashboard"]
        MetaMask["MetaMask / Browser Wallet"]
    end

    Claude <-->|JSON-RPC via MCP| MCPServer
    MCPServer <--> ToolRegistry
    ToolRegistry <--> Fastify
    Fastify --> Policy
    Fastify --> Risk
    Fastify --> Audit
    Fastify <--> Postgres
    Fastify <--> Redis
    Fastify <--> Viem
    Viem <--> Alchemy
    Viem <--> Sepolia
    WebDashboard <-->|REST / WebSockets| Fastify
    WebDashboard <-->|EIP-1193 Sign| MetaMask
    MetaMask -->|Broadcast Raw Tx| Sepolia
```

---

### 3.2 AI-Driven Transaction & Human-in-the-Loop Sequence Flow

```mermaid
sequenceDiagram
    autonumber
    actor User as Human Operator
    participant AI as AI Agent (Claude)
    participant MCP as WETH MCP Server
    participant Policy as Policy & Risk Engine
    participant DB as PostgreSQL DB
    participant Web as Next.js Web Dashboard
    participant Chain as Ethereum Sepolia

    User->>AI: "Send 0.5 ETH to vitalik.eth if my risk profile is low."
    AI->>MCP: resolve_ens({ name: "vitalik.eth" })
    MCP->>Chain: ENS Registry Lookup
    Chain-->>MCP: 0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045
    MCP-->>AI: Resolved Address

    AI->>MCP: simulate_transaction({ to, value: "0.5 ETH" })
    MCP->>Chain: eth_call State Simulation
    Chain-->>MCP: Simulation Success (Gas: 21000)
    MCP-->>AI: Simulation Verified

    AI->>MCP: analyze_transaction_risk({ to, value })
    MCP->>Policy: Evaluate Rules & Risk Weight
    Policy-->>MCP: Risk: LOW (12.5/100), Policy: APPROVED
    MCP-->>AI: Risk Assessment Report

    AI->>MCP: create_transaction_draft({ to, value, reason })
    MCP->>DB: INSERT TransactionDraft (status: PENDING_APPROVAL)
    DB-->>MCP: Draft ID: #tx_981a
    MCP-->>AI: Draft Created. Waiting for Human Signature.
    AI-->>User: "I simulated and drafted the transaction (#tx_981a). Please sign in the dashboard."

    User->>Web: Opens WETH Web Dashboard -> Pending Transactions
    Web->>DB: Fetch PENDING_APPROVAL Drafts
    User->>Web: Click "Approve & Sign"
    Web->>User: Prompt MetaMask Wallet Signature
    User->>Web: Sign Transaction
    Web->>Chain: eth_sendRawTransaction
    Chain-->>Web: Tx Hash: 0x8f2a...
    Web->>DB: Update Status -> COMPLETED (Recorded in Audit Log)
```

---

### 3.3 AI Portfolio Security & Allowance Auditing Pipeline

```mermaid
flowchart LR
    A[AI Agent Request:<br>detect_risky_approvals] --> B[Fetch Token Holdings<br>via Alchemy Indexer]
    B --> C[Iterate ERC20 Spender Allowances]
    C --> D{Is Allowance > 1,000,000<br>or UNLIMITED?}
    D -->|No| E[Mark Spender as Safe]
    D -->|Yes| F{Is Spender Address<br>Verified Protocol?}
    F -->|Yes| G[Flag as Informational High-Allowance]
    F -->|No| H[ALERT: CRITICAL SPEND RISK<br>Unverified Unlimited Spender]
    E --> I[Compile AI Audit Report]
    G --> I
    H --> I
```

---

## 4. Complete MCP Tool Suite (13 Specialized Tools)

WETH equips AI models with **13 strictly typed MCP tools** grouped across four strategic operational layers:

### Read & Indexing Layer
| Tool Name | Parameters | Description |
| :--- | :--- | :--- |
| `get_balance` | `address: string` | Retrieves the real-time native ETH balance of an address on Sepolia. |
| `get_token_balances` | `address: string` | Fetches complete ERC20 token balances using Alchemy indexer APIs. |
| `get_transactions` | `address: string`, `limit?: number` | Queries historical incoming and outgoing token transfers. |
| `get_wallet_summary` | `address: string` | Returns an aggregated overview of balances, token counts, and recent activity. |
| `resolve_ens` | `name: string` | Resolves Ethereum Name Service (`.eth`) domains to 0x addresses. |

### Simulation & Gas Intelligence Layer
| Tool Name | Parameters | Description |
| :--- | :--- | :--- |
| `estimate_gas` | `from, to, value, data` | Calculates precise gas estimates and EIP-1559 fee parameters. |
| `simulate_transaction` | `from, to, value, data` | Performs dry-run EVM state simulation to catch reverts before drafting. |

### Policy, Risk & Portfolio Analytics Layer
| Tool Name | Parameters | Description |
| :--- | :--- | :--- |
| `analyze_transaction_risk` | `txPayload: TransactionDraft` | Evaluates transaction payload against deterministic policy rules and AI risk models. |
| `analyze_wallet` | `address: string` | Performs deep portfolio concentration and asset distribution analysis. |
| `detect_risky_approvals` | `address: string` | Scans wallet history for suspicious or unlimited ERC20 token spending allowances. |

### Zero-Trust Execution Layer
| Tool Name | Parameters | Description |
| :--- | :--- | :--- |
| `create_transaction_draft` | `to, value, data, reason` | Creates a zero-trust transaction draft flagged for human cryptographic approval. |
| `approve_transaction` | `draftId: string` | Updates draft state in PostgreSQL after human review. |
| `broadcast_transaction` | `signedTxHex: string` | Broadcasts raw signed transaction hex to Ethereum network. |

---

## 5. Application Gallery & Visual Showcase

<!-- ========================================================================== -->
<!-- UI SCREENSHOT GALLERY                                                      -->
<!-- ========================================================================== -->

### 5.1 Next.js Human-in-the-Loop Dashboard (`dashboard`)
<div align="center">
  <img src="public/dashboard.png" alt="WETH Web Dashboard Preview" width="95%" />
  <p><i>Figure 2: Dark-mode Web Dashboard displaying PENDING_APPROVAL AI drafts awaiting user MetaMask signature.</i></p>
</div>

### 5.2 Signing Console & Wallet Manager (`wallet`)
<div align="center">
  <img src="public/wallet.png" alt="Signing & Wallet Management View" width="95%" />
  <p><i>Figure 3: Expandable secret phrase management, chain selector, and human-in-the-loop transaction signing console.</i></p>
</div>

### 5.3 Execution History & Immutable Ledger (`history`)
<div align="center">
  <img src="public/history.png" alt="Transaction Execution History" width="95%" />
  <p><i>Figure 4: Immutable ledger of signed transfers and contract interactions.</i></p>
</div>

### 5.4 Claude Desktop & MCP Agent Interaction (`claude1`)
<div align="center">
  <img src="public/claude1.png" alt="Claude Desktop MCP Session" width="95%" />
  <p><i>Figure 5: Claude autonomously inspecting balances, evaluating safety, and drafting transactions via WETH MCP Tools.</i></p>
</div>

---

## 6. Monorepo Structure & Packages

WETH is organized as a modular pnpm monorepo architected for scalability, strict type safety, and clean separation of concerns:

```
weth/
├── apps/
│   ├── api/                  # Fastify REST API server with Policy & Risk validation
│   ├── mcp-server/           # Standard Stdio/SSE Model Context Protocol Server
│   └── web/                  # Next.js 15 / React 19 / Wagmi Human Dashboard
├── packages/
│   ├── blockchain/           # Viem clients, Alchemy integration & ENS resolvers
│   ├── database/             # Prisma ORM schema & PostgreSQL migrations
│   └── shared/               # Zod schemas, Policy Engine, Risk Engine & Analytics
├── docs/                     # Technical specifications & hackathon documentation
├── docker-compose.yml        # PostgreSQL & Redis infrastructure containers
└── pnpm-workspace.yaml       # Monorepo workspace configuration
```

---

## 7. Quickstart & Deployment Guide

### Prerequisites
- **Node.js**: `>= 20.x`
- **pnpm**: `>= 9.x`
- **Docker & Docker Compose**: For local PostgreSQL database and Redis caching instance.

### 1. Clone & Install Dependencies
```bash
git clone https://github.com/ayushkumar2601/wallet_weth.git
cd wallet_weth
pnpm install
```

### 2. Configure Environment Variables
Copy `.env.example` to `.env` and configure your Sepolia RPC / Alchemy keys:
```bash
cp .env.example .env
```
Ensure the following variables are set in your `.env`:
```env
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/weth?schema=public"
REDIS_URL="redis://localhost:6379"
ALCHEMY_API_KEY="your_alchemy_api_key_here"
RPC_URL="https://eth-sepolia.g.alchemy.com/v2/your_alchemy_api_key_here"
PORT=3001
```

### 3. Launch Database Infrastructure & Migrate
Start PostgreSQL and Redis services via Docker Compose:
```bash
docker-compose up -d
pnpm prisma:generate
pnpm prisma:migrate
```

### 4. Start the Application Stack
Run all backend, MCP, and frontend services concurrently in development mode:
```bash
pnpm dev
```
- **Fastify API Server**: `http://localhost:3001`
- **Next.js Web Dashboard**: `http://localhost:3000`
- **MCP Server**: Stdio stream or SSE endpoint ready for LLM connection.

---

## 8. Claude Desktop & AI Agent Configuration

To connect Claude Desktop directly to your local WETH Ethereum infrastructure, add the following configuration block to your `claude_desktop_config.json`:

### macOS (`~/Library/Application Support/Claude/claude_desktop_config.json`)
### Linux (`~/.config/Claude/claude_desktop_config.json`)

```json
{
  "mcpServers": {
    "weth-blockchain-agent": {
      "command": "node",
      "args": [
        "/ABSOLUTE_PATH_TO/wallet_weth/apps/mcp-server/dist/index.js"
      ],
      "env": {
        "DATABASE_URL": "postgresql://postgres:postgres@localhost:5432/weth?schema=public",
        "ALCHEMY_API_KEY": "your_alchemy_api_key_here"
      }
    }
  }
}
```

Once saved, restart Claude Desktop. You will see the **hammer icon** indicating all 13 WETH blockchain tools are active and ready for autonomous reasoning.

---

## 9. Audit Trail & Compliance

WETH is built for high-security environments. Every interaction between an AI model and the blockchain is permanently captured in the `TransactionAudit` database table:

```prisma
model TransactionAudit {
  id              String   @id @default(uuid())
  toolName        String   // MCP tool invoked (e.g., create_transaction_draft)
  requestPayload  Json     // Full JSON input passed by the LLM
  responsePayload Json     // Full JSON output / risk score returned
  transactionId   String?  // Associated draft or on-chain tx hash
  createdAt       DateTime @default(now())
}
```

This ensures complete institutional compliance and reproducibility: security teams can reconstruct the exact prompt, risk evaluation, and human signature associated with any on-chain event.

---

## 10. Security & Threat Model

1. **Zero Private Key Exposure**: The AI model operates strictly inside a sandboxed read/draft layer. No private keys are ever injected into LLM system prompts or server environment variables.
2. **Double-Layered Threshold Enforcements**: Even if an AI agent experiences prompt injection or hallucination and drafts a malicious transaction, the backend **Policy Engine** deterministically blocks unauthorized payloads before they enter the human signing queue.
3. **Frontend Origin Verification**: Only cryptographically signed payloads authorized by the user's browser wallet (MetaMask / EIP-1193) can trigger on-chain execution.

---

<div align="center">
  <p>Built with precision for High-Assurance AI + Blockchain Infrastructure.</p>
  <p><b>WETH Team © 2026</b></p>
</div>
