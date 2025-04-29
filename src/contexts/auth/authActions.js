/**
 * Authentication Actions
 *
 * den här filen innehåller alla autentiseringsrelaterade API-anrop och motsvarande
 * responses. här hanteras kommunikationen med backend
 * samt uppdatera auth state därefter.
 */

import api from "../../api/axios";
import { AUTH_ACTIONS } from "./authTypes";

export const checkAuthStatus = async (dispatch) => {
  try {
    const response = await api.get("/auth/check");

    // auth successful - uppdatera state med user data
    dispatch({
      type: AUTH_ACTIONS.AUTH_SUCCESS,
      payload: response.data,
    });

    return response.data;
  } catch (error) {
    dispatch({ type: AUTH_ACTIONS.AUTH_INIT });
    return null;
  }
};

export const login = async (dispatch, username, password) => {
  dispatch({ type: AUTH_ACTIONS.AUTH_LOADING });

  try {
    const response = await api.post("/auth/login", { username, password });

    dispatch({
      type: AUTH_ACTIONS.AUTH_SUCCESS,
      payload: response.data,
    });

    return response.data;
  } catch (error) {
    dispatch({
      type: AUTH_ACTIONS.AUTH_FAILURE,
      payload: error.response?.data || "Login failed",
    });

    throw error;
  }
};
