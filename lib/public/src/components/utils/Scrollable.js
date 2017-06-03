import React, { Component } from 'react';

class Scrollable extends Component {
  componentWillUpdate(){
    if(this.props.autoScroll){
      // only auto scroll when the scroll is already at bottom.
      this.autoScroll = this.outterEl.scrollHeight - this.outterEl.scrollTop - Number.parseInt(this.props.height) < 1;
    }
  }

  componentDidUpdate(){
    if(this.autoScroll) this.outterEl.scrollTop = this.outterEl.scrollHeight;
  }

  render() {
    let styles = {
      overflowX: (this.props.x? 'auto': 'hidden'),
      overflowY: (this.props.y? 'auto': 'hidden'),
      maxWidth: this.props.width || 'initial',
      maxHeight: this.props.height || 'initial',
    };
    return (
      <div ref={el => this.outterEl = el} style={styles}>
        <div ref={el => this.innerEl = el}>
            {this.props.children}
        </div>
      </div>
    );
  }
};

export default Scrollable;
