import React from 'react';
import PropTypes from 'prop-types';
import imgTrybe from '../imagens/trybe.png';

export default class Product extends React.Component {
  render() {
    const {
      titulo,
      custo,
      imagem,
      atributos,
    } = this.props;
    return (
      <div className="div-product-id">
        <header>
          <img src={ imgTrybe } alt="logo da trybe" className="logo-trybe" />
          <h1>Trybe Frontend Online Store</h1>
        </header>
        <div className="informations-product-id">
          <div>
            <h2 data-testid="product-detail-name">{ titulo }</h2>
            <h2>{ `R$ ${custo}` }</h2>
            <img src={ imagem } alt={ titulo } />
          </div>
          <ul>
            <h2>Especificações Técnicas:</h2>
            {
              atributos.map((atributo) => (
                <li key={ atributo.id } className="product-atributos-id">
                  <strong>{ `${atributo.name}: ` }</strong>
                  <span>{ atributo.value_name }</span>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    );
  }
}

Product.propTypes = {
  titulo: PropTypes.string.isRequired,
  custo: PropTypes.number.isRequired,
  imagem: PropTypes.string.isRequired,
  atributos: PropTypes.string.isRequired,
};
