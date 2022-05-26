import React from 'react';
import imgTrybe from '../imagens/trybe.png';

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <img src={ imgTrybe } alt="logo da trybe" className="logo-trybe" />
        <h1>Trybe Frontend Online Store</h1>
      </header>
    );
  }
}
