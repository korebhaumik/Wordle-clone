import React from "react";
import ReactDOM from "react-dom/client";
import App from "./presentation/App";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./logic/reducers";
import { Provider } from "react-redux";

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
