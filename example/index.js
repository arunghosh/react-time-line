import React from "react";
import ReactDOM from "react-dom";
import Timeline from "../src";

const events = [
  { ts: "2017-09-17T12:22:46.587Z", text: "Logged in" },
  { ts: "2017-09-17T12:21:46.587Z", text: "Clicked Home Page" },
  { ts: "2017-09-17T12:20:46.587Z", text: "Edited Profile" },
  { ts: "2017-09-16T12:22:46.587Z", text: "Registred" },
  { ts: "2017-09-16T12:21:46.587Z", text: "Clicked Cart" },
  { ts: "2017-09-16T12:20:46.587Z", text: "Clicked Checkout" }
];

ReactDOM.render(
  <Timeline items={events} format="hh:mm a" />,
  document.getElementById("app")
);
