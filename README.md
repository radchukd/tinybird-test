# Tinybird task

Tinybird demo

## Generation

Listens to events (Transfer, Burn, Mint) on USDC contract on ETH mainnet and sends indexed data to Tinybird

### Usage

```bash
cd generation && yarn
touch .evn # Add env vars
tsc && node dist/index.js
```

## Visualisation

SPA build with vite & react that shows data from 2 Tinybird's pipes

### Usage

```bash
cd frontend && yarn
npm run dev
```
