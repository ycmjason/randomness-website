import React, { Component } from 'react'
import { connect } from 'react-redux'

class Record extends Component {
  render() {
    var video = this.props.video;
    var audio = this.props.audio;
    var extracted = this.props.extracted;
    return (
      <div className="row">
        <div className="twelve columns">
          video: [{video.length}] {video.substring(0, 20)}...
        </div>
        <div className="twelve columns">
          audio: [{audio.length}] {audio.substring(0, 20)}...<br />
        </div>
        <div className="twelve columns">
          extracted: {extracted}
        </div>
      </div>
    )
  }
};

export default connect()(Record)
