/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import Nav from './components/headerComponents/Nav';
import Checkout from './pages/Checkout';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDeatails';
import SearchResult from './pages/SearchResult';
import ShoppingCart from './pages/ShoppingCart';
import { getById as apiId } from './services/api';

function Routes() {
  const [id, setId] = useState('');
  const [productById, setProductById] = useState([]);

  useEffect(() => {
    apiId(id).then(response => setProductById(response.data.results));
  }, [id]);

  const handleClick = catId => {
    setId(catId);
  };

  // console.log(id);
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={props => (
          <Home {...props} nav={<Nav handleClick={handleClick} />} />
        )}
      />
      <Route
        path="/pages/shoppingCart"
        render={props => <ShoppingCart {...props} />}
      />
      <Route path="/pages/checkout" render={props => <Checkout {...props} />} />
      <Route
        path="/pages/productDetails"
        render={props => <ProductDetails {...props} />}
      />
      <Route
        path="/pages/searchResult"
        render={props => (
          <SearchResult
            {...props}
            nav={<Nav handleClick={handleClick} />}
            items={productById}
          />
        )}
      />
    </Switch>
  );
}

export default Routes;
