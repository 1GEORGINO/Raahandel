import React, { Component } from "react";

export default class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
    };
  }

  componentDidMount() {
    const query = `
        query {
          allUsers {
              id
              name
              role
              mail
          }
      }
    
      `;
    const url = "http://localhost:3000/";
    const opts = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query }),
    };
    fetch(url, opts)
      .then((res) => res.json())
      .then((result) => {
        // console.log(result);
        this.setState({
          data: result.data.allUsers,
        });
      });
  }

  render() {
    // console.log(this.state.data);
    return (
      <div className="bg1">
        {this.state.data !== undefined
          ? this.state.data.map((user) => {
              return (
                <div key={user.id} className="id">
                  <div className="mainContainer1">
                    <div className="id">ID: {user.id}</div>
                    <div className="name">{user.name}</div>
                    <div className="role">{user.role}</div>
                    <div className="mail">{user.mail}</div>
                  </div>
                </div>
              );
            })
          : null}
      </div>
    );
  }
}
