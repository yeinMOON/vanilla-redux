import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Provider } from "react-redux";
import store from "./store";
// connect store and app at index.js

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById("root")
);
