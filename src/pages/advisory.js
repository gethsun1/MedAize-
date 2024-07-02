import React, { useState, useEffect } from "react";
import HealthAdvisory from "../components/HealthAdvisory";

const AdvisoryPage = () => {
  const [advisory, setAdvisory] = useState("");

  useEffect(() => {
    // Simulate fetching advisory from smart contract or API
    setTimeout(() => {
      setAdvisory("Please maintain a healthy diet and exercise regularly.");
    }, 2000); // Simulating a delay
  }, []);

  return (
    <div>
      <h1>Health Advisory</h1>
      {advisory ? <HealthAdvisory advisory={advisory} /> : <p>Loading advisory...</p>}
    </div>
  );
};

export default AdvisoryPage;
