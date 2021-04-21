import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";

import Dashboard from "./Dashboard";
import AdminNav from "./adminNav/AdminNav";
import AddProduct from "../products/AddProduct";

import "./AdminDashboard.css";

const AdminDashboard = () => {
  let { path, url } = useRouteMatch();
  return (
    <>
      <div className="dashboard-container">
        <div className="dashboard">
          <AdminNav url={url} />
          <div className="content">
            <Switch>
              <Route exact path={path} component={Dashboard} />
              <Route exact path={`${path}/addproduct`} component={AddProduct} />
            </Switch>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
