import React, { Component } from 'react'
import { connect } from 'react-redux'

import Records from '../components/Records';

const mapStateToProps = (state, ownProps) => ({
  records: state.recorder.records
});

const mapDispatchToProps = (dispatch, ownProps) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Records)
