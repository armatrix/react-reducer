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

const Counter = () => {
  const [state, dispatch] = React.useReducer(counterReducer, initialState);
  return (
    <div>
      Tally: {state.tally} <br />
      <button
        onClick={() => {
          dispatch({ type: "increment" });
        }}
      >
        increment
      </button>
      &nbsp;
      <button
        onClick={() => {
          dispatch({ type: "decrement" });
        }}
      >
        decrement
      </button>
    </div>
  );
};

export default Counter;
