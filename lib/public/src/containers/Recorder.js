import React, { Component } from 'react'
import { connect } from 'react-redux'

import mediaBitsRecorderService from '../services/mediaBitsRecorderService';

import ToggleButton from '../components/ToggleButton';

import { startRecording, stopRecording, publishBits } from '../actions';

import Records from './Records';


class Recorder extends Component {
  componentWillReceiveProps(nextProps){
    if(nextProps.active){
      mediaBitsRecorderService.onBits(({video, audio}) => {
        this.props.publishBits(video, audio);
      });
      mediaBitsRecorderService.start();
    }else{
      mediaBitsRecorderService.stop();
    }
  }

  render() {
    return (
      <div>
        <ToggleButton
          id="record"
          inactivateText="stop"
          activateText="start"
          inactivateClass="button-primary"
          onActivate={this.props.start}
          onInactivate={this.props.stop} />

        <Records aggregated={true} />
        <Records />
      </div>
    )
  }
};

const mapStateToProps = (state, ownProps) => ({
  active: state.recorder.active
});

const INTERVAL = 1000;
const mapDispatchToProps = (dispatch, ownProps) => ({
  start: () => dispatch(startRecording({video: true, audio: true}, INTERVAL)),
  stop: () => dispatch(stopRecording()),
  publishBits: (video, audio) => dispatch(publishBits(video, audio)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Recorder)
