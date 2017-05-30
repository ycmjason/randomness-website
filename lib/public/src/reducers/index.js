import { combineReducers } from 'redux'

import {START_RECORDING, STOP_RECORDING, PUBLISH_BITS} from '../actions';

import Extractors from 'randomness-extractors';

var recorder = (state = { active: false }, action) => {
  switch(action.type){
    case START_RECORDING:
      return { active: true };
    case STOP_RECORDING:
      return { active: false };
  }
  return state;
};

var records = (state = [], action) => {
  switch(action.type){
    case PUBLISH_BITS:
      var video_bits = action.bits.video.split('');
      var audio_bits = action.bits.audio.split('');
      var record = Object.assign({}, action.bits, {
        extracted: Extractors.innerProductExtractor([video_bits, audio_bits], 2)
      });
      return state.concat([record]);
  };
  return state;
};

export default combineReducers({
  recorder,
  records
});

