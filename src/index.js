import React from "react";
import ReactDOM from "react-dom";

const fname = "Angelo";
const lname = "costa";
const luckyNumber = 7;
ReactDOM.render(
  <>
    <h1>
      Hello {fname} {lname}!
    </h1>
    <p>Your lucky number is {luckyNumber}</p>
  </>,
  document.getElementById("root")
);
