import React from 'react'
import { useHistory } from "react-router-dom";
import './CityItem.css'

export default function CityItem({ id, state, country }) {
  let history = useHistory();
  function navigateToCityList() {
    history.push(`/citylist/${country}/${state}`);
  }
  return (
    <>
      <div className="card city-card" onClick={() => navigateToCityList()}>
        <div className="card-body">
          <div className="card-text">
            <div>
              { state }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
