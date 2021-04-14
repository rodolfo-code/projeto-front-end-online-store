import { API_ML } from '../common/ActionTypes';

const initialState = {
  categories: [],
};

function products(state = initialState, { type, payload }) {
  switch (type) {
    case API_ML:
      return { ...state.categories, ...payload };

    default:
      return state;
  }
}

export default products;
