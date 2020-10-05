import React, { Component } from "react";

export default class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: [],
    };
  }

  componentDidMount() {
    const query = `
            query {
              allProducts {
                  title
                  type
                  producer
                  image
                  unitSize
                  bulkSize
                  quantity
                  organic
                  cold
                  price
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
          data: result.data.allProducts,
        });
      });
  }
}
