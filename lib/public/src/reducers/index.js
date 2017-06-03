import { combineReducers } from 'redux';

import recorder from './recorder';
import records from './records';
import tests from './tests';

export default combineReducers({
  recorder,
  records,
  tests,
});
