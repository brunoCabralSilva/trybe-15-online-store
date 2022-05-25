import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getProductsFromQuery, getProductsByCategorie } from '../services/api';
import Categories from './Categories';
import '../App.css';
import imgTrybe from '../imagens/trybe.png';

export default class Home extends Component {
  state = {
    busca: '',
    lista: [],
    valor: 0,
  }

  handleOnChange = async ({ target }) => {
    const { value } = target;
    this.setState({ busca: value });
  }

  handleClick = async () => {
    const { busca } = this.state;
    const resultado = await getProductsFromQuery(busca);
    this.setState({
      lista: resultado.results,
      valor: 1,
    });
  }

  retornaProducts = () => {
    const { lista, valor } = this.state;
    if (lista.length === 0) {
      return (
        <div>
          <h2>
            {
              valor === 0
                ? 'Seja Bem vindo!'
                : 'Nenhum produto foi encontrado'
            }
          </h2>
        </div>
      );
    }
    const listaDeProdutos = lista.map((produto) => {
      const product = (
        <div
          data-testid="product"
          className="produtos-encontrados"
          key={ produto.id }
        >
          <p className="produtos-encontrados-title">{ produto.title }</p>
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

  buscaPorCategoria = async ({ target }) => {
    const { name } = target;
    const produtosCat = await getProductsByCategorie(name);
    this.setState({ lista: produtosCat.results });
  }

  render() {
    const { busca, lista } = this.state;
    console.log(lista);
    return (
      <div>
        <header>
          <img src={ imgTrybe } alt="logo da trybe" className="logo-trybe" />
          <h1>Trybe Frontend Online Store</h1>
        </header>
        <div className="div-main">
          <Categories buscaPorCategoria={ this.buscaPorCategoria } />
          <section className="div-principal">
            <div data-testid="home-initial-message" className="div-info-inicial">
              Digite algum termo de pesquisa ou escolha uma categoria.
            </div>
            <div className="input-e-carrinho-de-compras">
              <input
                data-testid="query-input"
                type="text"
                name="search"
                value={ busca }
                onChange={ this.handleOnChange }
                className="input-busca"
              />
              <button
                data-testid="query-button"
                type="button"
                onClick={ this.handleClick }
                className="btn-busca-produto"
              >
                Pesquisar
              </button>
              <Link
                data-testid="shopping-cart-button"
                to="/cartShopping"
                className="link-shopping-cart"
              >
                Carrinho de Compras
              </Link>
            </div>
            <div className="lista-de-produtos">
              { this.retornaProducts() }
            </div>
          </section>
        </div>
      </div>
    );
  }
}
