import React from 'react';
import PropTypes from 'prop-types';
import { getProductsById } from '../services/api';
import imgTrybe from '../imagens/trybe.png';

export default class Product extends React.Component {
  state = {
    produto: '',
  }

  async componentDidMount() {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    const objetoId = await getProductsById(id);
    const produto = (
      <div className="div-product-id">
        <header>
          <img src={ imgTrybe } alt="logo da trybe" className="logo-trybe" />
          <h1>Trybe Frontend Online Store</h1>
        </header>
        <div className="informations-product-id">
          <div>
            <h2 data-testid="product-detail-name">{ objetoId.title }</h2>
            <h2>{ `R$ ${objetoId.price}` }</h2>
            <img src={ objetoId.pictures[0].url } alt={ objetoId.title } />
          </div>
          <ul>
            <h2>Especificações Técnicas:</h2>
            {
              objetoId.attributes.map((atributo) => (
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
    this.setState({ produto });
    console.log(objetoId);
  }

  render() {
    const { produto } = this.state;
    return (
      <div>
        { produto }
      </div>
    );
  }
}

Product.propTypes = {
  match: PropTypes.string.isRequired,
  params: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
