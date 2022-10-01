import { ethers } from "ethers";

import { TINYBIRD_TOKEN } from "./config";

export function zeroStripAddress(value: string): string {
  return ethers.utils.defaultAbiCoder
    .decode(["address"], value)[0]
    .toLowerCase();
}

export function zeroStripUint(value: string): ethers.BigNumber {
  return ethers.BigNumber.from(
    ethers.utils.defaultAbiCoder.decode(["uint"], value)[0]
  );
}

export function sendEvent(data: {
  eventName: "Transfer" | "Burn" | "Mint";
  transactionHash: string;
  timestamp: number;
  [k: string]: string | number;
}) {
  fetch("https://api.tinybird.co/v0/events?name=usdc_events", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { Authorization: `Bearer ${TINYBIRD_TOKEN}` },
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}
