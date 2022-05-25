import React from 'react';
import PropTypes from 'prop-types';
import { getProductsById } from '../services/api';
import Product from '../components/Product';

export default class ProductDetails extends React.Component {
  state = {
    product: {},
  }

  async componentDidMount() {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    const objetoProduto = await getProductsById(id);
    this.setState({ product: objetoProduto });
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
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.string.isRequired,
  params: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
