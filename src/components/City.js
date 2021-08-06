import React from 'react'
import './City.css'

export default function City({ id, state }) {
  console.log(state);
  return (
    <>
      <div className="card city-card">
        <div className="card-body">
          <div className="card-text">
            <div>{ state }</div>
          </div>
        </div>
      </div>
    </>
  )
}
