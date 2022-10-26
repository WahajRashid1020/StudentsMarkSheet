import React from "react";
import { createContext } from "react";
import B from "./B";
const A = (props) => {
  const { headline } = props;

  return (
    <div>
      <p>This is A</p>
      <p>{"Receving from parent " + headline}</p>
      <B headline={headline} />
    </div>
  );
};

export default A;
