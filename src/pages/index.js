// pages/index.js

import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import styles from '../styles/Home.module.css'; // Importing the CSS module
import {  contractABIDATA } from './abi';

const contractAddress = "0xe23c3068292b62eb9BFEC88AD75C19D34501f7F0";
const contractABI = contractABIDATA
const Home = () => {
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [contract, setContract] = useState(null);
  const [walletAddress, setWalletAddress] = useState('');
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [formData, setFormData] = useState({
    systolicBloodPressure: '',
    diastolicBloodPressure: '',
    heartRate: '',
    // Add more fields as needed...
  });

  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        console.log(1111)
        // Request account access if needed
       
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        // Create an ethers provider
        const provider = new ethers.BrowserProvider(window.ethereum);
        setProvider(provider);
        // Get the signer
        const signer = provider.getSigner();
        setSigner(signer);
        // Initialize the contract
        const contract = new ethers.Contract(contractAddress, contractABI, signer);
        setContract(contract);
        // Get the user's wallet address
        const address = accounts[0];
       
        console.log(address)
        setWalletAddress(address);
        setIsWalletConnected(true);
      } catch (error) {
        console.error("Failed to connect to Ethereum provider", error);
      }
    } else {
      alert("Ethereum wallet not detected. Please install MetaMask or another Ethereum wallet.");
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!contract) {
      console.error("Smart contract is not connected");
      return;
    }

    try {
      const patientData = {
        walletAddress: walletAddress, // Use the automatically populated wallet address
        vitalSigns: {
          systolicBloodPressure: parseInt(formData.systolicBloodPressure),
          diastolicBloodPressure: parseInt(formData.diastolicBloodPressure),
          heartRate: parseInt(formData.heartRate),
          // Add more fields as needed...
        },
        anthropometricMeasurements: {
          height: 0, // Replace with actual input fields
          weight: 0, // Replace with actual input fields
          bmi: 0, // Replace with actual input fields
          waistCircumference: 0, // Replace with actual input fields
        },
        symptoms: [], // Replace with actual input fields
        medicalHistory: {
          pastSurgeries: [],
          existingConditions: [],
          allergies: [],
          immunizationHistory: [],
        },
        lifestyleFactors: {
          smokingStatus: '',
          alcoholConsumption: '',
          physicalActivityLevel: '',
          diet: '',
        },
        laboratoryResults: {
          bloodTests: [],
          urineTests: [],
        },
        doctorNotes: {
          diagnosis: '',
          treatmentPlan: '',
          medicationsPrescribed: '',
          followUpInstructions: '',
        },
        patientSatisfactionScore: 0, // Replace with actual input fields
        timeSpentWithDoctor: 0 // Replace with actual input fields
      };

      // Sending the transaction to update patient data
      const tx = await contract.updatePatientData(patientData);
      await tx.wait();
      alert('Patient data updated successfully');
    } catch (error) {
      console.log(error)
      console.error('Error updating patient data:', error);
      alert('Error updating patient data');
    }
  };

  return (
    <div className={styles.container}>
       <h1 style={{color:'black'}}>AI Health Advisor</h1>
       <br/>
      {!isWalletConnected ? (
        <button onClick={connectWallet} className={styles.connectButton}>
          Connect Wallet
        </button>
      ) : (
        <div className={styles.form}>
         
          <form onSubmit={handleSubmit}>
            <label>
              Wallet Address:
              <input type="text" name="walletAddress" value={walletAddress} readOnly />
            </label>
            <label>
              Systolic Blood Pressure:
              <input type="number" name="systolicBloodPressure" value={formData.systolicBloodPressure} onChange={handleChange} required />
            </label>
            <label>
              Diastolic Blood Pressure:
              <input type="number" name="diastolicBloodPressure" value={formData.diastolicBloodPressure} onChange={handleChange} required />
            </label>
            <label>
              Heart Rate:
              <input type="number" name="heartRate" value={formData.heartRate} onChange={handleChange} required />
            </label>
            {/* Add more input fields as needed */}
            <button type="submit">Update Data</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Home;