import React, { Component } from 'react'
import { connect } from 'react-redux'

import Record from '../components/Record';

class Records extends Component {
  renderAggregated(){
    var aggregated = this.props.records.map(({extracted}) => extracted);
    if(aggregated.length <= 0) return null;
    return (
      <div>
        Extracted bits: [{aggregated.length}] {aggregated}
        <hr />
      </div>);
  }

  render() {
    if(this.props.aggregated) return this.renderAggregated();

    var records = this.props.records.map(({video, audio, extracted}, i) => (
      <div key={i}>
        <Record video={video}
          audio={audio}
          extracted={extracted} />
      </div>
    ));
    return (<div>{records}</div>);
  }
};

const mapStateToProps = (state, ownProps) => ({
  records: state.recorder.records
});

const mapDispatchToProps = (dispatch, ownProps) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Records)
