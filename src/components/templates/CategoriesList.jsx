import React, { useEffect, useState } from 'react';
import 'bootstrap';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { getAllCategories } from '../../actions/products.action';

export default function CategoriesList(props) {
  const { handleClick } = props;
  const [categories, setCategories] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategories());
  }, []);

  useEffect(() => {
    setCategories(
      ['a', 'b', 'c', 'd'].map(categorie => (
        <Link
          to="/pages/searchResult"
          type="button"
          key={categorie.id}
          onClick={() => handleClick(categorie.id)}
          className="dropdown-item"
        >
          {categorie}
        </Link>
      )),
    );
  }, []);

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
      >
        <i className="fa fa-bars" />
      </a>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
        <div className="dropdown-box">{categories}</div>
      </div>
    </div>
  );
}
