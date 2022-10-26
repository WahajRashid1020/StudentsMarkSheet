import React from "react";
import { Cmd } from "../App";
const C = (props) => {
  return (
    <>
      <p>This is C</p>
      <div>Receiving from B + {props.headline}</div>;
      <Cmd.Consumer>
        {(mydata) => {
          return <h1>{mydata}</h1>;
        }}
      </Cmd.Consumer>
    </>
  );
};

export default C;
