import React from 'react';
import { Link } from 'react-router-dom';
import './NavHeader.css';

export default function NavHeader() {
  return (
    <div id="nav-header" className="nav-header">
      <a className="nav-logo" href="/">
        <img
          className="nav-logo"
          src="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.12.1/mercadolibre/logo-pt__large_plus.png"
          alt=""
        />
      </a>
      <div>
        <input type="text" />
        <input type="submit" />
      </div>
      <Link to="/pages/shoppingCart">Carrinho de compras</Link>
    </div>
  );
}
