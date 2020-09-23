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
        console.log();
        console.log(result);
        this.setState({
          data: result,
        });
      });
  }
  render() {
    return (
      <div className="bg">
        {productList.map((product) => {
          return (
            <div className="mainContainer">
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
                Kolli mængde: {product.price * product.bulkSize}
              </div>
              <div>Antal: {product.quantity}</div>
              {product.organic && (
                <div className="organic">Ø {product.organic}</div>
              )}
              {product.cold && <div className="cold">C {product.cold}</div>}
              <div className="prisContainer">
                <div className="pris">{product.price} kr,-</div>
              </div>
              <div>
                {this.state.data !== undefined
                  ? this.state.data.data.allUsers.map((user) => (
                      <div>{user.id}</div>
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
