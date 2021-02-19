/* eslint-disable react/destructuring-assignment */
import React, { useEffect, useState } from 'react';

import Nav from '../components/templates/Nav';
import { getById as apiId } from '../services/api';

function Home() {
  const [productByid, setProductById] = useState([]);
  const [id, setId] = useState('');

  useEffect(() => {
    apiId(id).then(response => setProductById(response.data.results));
  }, [id]);

  console.log(productByid);
  console.log(id);

  const handleClick = catId => {
    setId(catId);
  };

  return (
    <div>
      <Nav handleClick={handleClick} />
      <p>Pagina inicial HOME</p>
    </div>
  );
}

export default Home;
