import React from "react";

const initialState = { tally: 0 };

function counterReducer(state, action) {
  switch (action.type) {
    case "increment":
      return { tally: state.tally + 1 };
    case "decrement":
      return { tally: state.tally - 1 };
    default:
      throw new Error();
  }
}

const Context = React.createContext();

function useStore() {
  return React.useContext(Context);
}

function StoreProvider({ children }) {
  const [state, dispatch] = React.useReducer(counterReducer, initialState);

  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
}

export { useStore, StoreProvider };
