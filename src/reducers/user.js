import { USER } from '../common/ActionTypes';

const initialState = {};

function user(state = initialState, { type, payload }) {
  switch (type) {
    case USER:
      return { ...state, ...payload };

    default:
      return state;
  }
}

export default user;
