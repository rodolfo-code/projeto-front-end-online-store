import React from 'react';
import { Link } from 'react-router-dom';

import CategoriesList from '../headerComponents/CategoriesList';

import './Nav.css';

export default function Nav(props) {
  const { handleClick } = props;
  return (
    <>
      <nav className="navbar sticky-top navbar-light bg-dark">
        <a className="nav-logo" href="/">
          <img
            className="nav-logo"
            src="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.12.1/mercadolibre/logo-pt__large_plus.png"
            alt=""
          />
        </a>
        <div>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Pesquisar"
              aria-label="Pesquisar"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Pesquisar
            </button>
          </form>
        </div>
        <Link to="/pages/shoppingCart">
          <i className="fas fa-shopping-cart fa-lg" />
        </Link>
      </nav>

      <div className="nav-links">
        <nav className="navbar navbar-dark">
          <CategoriesList handleClick={handleClick} />
          <Link to="/">Home</Link>
          <Link to="/about">Sobre</Link>
          <Link to="/Contato">Contato</Link>
        </nav>
      </div>
    </>
  );
}
