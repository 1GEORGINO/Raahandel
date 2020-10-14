import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import home from "./Components/Home";
import product from "./Components/Product";
import user from "./Components/User";
import details from "./Components/Details";
import Menubar from "./Components/Menubar";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Menubar />
        <Switch>
          <Route path="/" exact component={home}></Route>
          <Route path="/product" exact component={product}></Route>
          <Route path="/user" exact component={user}></Route>
          <Route path="/details/:id" exact component={details}></Route>
        </Switch>
      </div>
    );
  }
}
