
# MedAize
----
MedAize is a decentralized application (DApp) designed to manage patient data and fetch health advisories using blockchain technology. It integrates with the Galadriel on-chain LLM oracle to provide up-to-date health advisories based on patient data.

## Overview
---

MedAize utilizes Next.js for the frontend, providing a seamless user experience. Users can securely connect their wallets via MetaMask, manage their patient data, and receive health advisories from the Galadriel oracle.

## Key Features

- **User Wallet Integration:** Securely connect your wallet using MetaMask to access the DApp.
- **Patient Data Management:** Update and fetch patient data, including vital signs, medical history, and laboratory results.
- **Health Advisories:** Receive real-time health advisories based on patient data fetched from the Galadriel on-chain LLM oracle.

## Potential Use Cases

- **Personal Health Monitoring:** Individuals can use MedAize to track and manage their health data over time, receiving personalized health advisories based on their medical history and current health metrics.
  
- **Medical Research:** Researchers can access anonymized patient data stored on the blockchain through MedAize, facilitating studies on population health trends and treatment outcomes while maintaining patient privacy.

- **Healthcare Providers:** Hospitals and clinics can integrate MedAize to streamline patient data management, ensuring accurate and up-to-date medical records while leveraging blockchain for data security and integrity.

- **Public Health Initiatives:** Governments and public health organizations can utilize MedAize to disseminate health advisories and track disease outbreaks in real-time, enhancing public health response and communication.

## Technologies Used

- **Next.js:** React framework for building the frontend interface.
- **Web3.js/Ethers.js:** Libraries for interacting with Ethereum blockchain.
- **Material UI:** For styling and UI components.
- **Galadriel Oracle LLM:** Provides health advisories based on patient data.

## Project Structure

```
~/MedAize/
├── README.md
├── contracts/
│   ├── HealthAdvisor.sol        # Smart contract managing patient data and health advisories
│   └── artifacts/
│       ├── IOracle.json         # Compiled ABI for the Oracle smart contract
│       ├── IOracle_metadata.json
│       └── build-info/
│           └── 7d3d75e432c15935f33860e54fe3c97d.json
├── jsconfig.json
├── lib/
│   ├── contract.js              # JavaScript utility for interacting with Ethereum smart contracts
│   └── web3.js                  # Web3 setup and configuration
├── next.config.mjs
├── package-lock.json
├── package.json
├── public/
│   ├── favicon.ico
│   ├── next.svg
│   └── vercel.svg
└── src/
    ├── components/
    │   ├── HealthAdvisory.js    # React component for displaying health advisories
    │   ├── PatientDashboard.js  # React component for managing patient data
    │   └── WalletConnect.js     # React component for wallet connection
    ├── pages/
    │   ├── _app.js               # Custom Next.js app component
    │   ├── _document.js          # Custom Next.js document component
    │   ├── abi.js                # ABI definitions for smart contracts
    │   ├── advisory.js           # Page for displaying health advisories
    │   ├── api/
    │   │   └── hello.js          # Example API route (placeholder)
    │   ├── dashboard.js          # Page for patient dashboard
    │   └── index.js              # Index page
    ├── styles/
    │   ├── Home.module.css       # CSS module for homepage styles
    │   └── globals.css           # Global CSS styles
    └── utils/
        ├── blockchain.js         # Utility functions for blockchain interactions
        └── contract.js           # Contract-related utility functions
```

## Setting Up

### Prerequisites

- Node.js installed on your machine
- npm or yarn package manager
- MetaMask browser extension

### Environment Variables

Create a `.env.local` file in the root directory with the following environment variables:

```
NEXT_PUBLIC_GALADRIEL_ORACLE_ADDRESS=your_galadriel_oracle_address
PRIVATE_KEY=your_wallet_private_key
```

Replace `your_galadriel_oracle_address` with the actual address of the Galadriel oracle contract, and `your_wallet_private_key` with the private key of your wallet for blockchain interactions.

### Running the DApp

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/gethsun1/MedAize-.git
   cd MedAize-
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the Development Server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in Browser:**
   Open [http://localhost:3000](http://localhost:3000) to view the application in your browser.

## Contributing

Contributions to MedAize are welcome! Please open an issue or submit a pull request on GitHub.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
```
