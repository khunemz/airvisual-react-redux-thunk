import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { onFetchAirDetailApi } from "../redux";
import { useLocation,useHistory } from "react-router-dom";
import AirDetail from "./AirDetail";
export default function AirList() {
  const { airDetail, isFetchApi } = useSelector((state) => state.airReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    onFetchAirDetailState();
  }, []);

  let history = useHistory();
  const location = useLocation();
  const listPath = location.pathname.split("/");
  const country = listPath[2];
  const state = listPath[3];
  const city = listPath[4];

  function onFetchAirDetailState() {
    dispatch(
      onFetchAirDetailApi({
        country: country,
        state: state,
        city: city,
      })
    );
  }

  function goBack() {
    history.goBack();
  }
  return (
    <>
      <div className="row">
        <div className="col-12">
          <button className="btn btn-outline-info" onClick={() => goBack()}>
            กลับ
          </button>
        </div>
      </div>
      <br />
      <h5 className="card-title">
        ประเทศ {country}, จังหวัด {state}, เมือง {city}
      </h5>
      {airDetail !== null && isFetchApi === false ? (
        <AirDetail data={airDetail} />
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}
