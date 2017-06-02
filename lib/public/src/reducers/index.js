import { combineReducers } from 'redux';

import recorder from './recorder';
import records from './records';

export default combineReducers({
  recorder,
  records
});
