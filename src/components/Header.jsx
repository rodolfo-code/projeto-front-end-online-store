import React from 'react';
import NavHeader from './headerComponents/NavHeader';
import './Header.css';
import NavMain from './headerComponents/NavMain';
// import PropTypes from 'prop-types';

function Header() {
  return (
    <nav className="header-nav-bar">
      <NavHeader />
      <NavMain />
    </nav>
  );
}

// Header.propTypes = {};

export default Header;
