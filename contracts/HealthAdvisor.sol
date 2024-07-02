
// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.9;


import "./IOracle.sol";

import "@openzeppelin/contracts/utils/Strings.sol";


contract HealthAdvisor {


    struct Patient {

        address walletAddress;

        VitalSigns vitalSigns;

        AnthropometricMeasurements anthropometricMeasurements;

        string[] symptoms;

        MedicalHistory medicalHistory;

        LifestyleFactors lifestyleFactors;

        LaboratoryResults laboratoryResults;

        DoctorNotes doctorNotes;

        uint patientSatisfactionScore;

        uint timeSpentWithDoctor;

    }


    struct VitalSigns {

        uint systolicBloodPressure;

        uint diastolicBloodPressure;

        uint heartRate;

        uint respiratoryRate;

        uint temperature;

        uint oxygenSaturation;

    }


    struct AnthropometricMeasurements {

        uint height;

        uint weight;

        uint bmi;

        uint waistCircumference;

    }


    struct MedicalHistory {

        string[] pastSurgeries;

        string[] existingConditions;

        string[] allergies;

        string[] immunizationHistory;

    }


    struct LifestyleFactors {

        string smokingStatus;

        string alcoholConsumption;

        string physicalActivityLevel;

        string diet;

    }


    struct LaboratoryResults {

        string[] bloodTests;

        string[] urineTests;

    }


    struct DoctorNotes {

        string diagnosis;

        string treatmentPlan;

        string medicationsPrescribed;

        string followUpInstructions;

    }


    mapping(address => Patient) public patients;

    uint public patientCount;

    uint public promptCounter; // Counter to generate unique promptId


    event PatientDataUpdated(address indexed patientAddress);

    event HealthAdvisoryReceived(address indexed patientAddress, string advisory);


    address private owner;

    address public oracleAddress;


    event OracleAddressUpdated(address indexed newOracleAddress);


    constructor(address initialOracleAddress) {

        owner = msg.sender;

        oracleAddress = initialOracleAddress;

    }


    modifier onlyOwner() {

        require(msg.sender == owner, "Caller is not owner");

        _;

    }


    modifier onlyOracle() {

        require(msg.sender == oracleAddress, "Caller is not oracle");

        _;

    }


    function setOracleAddress(address newOracleAddress) public onlyOwner {

        oracleAddress = newOracleAddress;

        emit OracleAddressUpdated(newOracleAddress);

    }


    function updatePatientData(Patient memory patient) public {

        patients[msg.sender] = patient;

        patientCount++;


        emit PatientDataUpdated(msg.sender);


        // Increment the prompt counter to generate a unique promptId

        promptCounter++;


        // Query the oracle with the unique promptId

        IOracle(oracleAddress).createLlmCall(promptCounter);


        // Use patientDataJson for oracle call if needed

        // For example:

        // IOracle(oracleAddress).createLlmCall(promptCounter, patientDataJson);

    }


    function getPatientDataJson(Patient memory patient) internal pure returns (string memory) {

        return string(abi.encodePacked(

            '{"vitalSigns":', encodeVitalSigns(patient.vitalSigns),

            ',"anthropometricMeasurements":', encodeAnthropometricMeasurements(patient.anthropometricMeasurements),

            ',"symptoms":', encodeStringArray(patient.symptoms),

            ',"medicalHistory":', encodeMedicalHistory(patient.medicalHistory),

            ',"lifestyleFactors":', encodeLifestyleFactors(patient.lifestyleFactors),

            ',"laboratoryResults":', encodeLaboratoryResults(patient.laboratoryResults),

            ',"doctorNotes":', encodeDoctorNotes(patient.doctorNotes),

            ',"patientSatisfactionScore":"', Strings.toString(patient.patientSatisfactionScore),

            '","timeSpentWithDoctor":"', Strings.toString(patient.timeSpentWithDoctor),

            '"}'

        ));

    }


    function encodeVitalSigns(VitalSigns memory vitalSigns) internal pure returns (string memory) {

        return string(abi.encodePacked(

            '{"systolicBloodPressure":"', Strings.toString(vitalSigns.systolicBloodPressure),

            '","diastolicBloodPressure":"', Strings.toString(vitalSigns.diastolicBloodPressure),

            '","heartRate":"', Strings.toString(vitalSigns.heartRate),

            '","respiratoryRate":"', Strings.toString(vitalSigns.respiratoryRate),

            '","temperature":"', Strings.toString(vitalSigns.temperature),

            '","oxygenSaturation":"', Strings.toString(vitalSigns.oxygenSaturation),

            '"}'

        ));

    }


    function encodeAnthropometricMeasurements(AnthropometricMeasurements memory measurements) internal pure returns (string memory) {

        return string(abi.encodePacked(

            '{"height":"', Strings.toString(measurements.height),

            '","weight":"', Strings.toString(measurements.weight),

            '","bmi":"', Strings.toString(measurements.bmi),

            '","waistCircumference":"', Strings.toString(measurements.waistCircumference),

            '"}'

        ));

    }


    function encodeMedicalHistory(MedicalHistory memory history) internal pure returns (string memory) {

        return string(abi.encodePacked(

            '{"pastSurgeries":', encodeStringArray(history.pastSurgeries),

            ',"existingConditions":', encodeStringArray(history.existingConditions),

            ',"allergies":', encodeStringArray(history.allergies),

            ',"immunizationHistory":', encodeStringArray(history.immunizationHistory),

            '}'

        ));

    }


    function encodeLifestyleFactors(LifestyleFactors memory factors) internal pure returns (string memory) {

        return string(abi.encodePacked(

            '{"smokingStatus":"', factors.smokingStatus,

            '","alcoholConsumption":"', factors.alcoholConsumption,

            '","physicalActivityLevel":"', factors.physicalActivityLevel,

            '","diet":"', factors.diet,

            '"}'

        ));

    }


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

        // Store the health advisory

        emit HealthAdvisoryReceived(patientAddress, response);

    }


    function getPatientData(address patientAddress) public view returns (Patient memory) {

        return patients[patientAddress];

    }

}


 



