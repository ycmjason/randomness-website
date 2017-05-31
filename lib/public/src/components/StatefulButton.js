/*
import React, { Component } from 'react'
import { connect } from 'react-redux'

import { statefulButtonRegister, statefulButtonNextState } from '../actions';

const mapStateToProps = (state, ownProps) => {
  var button = state.statefulButtons[ownProps.id] || {};
  return {
    states: state.stateful.button[ownProps.id],
    currentState: button.currentState,
  }
};
const mapDispatchToProps = (dispatch, ownProps) => ({
  register: () => dispatch(statefulButtonRegister(ownProps.id, ownProps.states, ownProps.defaultState)),
  nextState: () => dispatch(statefulButtonNextState(ownProps.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(class extends Component {
  constructor(props){
    super(props);
    props.register();
    this.onClick = this.onClick.bind(this);
  }

  onClick(){
    this.props.nextState();
    if(typeof this.props.onClick === "function") this.props.onClick();
  }

  render() {
    if(!this.props.states || !this.props.currentState) return null;
    var cls = this.props.currentState.class || 'button';
    var text = this.props.currentState.text;
    return (<button onClick={this.onClick} className={cls}>{text}</button>);
  }
});
*/
