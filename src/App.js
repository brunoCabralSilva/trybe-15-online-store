import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import CartShopping from './pages/CartShopping';
import ProductDetails from './pages/ProductDetails';
import Checkout from './pages/Checkout';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/trybe-15-online-store" component={ Home } />
        <Route path="/cartShopping" component={ CartShopping } />
        <Route path="/productDetails/:id" component={ ProductDetails } />
        <Route path="/checkout" component={ Checkout } />
      </Switch>
    </BrowserRouter>
  );
}
