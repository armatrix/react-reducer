import React from "react";
import { useStore } from "./Store";

const Header = () => {
  const [state] = useStore();
  return <div>Tally: {state.tally}</div>;
};

export default Header;
