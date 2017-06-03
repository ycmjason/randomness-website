import React, { Component } from 'react';

class TestButton extends Component {
  render() {
    let bits = this.props.bits;
    if(bits.length === 0) return null;
    let onClick = () => this.props.publishTest(this.props.runTest(bits));
    return (
      <button onClick={onClick}>Test</button>
    );
  }
};

export default TestButton;
