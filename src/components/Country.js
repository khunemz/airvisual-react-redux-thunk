import React, { useState } from "react";
import { onFetchCountryApi } from "../redux";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import City from "./CityItem";
import "./Country.css";

export default function Country() {
  const [country, setCountry] = useState("");
  const dispatch = useDispatch();
  const { countryState, isFetchApi } = useSelector((state) => state.airReducer);

  function onFetchCountryState() {
    dispatch(onFetchCountryApi({ country: country }));
  };

  return (
    <>
      <h5>ค้นหาประเทศ</h5>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Search country ..."
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        <br />
        <button
          className="btn btn-outline-primary"
          style={{margin: '0px 15px 0px 0px'}}
          onClick={() => onFetchCountryState()}
        >
          ค้นหา
        </button>
        <button
          className="btn btn-outline-secondary"
          onClick={() => setCountry("")}
        >
          ล้างข้อมูล
        </button>
      </div>
      <br />
      {countryState !== null && isFetchApi === false
        ? countryState.data.map((countryItSelf) => {
            const { state } = countryItSelf; 
            const id = uuidv4();
            return (
              <City key={ id } country={country} state={state} />
            )
          })
        : "No data found"}
    </>
  );
}
