import React, { Component } from 'react'
import { connect } from 'react-redux'

import { publishBits } from '../actions';

class Record extends Component {
  render() {
    var video = this.props.video;
    var audio = this.props.audio;
    var extracted = this.props.extracted;
    return (
      <div>
        video: [{video.length}] {video.substring(0, 20)}...
        audio: [{audio.length}] {audio.substring(0, 20)}...<br />
        extracted: {extracted}
      </div>
    )
  }
};

const mapStateToProps = (state, ownProps) => ({
  records: state.records
});

const mapDispatchToProps = (dispatch, ownProps) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Record)
