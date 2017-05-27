import React, { Component } from 'react'
import { connect } from 'react-redux'

import { startRecording, stopRecording } from '../actions';

import Record from './Record';

class App extends Component {
/*  componentDidMount(){
  }*/
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

const mapStateToProps = (state, ownProps) => ({});

const INTERVAL = 1000;
const mapDispatchToProps = (dispatch, ownProps) => ({
  start: () => dispatch(startRecording({video: true, audio: true}, INTERVAL)),
  stop: () => dispatch(stopRecording()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App)
