import React from "react";
import "./App.css";
import { productList } from "./productList";

class App extends React.Component {
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
                    <img src={product.image} alt="produktBillede" />
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
        <App1 />
      </div>
    );
  }
}

class App1 extends React.Component {
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
      <div className="bg">
        {this.state.data !== undefined
          ? this.state.data.map((user) => {
              return (
                <div key={user.id} className="id">
                  {user.id}

                  <div className="name">{user.name}</div>
                  <div className="role">{user.role}</div>
                  <div className="mail">{user.mail}</div>
                </div>
              );
            })
          : null}
      </div>
    );
  }
}

export default App;
