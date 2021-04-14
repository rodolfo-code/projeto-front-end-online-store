import React from 'react';
import { Switch, Route } from 'react-router-dom';

import About from './pages/About';
import Checkout from './pages/Checkout';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDeatails';
import SearchResult from './pages/SearchResult';
import ShoppingCart from './pages/ShoppingCart';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/pages/shoppingCart" component={ShoppingCart} />
      <Route path="/pages/checkout" component={Checkout} />
      <Route path="/pages/productDetails" component={ProductDetails} />
      <Route path="/pages/searchResult" component={SearchResult} />
      <Route path="/about" component={About} />
    </Switch>
  );
}

export default Routes;
