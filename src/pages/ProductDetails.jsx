import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
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

  adicionaAoCarrinho = async () => {
    const { listaDeCarrinho } = this.state;
    const { product } = this.state;
    this.setState({
      listaDeCarrinho: [...listaDeCarrinho, product],
    });
  }

  render() {
    const { product } = this.state;
    return (
      <div>
        <Link
          data-testid="shopping-cart-button"
          to="/cartShopping"
          className="link-shopping-cart"
        >
          Carrinho de Compras
        </Link>
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
          data-testid="product-detail-add-to-cart"
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
