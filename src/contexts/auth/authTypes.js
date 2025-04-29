/**
 * Authentication Action Types
 *
 * den här filen innehåller konstanter för alla actions som
 * används i auth flödet
 * att använda konstanter istället för strings hjälper
 * till att förhindra stavfel och gör refactor enklare.
 */

export const AUTH_ACTIONS = {
  // initial loading state when checking authentication status
  AUTH_INIT: "AUTH_INIT",

  // authentication is in progress
  AUTH_LOADING: "AUTH_LOADING",

  // authentication completed successfully
  AUTH_SUCCESS: "AUTH_SUCCESS",

  // authentication failed with an error
  AUTH_FAILURE: "AUTH_FAILURE",

  // user logged out
  AUTH_LOGOUT: "AUTH_LOGOUT",
};
