import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getProductsFromCategoryAndQuery } from '../services/api';
import Categories from './Categories';
import ListProducts from './ListProducts';
import Products from './Products';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      searchField: '',
      listProducts: [],
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  async handleSearch(srcVal) {
    const products = await getProductsFromCategoryAndQuery(undefined, srcVal);
    this.setState({ listProducts: products.results });
  }

  handleOnChange({ target: { name, type, checked, value } }) {
    const checkedValue = type === 'checkbox' ? checked : value;
    this.setState({ [name]: checkedValue });
  }

  render() {
    const { searchField, listProducts } = this.state;
    return (
      <div>
        <div data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </div>
        <Link data-testid="shopping-cart-button" to="/cartShopping">
          Carrinho de Compras
        </Link>
        <Categories />
        <ListProducts
          onClick={ this.handleSearch(searchField) }
          onChange={ this.handleOnChange }
          value={ searchField }
        />
        { listProducts ? (<Products listProducts={ listProducts } />)
          : (<p>Nenhum produto foi encontrado</p>) }
      </div>
    );
  }
}
