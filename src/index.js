import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Grid from './Components/Grid';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import {store, persister} from "./store.js"
import { Provider } from "react-redux";
import {PersistGate} from "redux-persist/lib/integration/react";

ReactDOM.render(
  <Provider store = {store}>
    <PersistGate loading={null} persistor={persister}>
  <BrowserRouter>
      <Switch>
      <Route path="/?folder=:folder" render={(props) => <Grid {...props} />} />
      <Route path="/" render={(props) => <Grid {...props} />} />

      {/* <Route path="/" render={(props) => <App {...props} />} /> */}
      </Switch>
  </BrowserRouter>
  </PersistGate>
  </Provider>,
  
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
