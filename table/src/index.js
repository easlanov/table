import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Table from "./pages/component/Table";
import MenuIcon from "./pages/component/MenuIcon";
import NoMatch from "./pages/NoMatch";

import "./index.css";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/component/table">
        <Table />
      </Route>
      <Route path="/component/menuIcon">
        <MenuIcon />
      </Route>
      <Route path="*">
        <NoMatch />
      </Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
