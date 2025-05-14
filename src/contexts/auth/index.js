/**
 * Authentication Module Barrel File
 *
 * den här file "re-exports" alla nödvändiga componenter, hooks m.m
 * från auth modulen. att göra så här förenklar importer från andra delar
 * av applikationen och hjälper till att hålla code enklare att hantera
 */

// exportera context och provider
export { AuthContext, AuthProvider } from "./AuthContext";

// exportera action types, för att kunna använda utanför om det är nödvändigt
export { AUTH_ACTIONS } from "./authTypes";

// exportera reducer och actions om vi skulle behöva ha dom nån annanstans
export { authReducer, initialState } from "./authReducer";
export { checkAuthStatus, login, register, logout } from "./authActions";
