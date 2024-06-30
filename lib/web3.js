// // lib/web3.js

// import { ethers } from "ethers";

// const provider = new ethers.providers.Web3Provider(window.ethereum)
// console.log(provider)
// const signer = provider.getSigner();

// const getContract = (contractAddress, contractABI) => {
//   return new ethers.Contract(contractAddress, contractABI, signer);
// };

// export { provider, signer, getContract };