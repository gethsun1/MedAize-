import React, { useState } from "react";

const PatientDashboard = ({ onUpdateData, patientData }) => {
  const [vitalSigns, setVitalSigns] = useState("");
  const [medicalHistory, setMedicalHistory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateData({ vitalSigns, medicalHistory });
    setVitalSigns("");
    setMedicalHistory("");
  };

  return (
    <div className="patient-dashboard">
      <h2>Patient Dashboard</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Vital Signs:
          <input
            type="text"
            value={vitalSigns}
            onChange={(e) => setVitalSigns(e.target.value)}
          />
        </label>
        <label>
          Medical History:
          <textarea
            value={medicalHistory}
            onChange={(e) => setMedicalHistory(e.target.value)}
          />
        </label>
        <button type="submit">Update Data</button>
      </form>
      <div className="patient-data">
        <h3>Patient Data</h3>
        <p>Vital Signs: {patientData.vitalSigns}</p>
        <p>Medical History: {patientData.medicalHistory}</p>
      </div>
    </div>
  );
};

export default PatientDashboard;
