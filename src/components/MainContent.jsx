import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import ShoppingCart from '../pages/ShoppingCart';
import Header from './Header';

function MainContent() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/pages/shoppingCart" component={ShoppingCart} />
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default MainContent;
