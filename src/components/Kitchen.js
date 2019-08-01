import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Kitchen.css';

class Kitchen extends Component {
  state = {
    cashOrders: []
  };

  componentDidMount() {
    fetch('/orders')
      .then(res => res.json())
      .then(cashOrders => {
        this.setState({ cashOrders: cashOrders.orders }, () =>
          console.log('Products fetched', cashOrders)
        );
      });
  }

  render() {
    const { cashOrders } = this.state;
    return (
      <div className="kitchen-background">
        <h1>Los pedidos de las mesas son </h1>
        <div className="container">
          {cashOrders.map((item, index) => (
            <div key={index} className="square">
              <h3>Mesa:{item.table}</h3>
              {/* <p>{item.dated}</p>{' '} */}
              {item.cashOrder.map((item1, i) => (
                <div key={i}>{item1.food}</div>
              ))}
            </div>
          ))}
        </div>

        <Link to="/">Burger Queen</Link>
      </div>
    );
  }
}

export default Kitchen;
