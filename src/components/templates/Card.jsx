/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import './Card.css';

function Card(props) {
  const { item } = props;
  const {
    title,
    thumbnail,
    price,
    available_quantity: availableQuantity,
  } = item;

  return (
    <div className="card text-center">
      <div className="overflow">
        <img src={thumbnail} alt="imagem 1" className="card-img-top" />
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title">{title}</h4>
        <p className="card-text text-secondary">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam a
          inventore dolores dicta dolor culpa necessitatibus mollitia vero
          aliquid modi?
        </p>
        <p>{price}</p>
        <p>{availableQuantity}</p>
        <a href="#" className="btn btn-outline-info">
          Go anywhere
        </a>
      </div>
    </div>
  );
}

export default Card;
