import { connect } from 'react-redux'

import mediaBitsRecorderService from '../services/mediaBitsRecorderService';

import { startRecording, stopRecording, publishBits } from '../actions';

import Recorder from '../components/Recorder';

const mapStateToProps = (state, ownProps) => ({
  active: state.recorder.active
});

const INTERVAL = 1000;
const mapDispatchToProps = (dispatch, ownProps) => ({
  start: () => {
    mediaBitsRecorderService.onBits(({video, audio}) => dispatch(publishBits(video, audio)));
    mediaBitsRecorderService.start();

    dispatch(startRecording({video: true, audio: true}, INTERVAL))
  },
  stop: () => {
    mediaBitsRecorderService.stop();

    dispatch(stopRecording());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Recorder)
