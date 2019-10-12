import React from "react";
import { Provider } from "react-redux";
import { store } from "../store";
import { ConnectedDashboard } from "./Dashboard";
import { Router, Route } from "react-router-dom";
import { history } from "../store/history";
import { ConnectedNavigation } from "./Navigation";
import { ConnectTaskDetail } from "./TaskDetail";
import { Redirect } from "react-router";
import { ConnectedLogin } from "../components/Login";

const RouteGuard = Component => ({ match }) => {
  console.info("Route guard", match);
  if (!store.getState().session.authenticated) {
    return <Redirect to="/" />;
  } else {
    return <Component match={match} />;
  }
};

export const Main = () => (
  <Router history={history}>
    <Provider store={store}>
      <div>
        <ConnectedNavigation />
        <Route exact path="/" component={ConnectedLogin}></Route>
        <Route exact path="/dashboard" render={RouteGuard(ConnectedDashboard)}>
          {/* <ConnectedDashboard /> */}
        </Route>
        <Route exact path="/task/:id" render={RouteGuard(ConnectTaskDetail)}>
          {/* <ConnectTaskDetail match={match} /> */}
          {/* <ConnectTaskDetail /> */}
        </Route>
      </div>
    </Provider>
  </Router>
);
