import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { statefulNextState } from '../actions';

class ToggleButton extends Component {
  constructor(props){
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(){
    this.props.toggle();
    if(this.isActive()) this.props.onInactivate();
    else this.props.onActivate();
  }

  isActive(){
    return this.props.currState.name === "active";
  }

  render() {
    let text = this.props[(this.isActive()? 'inactivateText': 'activateText')];
    let cls = this.props[(this.isActive()? 'inactivateClass': 'activateClass')] || 'button';
    return (<button className={cls} onClick={this.onClick}>{text}</button>);
  }
}

ToggleButton.propTypes = {
  currState: PropTypes.any.isRequired,
  toggle: PropTypes.func.isRequired,
  activateText: PropTypes.string.isRequired,
  inactivateText: PropTypes.string.isRequired,
  activateClass: PropTypes.string,
  inactivateClass: PropTypes.string,
  onInactivate: PropTypes.func,
  onActivate: PropTypes.func,
}

const mapStateToProps = (state, ownProps) => ({
  currState: state.stateful.toggles[ownProps.id]
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  toggle: () => dispatch(statefulNextState(ownProps.id))
});

export const toggle_ids = ['record'];
export default connect(mapStateToProps, mapDispatchToProps)(ToggleButton);
