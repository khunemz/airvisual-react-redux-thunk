import React from 'react'
import Polution from './Polution';

export default function AirDetail({ data }) {
  const {country, current, city, state} = data.data;
  return (
    <>
      <div className="card">
        <div className="card-title">
          <ul>
            <li>Country: { country }</li>
            <li>State: { state }</li>
            <li>City: { city }</li>
          </ul>
        </div>
        
        <div className="card-body">
          

          <Polution pollution={ current.pollution } />
        </div>
      </div>
    </>
  )
}
