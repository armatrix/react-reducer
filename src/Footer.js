import React from "react";
import { useStore } from "./Store";

const Footer = () => {
  const [, dispatch] = useStore();
  return (
    <div>
      <button onClick={() => dispatch({ type: "decrement" })}>decrement</button>
      &nbsp;
      <button onClick={() => dispatch({ type: "increment" })}>increment</button>
    </div>
  );
};

export default Footer;
