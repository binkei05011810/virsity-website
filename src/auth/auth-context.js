import React, { Children, createContext, useReducer } from "react";

const initialState = {
  loggedIn: false,
  credential: null,
  user: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "login":
      return {
        loggedIn: true,
        credential: action.payload.credential,
        user: action.payload.user,
      };
    default:
      return state;
  }
}

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
