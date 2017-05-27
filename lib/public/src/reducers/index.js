import { combineReducers } from 'redux'

import {START_RECORDING, STOP_RECORDING} from '../actions';

import MediaBitsExtractor from 'media-bits-extractor';

var recorder = (state = { }, action) => {
  var alter = {};
  switch(action.type){
    case START_RECORDING:
      var mediaBitsExtractor = new MediaBitsExtractor(action.config, action.interval);
      mediaBitsExtractor.start();
      return mediaBitsExtractor;
    case STOP_RECORDING:
      state.stop();
      return {};
  }
  return {};
};

export default combineReducers({
  recorder
});

