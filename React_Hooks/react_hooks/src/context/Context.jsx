import { createContext, useEffect, useReducer } from "react";

const AppContext = createContext();

const intialvalue = {
  name: "devenedra",
  subject: "CS",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "update":
      return {
        name: action.payload,
        subject: "CS",
      };
    default:
      return state;
  }
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, intialvalue);
  return (
    <AppContext.Provider value={{ name: state.name, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
