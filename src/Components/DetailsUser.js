import React, { Component } from "react";

export default class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    const query = `
    query User($id: ID!) {
      User(id:$id) {
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
      body: JSON.stringify({
        query,
        variables: { id: this.props.match.params.id },
      }),
    };
    fetch(url, opts)
      .then((res) => res.json())
      .then((result) => {
        //console.log(this.props);
        // console.log(result);
        this.setState({
          data: [result.data.User],
        });
      });
  }
  render() {
    //console.log(this.props);
    //console.log(this.state.data);
    return (
      <div className="bg">
        {this.state.data !== undefined
          ? this.state.data.map((user) => {
              return (
                
                <div></div>
                
              );
            })
          : null}
      </div>
    );
  }
}
