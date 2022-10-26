import React from "react";
import C from "./C";

const B = (props) => {
  console.log(props.headline);
  return (
    <>
      <p>This is B</p>
      <div>"Receieving from A"+ {props.headline}</div>;
      <C headline={props.headline} />
    </>
  );
};

export default B;
