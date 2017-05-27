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
    return (
      <div>
        {this.props.records}
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
