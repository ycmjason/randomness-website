import React, { Component } from 'react';
import { connect } from 'react-redux';
import ToggleButton from './ToggleButton';

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => ownProps.onClick(),
});

class MenuItem extends Component {
  render() {
    return (
      <ToggleButton id="menu: inner-product extractor">Inner-product extractor</ToggleButton>
    );
  }
}

export default connect(null, mapDispatchToProps)(MenuItem);
