import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import PropTypes from 'prop-types';

function Home() {
  const [request, setRequest] = useState([]);
  useEffect(() => {
    fetch('https://api.mercadolibre.com/sites/MLB/categories')
      .then(res => {
        res.json();
      })
      .then(result => {
        setRequest(result);
      });
  }, []);

  return (
    <div>
      <p>Pagina inicial HOME</p>
      <div>{console.log(request)}</div>
    </div>
  );
}

// Home.propTypes = {};

export default Home;
