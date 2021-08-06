import * as types from "./../actions/AirActionType";
const initialState = {
  countryState: null,
  cityState: null,
  airDetail: null,
  isFetchApi: false,
  error: null,
};

export const airReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_COUNTRY_TO_STATE_LOADING:
      return {
        ...state,
        countryState: null,
        cityState: null,
        isFetchApi: true,
      };
    case types.FETCH_COUNTRY_TO_STATE_SUCCESS:
      return {
        ...state,
        countryState: action.payload,
        isFetchApi: false,
      };
    case types.FETCH_COUNTRY_TO_STATE_FAIL:
      return {
        ...state,
        error: action.error,
        isFetchApi: false,
      };
    case types.FETCH_CITY_TO_STATE_LOADING:
      return {
        ...state,
        cityState: null,
        isFetchApi: true,
      };
    case types.FETCH_CITY_TO_STATE_SUCCESS:
      return {
        ...state,
        cityState: action.payload,
        isFetchApi: false,
      };
    case types.FETCH_CITY_TO_STATE_FAIL:
      return {
        ...state,
        error: action.error,
        isFetchApi: false,
      };
    case types.FETCH_AIR_DETAIL_TO_STATE_LOADING:
      return {
        ...state,
        airDetail: null,
        isFetchApi: true,
      };
    case types.FETCH_AIR_DETAIL_TO_STATE_SUCCESS:
      return {
        ...state,
        airDetail: action.payload,
        isFetchApi: false,
      };
    case types.FETCH_AIR_DETAIL_TO_STATE_FAIL:
      return {
        ...state,
        error: action.error,
        isFetchApi: false,
      };
    default:
      return state;
  }
};
