import { combineReducers } from 'redux';
import { reducer as homeReducer } from '../containers/Home/store';
import { reducer as catReducer } from '../containers/Cat/store';

export default combineReducers({
  homeReducer,
  catReducer,
});
