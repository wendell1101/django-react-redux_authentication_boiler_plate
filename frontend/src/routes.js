import { Route } from "react-router-dom";
import Register from "./components/pages/Register";
import Login from "./components/pages/Login";
import Logout from "./components/pages/Logout";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./components/common/PrivateRoute";

import React from "react";

const routes = () => {
  return (
    <div>
      <PrivateRoute exact path="/" component={Dashboard} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <Route path="/logout" component={Logout} />
    </div>
  );
};
export default routes;
