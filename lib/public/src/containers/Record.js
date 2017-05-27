import React, { Component } from 'react'
import { connect } from 'react-redux'

import { publishBits } from '../actions';

class Record extends Component {
/*  componentDidMount(){
  }*/
  constructor(){
    super();
  }

  render() {
    var record = (vid, aud, ext) => (
      <div>
        video: {vid.substring(0, 20)}...
        audio: {aud.substring(0, 20)}...
        extracted: {ext}
      </div>
    )
    var records = this.props.records.map(({video, audio, extracted}) => record(video, audio, extracted));
    return (
      <div>
        {records}
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => ({
  records: state.records
});

const mapDispatchToProps = (dispatch, ownProps) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Record)
