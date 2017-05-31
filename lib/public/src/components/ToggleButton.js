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
    let cb = this.props[this.isActive()? 'onInactivate': 'onActivate'];
    if(cb) cb();
  }

  isActive(){
    return this.props.currState.name === "active";
  }

  render() {
    let text = this.props[(this.isActive()? 'inactivateText': 'activateText')] || this.props.children;
    let cls = this.props[(this.isActive()? 'inactivateClass': 'activateClass')];
    return (<button className={cls} onClick={this.onClick}>{text}</button>);
  }
}

ToggleButton.defaultProps = {
  activateClass: 'button',
  inactivateClass: 'button-primary'
};

ToggleButton.propTypes = {
  currState: PropTypes.any.isRequired,
  toggle: PropTypes.func.isRequired,
  activateText: PropTypes.string,
  inactivateText: PropTypes.string,
  activateClass: PropTypes.string,
  inactivateClass: PropTypes.string,
  onInactivate: PropTypes.func,
  onActivate: PropTypes.func,
}

const mapStateToProps = (state, ownProps) => ({
  currState: state.toggles[ownProps.id]
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  toggle: () => dispatch(statefulNextState(ownProps.id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ToggleButton);
