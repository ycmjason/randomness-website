import { START_RECORDING, STOP_RECORDING, PUBLISH_BITS } from '../actions';

import Extractors from 'randomness-extractors';

var INITIAL_STATES= {
  recorder: {
    active: false,
    records: []
  }
};

var recorder = (state = INITIAL_STATES.recorder, action) => {
  switch(action.type){
    case START_RECORDING:
      return Object.assign({}, state, { active: true });
    case STOP_RECORDING:
      return Object.assign({}, state, { active: false });
    case PUBLISH_BITS:
      var video_bits = action.bits.video.split('');
      var audio_bits = action.bits.audio.split('');
      var record = Object.assign({}, action.bits, {
        extracted: Extractors.innerProductExtractor([video_bits, audio_bits], 2)
      });
      return Object.assign({}, state, { records: state.records.concat([record]) });
  }
  return state;
};

export default recorder;