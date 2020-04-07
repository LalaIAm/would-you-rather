import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";
import middleware from "./middleware";
import reducer from "./reducers";
import { Provider } from "react-redux";
import { composeWithDevTools } from 'redux-devtools-extension'
import LogRocket from 'logrocket';
import setupLogRocketReact from "logrocket-react";

LogRocket.init("olx7ro/would-you-rather-7hxcy");
setupLogRocketReact(LogRocket);

const store = createStore(reducer, composeWithDevTools(middleware));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
