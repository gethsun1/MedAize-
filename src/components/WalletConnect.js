import React from "react";

const WalletConnect = ({ connectWallet }) => {
  return (
    <div className="wallet-connect">
      <h2>Connect Your Wallet</h2>
      <button onClick={connectWallet}>Connect Wallet</button>
    </div>
  );
};

export default WalletConnect;
