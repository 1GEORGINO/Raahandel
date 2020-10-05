import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Menubar extends Component {
  render() {
    return (
      <div className="mb">
        <Link to="/">Home</Link>
        <Link to="/product">Products</Link>
        <Link to="/user">Users</Link>
      </div>
    );
  }
}
