import React from "react";
import { Provider } from "react-redux";
import { store } from "../store";
import { ConnectedDashboard } from "./Dashboard";
import { Router, Route } from "react-router-dom";
import { history } from "../store/history";
import { ConnectedNavigation } from "./Navigation";
import { ConnectTaskDetail } from "./TaskDetail";

export const Main = () => (
  <Router history={history}>
    <Provider store={store}>
      <div>
        <ConnectedNavigation />
        <Route exact path="/dashboard">
          <ConnectedDashboard />
        </Route>
        <Route exact path="/task/:id">
          {/* <ConnectTaskDetail match={match} /> */}
          <ConnectTaskDetail />
        </Route>
      </div>
    </Provider>
  </Router>
);
