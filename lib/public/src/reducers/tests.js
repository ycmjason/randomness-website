import { PUBLISH_TEST } from '../actions';

var INITIAL_STATE= {};

var tests = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case PUBLISH_TEST:
      return Object({}, state, {
        [action.extractor]: action.result
      });
  }
  return state;
};

export default tests;
