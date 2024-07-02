import React from "react";
import PatientDashboard from "../components/PatientDashboard";

const DashboardPage = () => {
  const onUpdateData = (data) => {
    // Handle updating patient data
    console.log("Updating patient data:", data);
  };

  const patientData = {
    vitalSigns: "Normal",
    medicalHistory: "No major issues",
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <PatientDashboard onUpdateData={onUpdateData} patientData={patientData} />
    </div>
  );
};

export default DashboardPage;
