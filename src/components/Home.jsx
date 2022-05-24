import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getProductsFromQuery } from '../services/api';
import Categories from './Categories';
import '../App.css';
// import ListProducts from './ListProducts';
// import Products from './Products';

export default class Home extends Component {
  state = {
    busca: '',
    lista: [],
  }
  // this.state = {
  //   searchField: '',
  //   listProducts: [],
  // };

  handleOnChange = async ({ target }) => {
    const { value } = target;
    this.setState({ busca: value });
  }

  handleClick = async () => {
    const { busca } = this.state;
    const resultado = await getProductsFromQuery(busca);
    this.setState({ lista: resultado.results });
  }

  retornaProducts = () => {
    const { lista } = this.state;
    if (lista.length === 0) {
      return (
        <div>
          <h2>Nenhum produto foi encontrado</h2>
        </div>
      );
    }
    const listaDeProdutos = lista.map((produto) => {
      const product = (
        <div data-testid="product" className="produtos-encontrados">
          <p>{ produto.title }</p>
          <img
            src={ produto.thumbnail }
            alt={ `imagem de ${produto.title}` }
            className="imagem-produto"
          />
          <p>{ produto.price }</p>
        </div>
      );
      return product;
    });
    return listaDeProdutos;
  }

  render() {
    const { busca, lista } = this.state;
    console.log(lista);
    return (
      <div>
        <div data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </div>
        <Link data-testid="shopping-cart-button" to="/cartShopping">
          Carrinho de Compras
        </Link>
        <Categories />
        <input
          data-testid="query-input"
          type="text"
          name="search"
          value={ busca }
          onChange={ this.handleOnChange }
        />
        <button
          data-testid="query-button"
          type="button"
          onClick={ this.handleClick }
        >
          Pesquisar
        </button>
        <div className="lista-de-produtos">
          { this.retornaProducts() }
        </div>
      </div>
    );
  }
}
