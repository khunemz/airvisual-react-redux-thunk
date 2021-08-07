import React from "react";
import './City.css';
import { useHistory } from "react-router-dom";

export default function City({ id, country, state, city }) {
  let history = useHistory();
  function navigateToAirDetail() {
    history.push(`/airlist/${country}/${state}/${city}`);
  }
  return (
    <>
      <div className="card city-card" onClick={() => navigateToAirDetail()}>
        <div className="card-body">
          <div className="card-text">อำเภอ/เขต {city}</div>
        </div>
      </div>
    </>
  );
}
