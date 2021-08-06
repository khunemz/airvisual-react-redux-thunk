import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import { useLocation } from 'react-router-dom'
import { onFetchCityApi } from '../redux';
import City from './City';
import './CityList.css'

export default function CityList() {
  const location = useLocation();
  const listPath = location.pathname.split('/');
  const country = listPath[2];
  const state = listPath[3];
  const [city, setCity] = useState(state);
  const dispatch = useDispatch();
  const { cityState, isFetchApi } = useSelector((state) => state.airReducer);
  function onFetchCityApiHandler() {
    dispatch(onFetchCityApi({ country: country , state: state }));
  }
  useEffect(() => {
    onFetchCityApiHandler();
  }, [country, state])
  return (
    <>
      <h3>จังหวัด { state }</h3>
      <ul>
        { cityState !== null && isFetchApi === false ? cityState.data.map( ct => {
          const id = uuidv4();
          return (<City key={id} city={ct.city} />)
        }) : <div>Loading ...</div> }
      </ul>
    </>
  )
}
