/* eslint-disable import/first */

/* POLYFILLS */
import "./util/polyfills"; // eslint-disable-line

/* LIBRARIES */
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

/* AUSPICE  IMPORTS */
import configureStore from "./store";
import { initialiseGoogleAnalyticsIfRequired } from "./util/googleAnalytics";
import Root from "./root";

/* STYLESHEETS */
import "font-awesome/css/font-awesome.css";
import "leaflet/dist/leaflet.css";
import "leaflet-gesture-handling/dist/leaflet-gesture-handling.css";
import "./css/browserCompatability.css";
import "./css/bootstrapCustomized.css";
import "./css/global.scss";
import "./css/typography.scss";
import "./css/static.css";
import "./css/notifications.css";
import "./css/boxed.css";
import "./css/select.css";
import "./css/spinner.scss";

/* FONTS */
import "typeface-lato"; // eslint-disable-line import/extensions

const store = configureStore();

/* set up non-redux state storage for the animation - use this conservitavely! */
if (!window.NEXTSTRAIN) {window.NEXTSTRAIN = {};}

/* google analytics */
initialiseGoogleAnalyticsIfRequired();

/* Using React Hot Loader 4 https://github.com/gaearon/react-hot-loader */

const renderApp = () => {
  ReactDOM.render(
    <Provider store={store}>
      <Root />
    </Provider>,
    document.getElementById('root')
  );
};

renderApp();

