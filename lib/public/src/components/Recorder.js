import React, { Component } from 'react'
import { connect } from 'react-redux'

import RecordsContainer from '../containers/RecordsContainer';


class Recorder extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.start}>start</button>
        <button onClick={this.props.stop}>stop</button>

        <RecordsContainer aggregated={true} />
        <RecordsContainer />
      </div>
    )
  }
};

export default Recorder;
