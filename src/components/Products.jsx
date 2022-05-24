import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Products extends Component {
  renderProducts(list) {
    return list.map((item) => (
      <div key={ item.id } data-testid="product">
        <img src={ item.thumbnail } alt={ item.title } />
        <p>{item.title}</p>
        <p>{item.price}</p>
      </div>
    ));
  }

  render() {
    const { listProducts } = this.props;
    return (
      <div>{this.renderProducts(listProducts)}</div>
    );
  }
}

Products.propTypes = {
  listProducts: PropTypes.arrayOf(PropTypes.any).isRequires,
};