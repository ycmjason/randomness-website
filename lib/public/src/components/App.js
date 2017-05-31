import React, { Component } from 'react'
import { connect } from 'react-redux'

import RecorderContainer from '../containers/RecorderContainer';

class App extends Component {

  render() {
    return (
      <div>
        <h1>Randomness website</h1>
        <RecorderContainer />
      </div>
    )
  }
}

export default App;
