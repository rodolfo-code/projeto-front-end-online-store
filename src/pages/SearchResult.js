import React from 'react';

import Nav from '../components/headerComponents/Nav';

function SearchResult() {
  return (
    <>
      <Nav />
      <div className="container-fluid d-flex justify-content-center">
        <div className="row">Resultado da busca</div>
      </div>
    </>
  );
}

export default SearchResult;
