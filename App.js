import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello World! from React"
);

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "This is H1"),
    React.createElement("h2", {}, "This is H2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "This is H1"),
    React.createElement("h2", {}, "This is H2"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(parent);
root.render(parent);
