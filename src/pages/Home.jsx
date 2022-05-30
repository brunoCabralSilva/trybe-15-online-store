import React, { Component } from 'react';
import Categories from '../components/Categories';
import '../App.css';
import Header from '../components/Header';
import SearchProduct from '../components/SearchProduct';
import ProductList from '../components/ProductList';

import {
  getProductsFromQuery,
  getProductsByCategorie,
} from '../services/api';

export default class Home extends Component {
  state = {
    busca: '',
    lista: [],
    valor: 0,
    listaDeCarrinho: [],
  }

  componentDidUpdate() {
    const { listaDeCarrinho } = this.state;
    localStorage.setItem('carrinho-de-compras', JSON.stringify(listaDeCarrinho));
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

  adicionaAoCarrinho = async (produto) => {
    // estavamos usando a função de forma desnecessária. O teste não aguardava uma função assincrona. Então não dava certo.
    // e como já tinhamos os dados, estavamos puxando os dados que não precisava.
    this.setState((anterior) => ({
      listaDeCarrinho: [...anterior.listaDeCarrinho, produto],
    }));
  }

  buscaPorCategoria = async ({ target }) => {
    const { name } = target;
    const produtosCat = await getProductsByCategorie(name);
    this.setState({ lista: produtosCat.results });
  }

  render() {
    const { busca, lista, valor } = this.state;
    return (
      <div>
        <Header />
        <div className="div-main">
          <Categories buscaPorCategoria={ this.buscaPorCategoria } />
          <div className="lista-de-produtos">
            <SearchProduct
              handleClick={ this.handleClick }
              handleOnChange={ this.handleOnChange }
              busca={ busca }
            />
            <ProductList
              lista={ lista }
              valor={ valor }
              adicionaAoCarrinho={ this.adicionaAoCarrinho }
            />
          </div>
        </div>
      </div>
    );
  }
}
