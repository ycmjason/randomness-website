import { PUBLISH_BITS } from '../actions';

import Extractors from 'randomness-extractors';

var INITIAL_STATE= [];

var records = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case PUBLISH_BITS:
      let video = action.bits.video;
      let audio = action.bits.audio;
      if(!video || !audio) break;
      let timestamp = action.timestamp;
      let extractions = {
        innerProduct: Extractors.innerProductExtractor([video.split(''), audio.split('')], 2),
      };
      let record = {video, audio, extractions, timestamp};
      return state.concat([record]);
  }
  return state;
};

export default records;
