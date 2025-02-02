import React from "react";
import { createRoot } from "react-dom/client";

const Pizza = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, props.name),
    React.createElement("p", {}, props.description),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Padre Gino's"),
    React.createElement(Pizza, {
      name: "The Pepperoni Pizza",
      description: "Red sauce, mozz, pepperoni",
    }),
    React.createElement(Pizza, {
      name: "The Cheesiest Pizza",
      description: "Red sauce, mozz, some other cheese",
    }),
    React.createElement(Pizza, {
      name: "The Hawaiaan Shirt",
      description: "Red sauce, mozz, ham, pineapple, olives",
    }),
    React.createElement(Pizza, {
      name: "The Green Machine",
      description: "Red sauce, mozz, spinach, broccoli, cherry tomatoes",
    }),
  ]);
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
