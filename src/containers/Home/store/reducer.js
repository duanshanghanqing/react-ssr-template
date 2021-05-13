import { CHANGE_HOME_DOG } from './actions';

const defaultState = {
  dog: {},
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_HOME_DOG:
      return {
        ...state,
        dog: action.data,
      };
    default:
      return state;
  }
};
