import { START_RECORDING, STOP_RECORDING, PUBLISH_BITS } from '../actions';

var INITIAL_STATE= {
  active: false
};

var recorder = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case START_RECORDING:
      return Object.assign({}, state, { active: true });
    case STOP_RECORDING:
      return Object.assign({}, state, { active: false });
  }
  return state;
};

export default recorder;
