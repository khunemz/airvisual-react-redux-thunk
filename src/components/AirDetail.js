import React from 'react'
import Polution from './Polution';
import Weather from './Weather';

export default function AirDetail({ data }) {
  const {country, current, city, state} = data.data;
  return (
    <>
      <div className="card">
        <div className="card-title">          
        </div>
        
        <div className="card-body">
          <h5>Location</h5>
          <ul>
            <li>Country: { country }</li>
            <li>State: { state }</li>
            <li>City: { city }</li>
          </ul>
          <Weather weather={current.weather} city={city} state={state} country={country} />
          <Polution pollution={ current.pollution } />
        </div>
      </div>
    </>
  )
}
