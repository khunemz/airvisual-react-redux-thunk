import React from "react";
import './City.css';
export default function City({ id, city }) {
  return (
    <>
      <div className="card city-card">
        <div className="card-body">
          <div className="card-text">อำเภอ/เขต {city}</div>
        </div>
      </div>
    </>
  );
}
