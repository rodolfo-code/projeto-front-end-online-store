// import { getCategories } from '../../services/api';

import React, { useState } from 'react';

export default function NavMain() {
  const [state, setState] = useState(3);

  // const categoriesList = async () => {
  //   const cat = await getCategories();
  //   const lis = cat.map(data => console.log(data))
  // };

  return (
    <div>
      <p>Nav Main {state}</p>
      <button type="button" onClick={() => setState(state + 2)}>
        Clique
      </button>
    </div>
  );
}
