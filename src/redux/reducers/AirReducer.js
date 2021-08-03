import * as types from "./../actions/AirActionType";
const initialState = {
  // countryState: null,
  // city: null,
  airDetail: null,
  isFetchApi: false,
  error: null,
};

export const airReducer = (state = initialState, action) => {
  switch (action.type) {
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
