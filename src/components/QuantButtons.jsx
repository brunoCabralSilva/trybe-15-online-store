import React, { Component } from 'react';

export default class QuantButtons extends Component {
  state = {
    quantidade: 1,
  }

  handleQuant = ({ target: { value } }) => {
    const { quantidade } = this.state;
    if (value === '+') {
      console.log('aumenta');
      this.setState({ quantidade: quantidade + 1 });
    }
    if (value === '-') {
      console.log('diminui');
      if (quantidade === 1) return;
      this.setState({ quantidade: quantidade - 1 });
    }
  }

  render() {
    const { quantidade } = this.state;
    return (
      <>
        <input
          data-testid="product-decrease-quantity"
          type="button"
          value="-"
          onClick={ this.handleQuant }
        />
        <div data-testid="shopping-cart-product-quantity">
          {quantidade}
        </div>
        <input
          data-testid="product-increase-quantity"
          type="button"
          value="+"
          onClick={ this.handleQuant }
        />
      </>
    );
  }
}
