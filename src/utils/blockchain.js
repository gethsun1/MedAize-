import { ethers } from "ethers";

// Connect to Ethereum blockchain
export async function connectBlockchain() {
  if (window.ethereum) {
    await window.ethereum.request({ method: "eth_requestAccounts" });
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    return provider;
  } else {
    throw new Error("MetaMask not detected. Please install MetaMask.");
  }
}
