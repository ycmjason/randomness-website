import React, { Component } from 'react';

class Recorder extends Component {
  render() {
    let button = (this.props.active)?
      (<button onClick={this.props.stop} className="button-primary">stop</button>):
      (<button onClick={this.props.start}>start</button>);
    return button;
  }
};

export default Recorder;
