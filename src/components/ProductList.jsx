import React from 'react';
import '../App.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class ProductList extends React.Component {
  retornaMensagemInicial = () => {
    const { lista, valor } = this.props;
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
  }

  render() {
    const {
      lista,
      adicionaAoCarrinho,
    } = this.props;
    return (
      <div className="lista-de-produtos">
        { this.retornaMensagemInicial() }
        {
          lista.map((produto) => (
            <div className="produtos-enc" key={ produto.id }>
              <Link
                data-testid="product-detail-link"
                to={ `productDetails/${produto.id}` }
                className="produtos-encontrados"
              >
                <div data-testid="product" className="div-produtos-encontrados">
                  <p className="produtos-encontrados-title">{ produto.title }</p>
                  <img
                    src={ produto.thumbnail }
                    alt={ `imagem de ${produto.title}` }
                    className="imagem-produto"
                  />
                  <p>{ produto.price }</p>
                </div>
              </Link>
              <button
                type="button"
                className="adicionar-ao-carrinho-productList"
                data-testid="product-add-to-cart"
                value={ produto.id }
                onClick={ adicionaAoCarrinho }
              >
                Adicionar ao Carrinho
              </button>
            </div>
          ))
        }
      </div>
    );
  }
}

ProductList.propTypes = {
  lista: PropTypes.string.isRequired,
  valor: PropTypes.number.isRequired,
  adicionaAoCarrinho: PropTypes.func.isRequired,
};
