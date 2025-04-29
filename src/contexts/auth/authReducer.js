/**
 * Authentication Reducer
 *
 * den här filen innehåller reducer funktioner som hanterar alla state övergångar
 * för autentiseringsrelaterade åtgärder. den definierar hur applikationens tillstånd
 * bör ändras som svar på varje åtgärdstyp.
 */

import { AUTH_ACTIONS } from "./authTypes";

// init state
export const initialState = {
  currentUser: null,
  loading: true,
  error: null,
};

export const authReducer = (state, action) => {
  switch (action.type) {
    case AUTH_ACTIONS.AUTH_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case AUTH_ACTIONS.AUTH_INIT:
      return {
        ...state,
        loading: false,
      };
    case AUTH_ACTIONS.AUTH_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        loading: false,
        error: null,
      };
    case AUTH_ACTIONS.AUTH_FAILURE:
      return {
        ...state,
        currentUser: null,
        loading: false,
        error: action.payload,
      };
    case AUTH_ACTIONS.AUTH_LOGOUT:
      return {
        ...state,
        currentUser: null,
        loading: false,
        error: null,
      };

    default:
      return state;
  }
};
