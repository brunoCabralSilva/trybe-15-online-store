import React from 'react';
import PropTypes from 'prop-types';
import { getProductsById } from '../services/api';
import Product from '../components/Product';
import '../App.css';

export default class ProductDetails extends React.Component {
  state = {
    product: {},
    listaDeCarrinho: [],
  }

  async componentDidMount() {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    const objetoProduto = await getProductsById(id);
    this.setState({ product: objetoProduto });
  }

  componentDidUpdate() {
    const { listaDeCarrinho } = this.state;
    localStorage.setItem('carrinho-de-compras', JSON.stringify(listaDeCarrinho));
  }

  adicionaAoCarrinho = async ({ target }) => {
    const { value } = target;
    const objetoProduto = await getProductsById(value);
    this.setState((anterior) => ({
      listaDeCarrinho: [...anterior.listaDeCarrinho, objetoProduto],
    }));
  }

  render() {
    const { product } = this.state;
    console.log(product);
    return (
      <div>
        { product.title && (
          <Product
            titulo={ product.title }
            custo={ product.price }
            imagem={ product.pictures[0].url }
            atributos={ product.attributes }
          />
        ) }
        <button
          type="button"
          className="adicionar-ao-carrinho-productDetails"
          data-testid="shopping-cart-button"
          value={ product.id }
          onClick={ this.adicionaAoCarrinho }
        >
          Adicionar ao Carrinho
        </button>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.string.isRequired,
  params: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
