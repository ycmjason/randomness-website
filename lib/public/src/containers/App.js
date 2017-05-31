import React, { Component } from 'react'
import { connect } from 'react-redux'

import Recorder from './Recorder';
import Menu from './Menu';

class App extends Component {

  render() {
    return (
      <div>
        <h1>Randomness website</h1>
        <Menu />
        <Recorder />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  active: state.recorder.active
});

const mapDispatchToProps = (dispatch, ownProps) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(App)
