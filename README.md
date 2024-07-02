# MedAIze Project

## Overview
MedAIze is a decentralized application (DApp) designed to manage patient data and fetch health advisories using an EVM smart contract and the Galadriel on-chain LLM oracle. This project utilizes Next.js for the frontend, with key features including wallet integration, patient data management, and health advisory display.

## Key Features
- **User Wallet Integration:** Users can connect their wallets via Metamask.
- **Patient Data Management:** Update and fetch patient data including vital signs, medical history, and laboratory results.
- **Health Advisories:** Fetch and display health advisories received from the Galadriel on-chain LLM oracle.

## Technologies Used
- **Next.js:** For building the frontend interface.
- **Web3.js/Ethers.js:** For blockchain interactions.
- **Material UI:** For styling and UI components.
- **Galadriel Oracle LLM:** For providing health advisories based on patient data.

## Project Structure
```
medaize-project/
├── components/
│   ├── HealthAdvisory.js
│   ├── PatientDashboard.js
│   └── WalletConnect.js
├── pages/
│   ├── index.js
│   ├── dashboard.js
│   └── advisory.js
├── utils/
│   ├── blockchain.js
│   └── contract.js
├── styles/
│   ├── globals.css
│   └── Home.module.css
├── public/
│   └── images/
├── .env.local
├── package.json
└── README.md
```

## Smart Contract Functionalities
The smart contract manages patient data and interacts with the Galadriel on-chain LLM oracle. Below are key functionalities:

- **encodeLaboratoryResults:** Encodes laboratory results into a JSON string.
- **encodeDoctorNotes:** Encodes doctor notes into a JSON string.
- **encodeStringArray:** Encodes an array of strings into a JSON array.
- **onOracleLlmResponse:** Handles the oracle response and emits a `HealthAdvisoryReceived` event.
- **getPatientData:** Fetches patient data for a given address.

### Smart Contract Code Snippets
```solidity
function encodeLaboratoryResults(LaboratoryResults memory results) internal pure returns (string memory) {
    return string(abi.encodePacked(
        '{"bloodTests":', encodeStringArray(results.bloodTests),
        ',"urineTests":', encodeStringArray(results.urineTests),
        '}'
    ));
}

function encodeDoctorNotes(DoctorNotes memory notes) internal pure returns (string memory) {
    return string(abi.encodePacked(
        '{"diagnosis":"', notes.diagnosis,
        '","treatmentPlan":"', notes.treatmentPlan,
        '","medicationsPrescribed":"', notes.medicationsPrescribed,
        '","followUpInstructions":"', notes.followUpInstructions,
        '"}'
    ));
}

function encodeStringArray(string[] memory array) internal pure returns (string memory) {
    string memory result = "[";
    for (uint i = 0; i < array.length; i++) {
        result = string(abi.encodePacked(result, '"', array[i], '"'));
        if (i < array.length - 1) {
            result = string(abi.encodePacked(result, ','));
        }
    }
    result = string(abi.encodePacked(result, "]"));
    return result;
}

function onOracleLlmResponse(
    string memory response,
    address patientAddress
) public onlyOracle {
    emit HealthAdvisoryReceived(patientAddress, response);
}

function getPatientData(address patientAddress) public view returns (Patient memory) {
    return patients[patientAddress];
}
```

## Running the DApp

### Prerequisites
Ensure you have the following installed:
- Node.js
- npm or yarn
- Metamask extension in your browser

### Steps to Run
1. **Clone the Repository:**
    ```bash
    git clone https://github.com/yourusername/medaize-project.git
    cd medaize-project
    ```

2. **Install Dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3. **Environment Variables:**
    Create a `.env.local` file in the root directory and add the following:
    ```
    NEXT_PUBLIC_INFURA_ID=your_infura_project_id
    NEXT_PUBLIC_CONTRACT_ADDRESS=your_smart_contract_address
    ```

4. **Run the Development Server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```
    Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Contributing
We welcome contributions to the MedAIze project. Please open an issue or submit a pull request on GitHub.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

---
