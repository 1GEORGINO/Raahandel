import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Menubar extends Component {
  render() {
    return (
      <div className="mb">
        <Link
          className="home"
          to="/"
          style={{ marginRight: 10, textDecoration: "none", color: "black" }}
        >
          Home
        </Link>
        <Link
          to="/product"
          style={{ marginRight: 10, textDecoration: "none", color: "black" }}
        >
          Products
        </Link>
        <Link to="/user" style={{ textDecoration: "none", color: "black" }}>
          Users
        </Link>
      </div>
    );
  }
}
