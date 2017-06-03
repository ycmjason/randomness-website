import React, { Component } from 'react';

const messages = {
  'noData': 'No data yet',
};

class Message extends Component {
  render() {
    let message = this.props.type? messages[this.props.type]: this.props.children;
    let style = this.props.style || {
      textAlign: 'center',
    };
    return (
      <div style={style}>
        <em>{message}</em>
      </div>
    );
  }
};

export default Message;
