/* eslint-disable react/destructuring-assignment */
// import React, { useEffect, useState } from 'react';
import React from 'react';
// import Nav from '../components/headerComponents/Nav';
// import { getById as apiId } from '../services/api';

function Home(props) {
  const { nav } = props;
  // const [productByid, setProductById] = useState([]);
  // const [id, setId] = useState('');

  // useEffect(() => {
  //   apiId(id).then(response => setProductById(response.data.results));
  // }, [id]);

  // console.log(productByid);
  // console.log(id);

  // const handleClick = catId => {
  //   setId(catId);
  // };

  console.log(props);
  // console.log(handleClick);

  return (
    <div>
      {/* <Nav handleClick={handleClick} /> */}
      {nav}
      <p>Pagina inicial HOME</p>
    </div>
  );
}

export default Home;
