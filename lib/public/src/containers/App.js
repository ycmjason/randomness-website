import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { startRecording, stopRecording } from '../actions';

class App extends Component {
  componentWillMount() {
    this.start = () => this.props.start();
    this.stop = () => this.props.stop();
  }
  constructor(){
    super();
  }

  render() {
    return (
      <div>
        <button onClick={this.start}>Start</button>
        <button onClick={this.stop}>Stop</button>
      </div>
    )
  }
};

const mapStateToProps = (state, ownProps) => ({
  recorder: state.recorder,
});

const INTERVAL = 1000;
const mapDispatchToProps = (dispatch, ownProps) => ({
  start: () => dispatch(startRecording({video: true, audio: true}, INTERVAL)),
  stop: () => dispatch(stopRecording(ownProps.recorder)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App)
