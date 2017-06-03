import { combineReducers } from 'redux';

import recorder from './recorder';
import records from './records';
import testResults from './testResults';

export default combineReducers({
  recorder,
  records,
  testResults,
});
