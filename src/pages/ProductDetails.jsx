import React from 'react';
import PropTypes from 'prop-types';
import { getProductsById } from '../services/api';
import Product from '../components/Product';

export default class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.retornaProduct = this.retornaProduct.bind(this);
    this.state = { product: {} };
  }

  componentDidMount() {
    this.retornaProduct();
  }

  retornaProduct = async () => {
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
        <Product
          titulo={ product.title }
          custo={ product.price }
          imagem={ product.thumbnail }
        />
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.string.isRequired,
  params: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
