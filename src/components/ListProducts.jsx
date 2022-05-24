import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ListProducts extends Component {

  render() {
    const { onClick, onChange, value } = this.props;
    return (
      <div>
        <input data-testid='query-input' type='text'
          name='search' value={value} onChange={onChange} />
        <button data-testid='query-button' type='button' onClick={onClick}>
          Pesquisar
        </button>
      </div>
    );
  }
}

ListProducts.propTypes = {
    value: PropTypes.func.isrequired,
    onChange: PropTypes.func.isrequired,
    onClick: PropTypes.func.isrequired,
};