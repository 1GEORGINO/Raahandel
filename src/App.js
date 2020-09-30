import React from "react";
import "./App.css";
import { productList } from "./productList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
    };
  }

  componentDidMount() {
    const query = `
    query {
      User (id: "ckf2aggbo000101ji0cs6hovq") {
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
          data: [result.data.User],
        });
      });
  }
  render() {
    console.log(this.state.data);
    return (
      <div className="bg">
        {productList.map((product) => {
          return (
            <div key={product.id} className="mainContainer">
              <div className="billedeContainer">
                <img src={product.image} alt="produktBillede" />
              </div>
              <div className="titel">{product.title}</div>
              {product.type && <div className="type">Type: {product.type}</div>}
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
                  {product.price.toFixed(2).toString().replace(".", ",")} kr,-
                </div>
              </div>

              <div>
                {this.state.data !== undefined
                  ? this.state.data.map((user) => (
                      <div key={user.id}>
                        {user.id}
                        <br></br>
                        {user.name}
                        <br></br>
                        {user.role}
                        <br></br>
                        {user.mail}
                        <br></br>
                      </div>
                    ))
                  : null}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
