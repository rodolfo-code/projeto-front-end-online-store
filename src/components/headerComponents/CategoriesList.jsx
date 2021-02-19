import React, { useEffect, useState } from 'react';
import 'bootstrap';
// import {
//   Dropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem,
// } from 'reactstrap';

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
            className="dropdown-item"
          >
            {categorie.name}
          </button>

          // </input>
        )),
      ),
    );
  }, []);

  // const style = {
  //   outline: 'none',
  // };

  return (
    <div className="dropdown">
      <a
        className="btn btn-outline"
        href="/"
        role="button"
        id="dropdownMenuLink"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        // style={style}
      >
        <i className="fa fa-bars" />
      </a>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
        <div className="dropdown-box">{categories}</div>
      </div>
    </div>
  );
}
