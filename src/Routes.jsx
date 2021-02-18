/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Checkout from './pages/Checkout';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDeatails';
import ShoppingCart from './pages/ShoppingCart';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/pages/shoppingCart" component={ShoppingCart} />
      <Route path="/pages/checkout" compoent={Checkout} />
      <Routes path="/pages/productDetails" component={ProductDetails} />
    </Switch>
  );
}

export default Routes;
