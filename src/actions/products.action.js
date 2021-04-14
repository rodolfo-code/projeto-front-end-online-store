import { API_ML } from '../common/ActionTypes';
import { getCategories } from '../services/api';

export function setCategories(payload) {
  return {
    a: console.log(payload),
    type: API_ML,
    payload,
  };
}

export function getAllCategories() {
  return dispatch => {
    getCategories()
      .then(res => {
        dispatch(setCategories(res.data));
      })
      .catch(console.log);
  };
}
