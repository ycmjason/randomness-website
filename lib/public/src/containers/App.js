import React, { Component } from 'react'
import { connect } from 'react-redux'

import { startRecording, stopRecording, publishBits } from '../actions';

import Record from './Record';
import wait from '../utils/wait';

class App extends Component {
  componentWillReceiveProps(nextProps){
    if(typeof nextProps.recorder.on === "function"){
      var videoBits;
      var audioBits;

      var done = wait(2, ({video, audio}) => {
        this.props.publishBits(video, audio);
      }, true);
      nextProps.recorder.on('video', (bits) => done({video: bits}));
      nextProps.recorder.on('audio', (bits) => done({audio: bits}));
    }
  }
  constructor(){
    super();
    this.start = () => this.props.start();
    this.stop = () => this.props.stop();
  }

  render() {
    return (
      <div>
        <button onClick={this.start}>Start</button>
        <button onClick={this.stop}>Stop</button>
        <Record />
      </div>
    )
  }
};

const mapStateToProps = (state, ownProps) => ({
  recorder: state.recorder
});

const INTERVAL = 1000;
const mapDispatchToProps = (dispatch, ownProps) => ({
  start: () => dispatch(startRecording({video: true, audio: true}, INTERVAL)),
  stop: () => dispatch(stopRecording()),
  publishBits: (video, audio) => dispatch(publishBits(video, audio)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App)
