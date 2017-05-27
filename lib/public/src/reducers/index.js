import { combineReducers } from 'redux'

import {START_RECORDING, STOP_RECORDING, PUBLISH_BITS} from '../actions';

import MediaBitsExtractor from 'media-bits-extractor';
import Extractors from 'randomness-extractors';

var recorder = (state = { }, action) => {
  switch(action.type){
    case START_RECORDING:
      var mediaBitsExtractor = new MediaBitsExtractor(action.config, action.interval);
      mediaBitsExtractor.start();
      return mediaBitsExtractor;
    case STOP_RECORDING:
      state.stop();
      return {};
  }
  return state;
};

var records = (state = [], action) => {
  switch(action.type){
    case PUBLISH_BITS:
      action.bits.extracted = Extractors.innerProductExtractor([action.bits.video, action.bits.audio], 2);
      return state.slice(0).push(action.bits);
  };
  return state;
};

export default combineReducers({
  recorder,
  records
});

