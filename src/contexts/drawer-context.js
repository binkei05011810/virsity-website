import React, { useReducer, createContext } from "react";

export const DrawerContext = createContext({});

const initialState = {
  isOpen: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE":
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    default:
      return state;
  }
}

export const DrawerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <DrawerContext.Provider value={{ state, dispatch }}>
      {children}
    </DrawerContext.Provider>
  );
};
