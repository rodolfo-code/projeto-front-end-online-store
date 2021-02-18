import React, { useEffect, useState } from 'react';

import { getCategories as api } from '../../services/api';

export default function CategoriesList(props) {
  const { handleClick } = props;
  // eslint-disable-next-line no-unused-vars
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    api.get().then(response =>
      setCategories(
        response.data.map(categorie => (
          <button
            type="button"
            key={categorie.id}
            onClick={() => handleClick(categorie.id)}
          >
            {categorie.name}
          </button>
        )),
      ),
    );
  }, []);

  return <ul>{categories}</ul>;
}
