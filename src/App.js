import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import cartShopping from './components/cartShopping';
import Product from './components/Product';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/cartShopping" component={ cartShopping } />
        <Route path="/product/:id" component={ Product } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
