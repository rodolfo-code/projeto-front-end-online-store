import { getCategories as api } from '../../services/api';
import React from 'react';
import React, { useEffect, useState } from 'react';
import { response } from 'express';

export default function NavMain() {

  useEffect(() => {
    api.get()
      .then((response) => console.log(response))
  })
  return (
    <div>
      <p>Nav Main </p>
    </div>
  );
}
