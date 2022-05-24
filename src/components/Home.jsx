import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Categories from './Categories';

export default class Home extends Component {
  render() {
    return (
      <div>
        <div data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </div>
        <Link data-testid="shopping-cart-button" to="/cartShopping">
          Carrinho de Compras
        </Link>
        <Categories />
      </div>
    );
  }
}
