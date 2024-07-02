import React from "react";

const HealthAdvisory = ({ advisory }) => {
  return (
    <div className="health-advisory">
      <h2>Health Advisory</h2>
      <p>{advisory}</p>
    </div>
  );
};

export default HealthAdvisory;
