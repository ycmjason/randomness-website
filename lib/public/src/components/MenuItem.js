import React, { Component } from 'react'
import { connect } from 'react-redux'

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => ownProps.onClick(),
});

export default connect(null, mapDispatchToProps)(class extends Component {
  render() {
      return (<button onClick={this.props.onClick}>{this.props.children}</button>);
  }
})
