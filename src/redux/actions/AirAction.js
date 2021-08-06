import axios from "axios";
import * as types from "./AirActionType";
const BASE_URL = process.env.REACT_APP_BASE_URL;
const API_KEY = process.env.REACT_APP_API_KEY;
//AIR DETAIL
export const setStageAirDetailToLoading = () => ({
  type: types.FETCH_AIR_DETAIL_TO_STATE_LOADING,
  isFetch: true,
  payload: null,
});
export const setStageAirDetailToSuccess = (data) => ({
  type: types.FETCH_AIR_DETAIL_TO_STATE_SUCCESS,
  isFetch: false,
  payload: data,
});
export const setStageAirDetailToFail = (data) => ({
  type: types.FETCH_AIR_DETAIL_TO_STATE_FAIL,
  isFetch: false,
  error: data,
});

// CITY
export const setStageCityToLoading = () => ({
  type: types.FETCH_CITY_TO_STATE_LOADING,
  isFetch: true,
  payload: null,
});
export const setStageCityToSuccess = (data) => ({
  type: types.FETCH_CITY_TO_STATE_SUCCESS,
  isFetch: false,
  payload: data,
});
export const setStageCityToFail = (data) => ({
  type: types.FETCH_CITY_TO_STATE_FAIL,
  isFetch: false,
  error: data,
});

// COUNTRY
export const setStageCountryToLoading = () => ({
  type: types.FETCH_COUNTRY_TO_STATE_LOADING,
  isFetch: true,
  payload: null,
});
export const setStageCountryToSuccess = (data) => ({
  type: types.FETCH_COUNTRY_TO_STATE_SUCCESS,
  isFetch: false,
  payload: data,
});

export const setStageCountryToFail = (data) => ({
  type: types.FETCH_COUNTRY_TO_STATE_FAIL,
  isFetch: false,
  error: data,
});

export const onFetchAirDetailApi = ({ country, state, city }) => {
  return async (dispatch) => {
    try {
      dispatch(setStageAirDetailToLoading());
      await axios
        .get(
          BASE_URL +
            "city?city=" +
            city +
            "&state=" +
            state +
            "&country=" +
            country +
            "&key=" +
            API_KEY,
          {
            "Access-Control-Allow-Origin": "*",
            crossDomain: true,
          }
        )
        .then(function (response) {
          dispatch(setStageAirDetailToSuccess(response.data));
        })
        .catch(function (error) {
          dispatch(setStageAirDetailToFail(error));
        });
    } catch (error) {
      dispatch(setStageAirDetailToFail(error));
    }
  };
};

export const onFetchCityApi = ({ country, state }) => {
  return async (dispatch) => {
    try {
      dispatch(setStageCityToLoading());
      await axios
        .get(
          BASE_URL +
            "cities?state=" +
            state +
            "&country=" +
            country +
            "&key=" +
            API_KEY
        )
        .then(function (response) {
          dispatch(setStageCityToSuccess(response.data));
        })
        .catch(function (error) {
          dispatch(setStageCityToFail(error));
        });
    } catch (error) {
      dispatch(setStageCityToFail(error));
    }
  };
};

export const onFetchCountryApi = ({ country }) => {
  return async (dispatch) => {
    try {
      dispatch(setStageCountryToLoading());
      await axios
        .get(BASE_URL + "states?country=" + country + "&key=" + API_KEY)
        .then(function (response) {
          dispatch(setStageCountryToSuccess(response.data));
        })
        .catch(function (error) {
          dispatch(setStageCountryToFail(error));
        });
    } catch (error) {
      dispatch(setStageCountryToFail(error));
    }
  };
};
