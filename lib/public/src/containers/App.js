import React, { Component } from 'react'
import { connect } from 'react-redux'

import { startRecording, stopRecording, publishBits } from '../actions';

import Records from './Records';
import mediaBitsRecorderService from '../services/mediaBitsRecorderService';

class App extends Component {
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
        <button onClick={this.props.start}>Start</button>
        <button onClick={this.props.stop}>Stop</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(App)
