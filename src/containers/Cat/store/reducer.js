import { CHANGE_CAT_LIST } from './actions';

const defaultState = {
  catlist: [],
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_CAT_LIST:
      return {
        ...state,
        catlist: action.data,
      };
    default:
      return state;
  }
};
