import {
  createContext,
  useReducer,
  useEffect,
  useMemo,
  useCallback,
} from "react";
import { authReducer, initialState } from "./authReducer";
import { checkAuthStatus, login, register, logout } from "./authActions";

// create default context
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    checkAuthStatus(dispatch);
  }, []);

  // wrapped login function
  // useCallback helps us avoid unessecary re-renders
  const handleLogin = useCallback(async (username, password) => {
    return login(dispatch, username, password);
  }, []);

  const handleRegister = useCallback(async (username, password) => {
    return register(dispatch, username, password);
  }, []);

  const handleLogout = useCallback(async () => {
    return logout(dispatch);
  }, []);

  const contextValue = useMemo(
    () => ({
      currentUser: state.currentUser,
      loading: state.loading,
      error: state.loading,

      login: handleLogin,
      logout: handleLogout,
      register: handleRegister,
    }),
    [
      state.currentUser,
      state.loading,
      state.loading,
      handleLogin,
      handleLogout,
      handleRegister,
    ]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
