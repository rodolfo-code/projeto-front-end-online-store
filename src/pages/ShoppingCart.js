import React from 'react';
import { Link } from 'react-router-dom';

import Nav from '../components/headerComponents/Nav';

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
