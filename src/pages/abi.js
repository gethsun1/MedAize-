export const contractABIDATA  = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "initialOracleAddress",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "patientAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "advisory",
				"type": "string"
			}
		],
		"name": "HealthAdvisoryReceived",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "response",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "patientAddress",
				"type": "address"
			}
		],
		"name": "onOracleLlmResponse",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOracleAddress",
				"type": "address"
			}
		],
		"name": "OracleAddressUpdated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "patientAddress",
				"type": "address"
			}
		],
		"name": "PatientDataUpdated",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOracleAddress",
				"type": "address"
			}
		],
		"name": "setOracleAddress",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "walletAddress",
						"type": "address"
					},
					{
						"components": [
							{
								"internalType": "uint256",
								"name": "systolicBloodPressure",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "diastolicBloodPressure",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "heartRate",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "respiratoryRate",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "temperature",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "oxygenSaturation",
								"type": "uint256"
							}
						],
						"internalType": "struct HealthAdvisor.VitalSigns",
						"name": "vitalSigns",
						"type": "tuple"
					},
					{
						"components": [
							{
								"internalType": "uint256",
								"name": "height",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "weight",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "bmi",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "waistCircumference",
								"type": "uint256"
							}
						],
						"internalType": "struct HealthAdvisor.AnthropometricMeasurements",
						"name": "anthropometricMeasurements",
						"type": "tuple"
					},
					{
						"internalType": "string[]",
						"name": "symptoms",
						"type": "string[]"
					},
					{
						"components": [
							{
								"internalType": "string[]",
								"name": "pastSurgeries",
								"type": "string[]"
							},
							{
								"internalType": "string[]",
								"name": "existingConditions",
								"type": "string[]"
							},
							{
								"internalType": "string[]",
								"name": "allergies",
								"type": "string[]"
							},
							{
								"internalType": "string[]",
								"name": "immunizationHistory",
								"type": "string[]"
							}
						],
						"internalType": "struct HealthAdvisor.MedicalHistory",
						"name": "medicalHistory",
						"type": "tuple"
					},
					{
						"components": [
							{
								"internalType": "string",
								"name": "smokingStatus",
								"type": "string"
							},
							{
								"internalType": "string",
								"name": "alcoholConsumption",
								"type": "string"
							},
							{
								"internalType": "string",
								"name": "physicalActivityLevel",
								"type": "string"
							},
							{
								"internalType": "string",
								"name": "diet",
								"type": "string"
							}
						],
						"internalType": "struct HealthAdvisor.LifestyleFactors",
						"name": "lifestyleFactors",
						"type": "tuple"
					},
					{
						"components": [
							{
								"internalType": "string[]",
								"name": "bloodTests",
								"type": "string[]"
							},
							{
								"internalType": "string[]",
								"name": "urineTests",
								"type": "string[]"
							}
						],
						"internalType": "struct HealthAdvisor.LaboratoryResults",
						"name": "laboratoryResults",
						"type": "tuple"
					},
					{
						"components": [
							{
								"internalType": "string",
								"name": "diagnosis",
								"type": "string"
							},
							{
								"internalType": "string",
								"name": "treatmentPlan",
								"type": "string"
							},
							{
								"internalType": "string",
								"name": "medicationsPrescribed",
								"type": "string"
							},
							{
								"internalType": "string",
								"name": "followUpInstructions",
								"type": "string"
							}
						],
						"internalType": "struct HealthAdvisor.DoctorNotes",
						"name": "doctorNotes",
						"type": "tuple"
					},
					{
						"internalType": "uint256",
						"name": "patientSatisfactionScore",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "timeSpentWithDoctor",
						"type": "uint256"
					}
				],
				"internalType": "struct HealthAdvisor.Patient",
				"name": "patient",
				"type": "tuple"
			}
		],
		"name": "updatePatientData",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "patientAddress",
				"type": "address"
			}
		],
		"name": "getPatientData",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "walletAddress",
						"type": "address"
					},
					{
						"components": [
							{
								"internalType": "uint256",
								"name": "systolicBloodPressure",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "diastolicBloodPressure",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "heartRate",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "respiratoryRate",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "temperature",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "oxygenSaturation",
								"type": "uint256"
							}
						],
						"internalType": "struct HealthAdvisor.VitalSigns",
						"name": "vitalSigns",
						"type": "tuple"
					},
					{
						"components": [
							{
								"internalType": "uint256",
								"name": "height",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "weight",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "bmi",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "waistCircumference",
								"type": "uint256"
							}
						],
						"internalType": "struct HealthAdvisor.AnthropometricMeasurements",
						"name": "anthropometricMeasurements",
						"type": "tuple"
					},
					{
						"internalType": "string[]",
						"name": "symptoms",
						"type": "string[]"
					},
					{
						"components": [
							{
								"internalType": "string[]",
								"name": "pastSurgeries",
								"type": "string[]"
							},
							{
								"internalType": "string[]",
								"name": "existingConditions",
								"type": "string[]"
							},
							{
								"internalType": "string[]",
								"name": "allergies",
								"type": "string[]"
							},
							{
								"internalType": "string[]",
								"name": "immunizationHistory",
								"type": "string[]"
							}
						],
						"internalType": "struct HealthAdvisor.MedicalHistory",
						"name": "medicalHistory",
						"type": "tuple"
					},
					{
						"components": [
							{
								"internalType": "string",
								"name": "smokingStatus",
								"type": "string"
							},
							{
								"internalType": "string",
								"name": "alcoholConsumption",
								"type": "string"
							},
							{
								"internalType": "string",
								"name": "physicalActivityLevel",
								"type": "string"
							},
							{
								"internalType": "string",
								"name": "diet",
								"type": "string"
							}
						],
						"internalType": "struct HealthAdvisor.LifestyleFactors",
						"name": "lifestyleFactors",
						"type": "tuple"
					},
					{
						"components": [
							{
								"internalType": "string[]",
								"name": "bloodTests",
								"type": "string[]"
							},
							{
								"internalType": "string[]",
								"name": "urineTests",
								"type": "string[]"
							}
						],
						"internalType": "struct HealthAdvisor.LaboratoryResults",
						"name": "laboratoryResults",
						"type": "tuple"
					},
					{
						"components": [
							{
								"internalType": "string",
								"name": "diagnosis",
								"type": "string"
							},
							{
								"internalType": "string",
								"name": "treatmentPlan",
								"type": "string"
							},
							{
								"internalType": "string",
								"name": "medicationsPrescribed",
								"type": "string"
							},
							{
								"internalType": "string",
								"name": "followUpInstructions",
								"type": "string"
							}
						],
						"internalType": "struct HealthAdvisor.DoctorNotes",
						"name": "doctorNotes",
						"type": "tuple"
					},
					{
						"internalType": "uint256",
						"name": "patientSatisfactionScore",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "timeSpentWithDoctor",
						"type": "uint256"
					}
				],
				"internalType": "struct HealthAdvisor.Patient",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "oracleAddress",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "patientCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "patients",
		"outputs": [
			{
				"internalType": "address",
				"name": "walletAddress",
				"type": "address"
			},
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "systolicBloodPressure",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "diastolicBloodPressure",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "heartRate",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "respiratoryRate",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "temperature",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "oxygenSaturation",
						"type": "uint256"
					}
				],
				"internalType": "struct HealthAdvisor.VitalSigns",
				"name": "vitalSigns",
				"type": "tuple"
			},
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "height",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "weight",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "bmi",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "waistCircumference",
						"type": "uint256"
					}
				],
				"internalType": "struct HealthAdvisor.AnthropometricMeasurements",
				"name": "anthropometricMeasurements",
				"type": "tuple"
			},
			{
				"components": [
					{
						"internalType": "string[]",
						"name": "pastSurgeries",
						"type": "string[]"
					},
					{
						"internalType": "string[]",
						"name": "existingConditions",
						"type": "string[]"
					},
					{
						"internalType": "string[]",
						"name": "allergies",
						"type": "string[]"
					},
					{
						"internalType": "string[]",
						"name": "immunizationHistory",
						"type": "string[]"
					}
				],
				"internalType": "struct HealthAdvisor.MedicalHistory",
				"name": "medicalHistory",
				"type": "tuple"
			},
			{
				"components": [
					{
						"internalType": "string",
						"name": "smokingStatus",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "alcoholConsumption",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "physicalActivityLevel",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "diet",
						"type": "string"
					}
				],
				"internalType": "struct HealthAdvisor.LifestyleFactors",
				"name": "lifestyleFactors",
				"type": "tuple"
			},
			{
				"components": [
					{
						"internalType": "string[]",
						"name": "bloodTests",
						"type": "string[]"
					},
					{
						"internalType": "string[]",
						"name": "urineTests",
						"type": "string[]"
					}
				],
				"internalType": "struct HealthAdvisor.LaboratoryResults",
				"name": "laboratoryResults",
				"type": "tuple"
			},
			{
				"components": [
					{
						"internalType": "string",
						"name": "diagnosis",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "treatmentPlan",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "medicationsPrescribed",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "followUpInstructions",
						"type": "string"
					}
				],
				"internalType": "struct HealthAdvisor.DoctorNotes",
				"name": "doctorNotes",
				"type": "tuple"
			},
			{
				"internalType": "uint256",
				"name": "patientSatisfactionScore",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "timeSpentWithDoctor",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "promptCounter",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]