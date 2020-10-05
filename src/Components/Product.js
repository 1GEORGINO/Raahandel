import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Product extends Component {
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
  render() {
    // console.log(this.state.data);
    return (
      <div className="bg">
        {this.state.data !== undefined
          ? this.state.data.map((product) => {
              return (
                <div key={product.id} className="mainContainer">
                  <div className="billedeContainer">
                    <Link to="/details">
                      <img src={product.image} alt="produktBillede" />
                    </Link>
                  </div>
                  <div className="titel">{product.title}</div>
                  {product.type && (
                    <div className="type">Type: {product.type}</div>
                  )}
                  <div className="producent">Producent: {product.producer}</div>
                  <div className="unit">
                    {product.unitSize} {product.unit}
                  </div>
                  <div className="kolli">
                    Kolli mængde: {product.bulkSize * product.price}
                  </div>
                  <div>Antal: {product.quantity}</div>
                  {product.organic && (
                    <div className="organic">Ø {product.organic}</div>
                  )}
                  {product.cold && <div className="cold">C {product.cold}</div>}
                  <div className="prisContainer">
                    <div className="pris">
                      {product.price.toFixed(2).toString().replace(".", ",")}{" "}
                      kr,-
                    </div>
                  </div>
                </div>
              );
            })
          : null}
      </div>
    );
  }
}
