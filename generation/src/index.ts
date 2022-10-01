import fetch from "cross-fetch";
import { ethers } from "ethers";

import { RPC_URL, USDC_ADDRESS, USDC_DECIMALS } from "./config";
import { sendEvent, zeroStripAddress, zeroStripUint } from "./utils";

async function main() {
  const provider = new ethers.providers.JsonRpcProvider(RPC_URL);

  const transferFilter = {
    address: USDC_ADDRESS,
    topics: [ethers.utils.id("Transfer(address,address,uint256)")],
  };

  const burnFilter = {
    address: USDC_ADDRESS,
    topics: [ethers.utils.id("Burn(address,uint256)")],
  };

  const mintFilter = {
    address: USDC_ADDRESS,
    topics: [ethers.utils.id("Mint(address,address,uint256)")],
  };

  provider.on(transferFilter, (log) => {
    const { transactionHash } = log;
    const amount = ethers.BigNumber.from(zeroStripUint(log.data))
      .div(ethers.BigNumber.from(10).pow(USDC_DECIMALS))
      .toNumber();

    let [_evName, from, to] = log.topics;
    from = zeroStripAddress(from);
    to = zeroStripAddress(to);

    provider.getBlock(log.blockNumber).then(({ timestamp }) => {
      sendEvent({
        eventName: "Transfer",
        transactionHash,
        timestamp,
        amount,
        from,
        to,
      });
    });
  });

  provider.on(burnFilter, (log) => {
    const { transactionHash } = log;
    const amount = ethers.BigNumber.from(zeroStripUint(log.data))
      .div(ethers.BigNumber.from(10).pow(USDC_DECIMALS))
      .toNumber();

    let [_evName, burner] = log.topics;
    burner = zeroStripAddress(burner);

    provider.getBlock(log.blockNumber).then(({ timestamp }) => {
      sendEvent({
        eventName: "Burn",
        transactionHash,
        timestamp,
        amount,
        burner,
      });
    });
  });

  provider.on(mintFilter, (log) => {
    const { transactionHash } = log;
    const amount = ethers.BigNumber.from(zeroStripUint(log.data))
      .div(ethers.BigNumber.from(10).pow(USDC_DECIMALS))
      .toNumber();

    let [_evName, minter, to] = log.topics;
    minter = zeroStripAddress(minter);
    to = zeroStripAddress(to);

    provider.getBlock(log.blockNumber).then(({ timestamp }) => {
      sendEvent({
        eventName: "Mint",
        transactionHash,
        timestamp,
        amount,
        to,
      });
    });
  });
}

main();
