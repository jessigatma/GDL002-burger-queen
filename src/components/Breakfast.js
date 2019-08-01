import React, { Component } from 'react';
import './Breakfast.css';

class Breakfast extends Component {
  state = {
    products: []
  };

  componentDidMount() {
    fetch(
      'https://gdl002-burger-queen-backend.jessgatma.now.sh/products/breakfast'
    )
      .then(res => res.json())
      .then(products => {
        this.setState({ products: products.products }, () =>
          console.log('Products fetched', products)
        );
      });
  }

  render() {
    const { products } = this.state;
    return (
      <div className="col-md-8 breakfast-background">
        <h1 className="center">¡Buenos días!</h1>
        {products.map((item, index) => (
          <div key={index} className="btn-group mt-3">
            <button
              type="button"
              className="btn btn-default btn-md mt-4  brk-btn"
              onClick={() => this.props.addOrder(item)}
            >
              <div>
                <img className="icon-button" src={item.image} alt="icon-btn1" />
                <span>
                  {' '}
                  <br />
                  {item.food}
                  {/* {item.Drink} 
                                 {item.Coffee}   */}
                </span>
                <span>
                  {' '}
                  <br /> ${item.price}{' '}
                </span>
              </div>
            </button>
          </div>
        ))}
      </div>
    );
  }
}

export default Breakfast;
