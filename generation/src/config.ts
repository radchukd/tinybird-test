import { config } from "dotenv";

config();

export const RPC_URL = process.env.RPC_URL;
export const TINYBIRD_TOKEN = process.env.TINYBIRD_TOKEN;
export const USDC_ADDRESS = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";
export const USDC_DECIMALS = 6;
