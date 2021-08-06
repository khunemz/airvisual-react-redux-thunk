import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";

import { useLocation } from 'react-router-dom'
import { onFetchCityApi } from '../redux';
import './CityList.css'

export default function CityList() {
  const location = useLocation();
  const listPath = location.pathname.split('/');
  const country = listPath[2];
  const state = listPath[3];
  const [city, setCity] = useState(state);
  const dispatch = useDispatch();
  const { cityState, isFetchApi } = useSelector((state) => state.airReducer);
  
  console.log(cityState);
  function onFetchCityApiHandler() {
    dispatch(onFetchCityApi({ country: country , state: state }));
  }
  useEffect(() => {
    onFetchCityApiHandler();
  }, [country, state])
  return (
    <>
      <h2>List</h2>
      <ul>
        { cityState !== null && isFetchApi === false ? cityState.data.map( ct => {
          console.log(ct);
          return (<div>{ct.city}</div>)
        }) : <div>Loading ...</div> }
      </ul>
    </>
  )
}
