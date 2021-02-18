import React from 'react';
import { Link } from 'react-router-dom';

import Nav from '../components/templates/Nav';

function ShoppingCart() {
  return (
    <div>
      <Nav />
      <Link to="/pages/checkout" />
      <p>Carrinho de compra</p>
    </div>
  );
}

export default ShoppingCart;
