import React, { useEffect, useState } from 'react';

// import { getCategories as api } from '../../services/api';
// import { getCategories as api } from '../../services/api';

export default function NavMain() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch('https://api.mercadolibre.com/sites/MLB/categories')
      .then(response => response.json())
      .then(data => setCategories(data.data));
  }, [categories]);

  return (
    <div>
      {categories.map(categorie => (
        <p key={categorie.id}>{categorie.name}</p>
      ))}
    </div>
  );
}
