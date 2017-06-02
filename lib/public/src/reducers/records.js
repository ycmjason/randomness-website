import { PUBLISH_BITS } from '../actions';

var INITIAL_STATE= [];

var records = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case PUBLISH_BITS:
      let video = action.bits.video;
      let audio = action.bits.audio;
      let timestamp = action.timestamp;
      let record = {video, audio, timestamp};
      return state.concat([record]);
  }
  return state;
};

export default records;
