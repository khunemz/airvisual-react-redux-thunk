import React from 'react'

export default function Weather({weather, city, state, country}) {
  return (
    <>
      <h5>Weather</h5>
      <ul>
        <li>Temperature: { weather.tp } Celcius</li>
        <li>Huminity: { weather.hu } %</li>
        <li>Wind speed: { weather.ws } (m/s)</li>
        <li>Country: { country }</li>
        <li>State: { state }</li>
        <li>City: { city }</li>
      </ul>
      <hr />
    </>
  )
}
