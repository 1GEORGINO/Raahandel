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
    query Product($id: ID!) {
      Product(id:$id) {
          id
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
          descriptions
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
          data: [result.data.Product],
        });
      });
  }
  render() {
    //console.log(this.props);
    //console.log(this.state.data);
    return (
      <div className="bg">
        {this.state.data !== undefined
          ? this.state.data.map((product) => {
              return (
                
                <div key={product.id} className="mainContainerD">
                  <div className="billedeContainer1">
                    <img src={product.image} alt="produktBillede" />
                  </div>
                  <div className="tekst">
                  <div className="titelD">{product.title}</div>
                  <br></br>
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
                    <div className="organicD">Ø {product.organic}</div>
                  )}
                  {product.cold && <div className="coldD">C {product.cold}</div>}

                  <br></br>

                  <div>
                    {product.descriptions.map((desc) => (
                    <div>
                    {desc.productDescription}
                    <br></br>
                    {desc.goodBecause}
                    </div>
                    ))}
                  </div>


                  <br></br>
                  <br></br>
                  <br></br>
                  <div className="prisContainerD">
                    <div className="pris">
                      {product.price.toFixed(2).toString().replace(".", ",")}{" "}
                      kr,-
                    </div>
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
