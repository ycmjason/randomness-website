import React, { Component } from 'react'
import { connect } from 'react-redux'

import { publishBits } from '../actions';

import Record from './Record';

class Records extends Component {
  render() {
    if(this.props.aggregated){
      var aggregated = this.props.records.map(({extracted}) => extracted);
      if(aggregated.length <= 0) return null;
      return (
        <div>
          [{aggregated.length}] {aggregated}
        </div>);
    }
    var records = this.props.records.map(({video, audio, extracted}, i) => (
      <Record video={video}
              audio={audio}
              extracted={extracted}
              key={i} />
    ));
    return (<div>{records}</div>);
  }
};

const mapStateToProps = (state, ownProps) => ({
  records: state.records
});

const mapDispatchToProps = (dispatch, ownProps) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Records)
