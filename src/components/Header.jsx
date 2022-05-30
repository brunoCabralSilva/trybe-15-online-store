import React from 'react';
import { Link } from 'react-router-dom';
import imgTrybe from '../imagens/trybe.png';

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <Link to="/" className="link-product-home">
          <img src={ imgTrybe } alt="logo da trybe" className="logo-trybe" />
        </Link>
        <h1>Trybe Frontend Online Store</h1>
      </header>
    );
  }
}
