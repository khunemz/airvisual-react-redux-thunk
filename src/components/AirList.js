import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { onFetchAirDetailApi } from "../redux";
import AirDetail from "./AirDetail";
export default function AirList() {
  const { airDetail, isFetchApi } = useSelector((state) => state.airReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    onFetchAirDetailState();
  }, []);

  function onFetchAirDetailState() {
    dispatch(
      onFetchAirDetailApi({
        country: "USA",
        state: "California",
        city: "Los Angeles",
      })
    );
  }
  return (
    <>
      <h5 className="card-title">List</h5>
      {airDetail !== null && isFetchApi === false ? (
        <AirDetail data={airDetail} />
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}
