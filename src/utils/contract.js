import { ethers } from "ethers";

// Example contract interface
const contractABI = [
  // ABI definition here
];

// Contract address on Ethereum mainnet or testnet
const contractAddress = "0x...";

// Connect to deployed smart contract
export function connectContract(provider) {
  const contract = new ethers.Contract(contractAddress, contractABI, provider);
  return contract;
}
