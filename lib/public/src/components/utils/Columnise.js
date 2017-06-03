import React, { Component } from 'react';

const parseRatio = (ratio) => {
  return ratio.split(':')
    .map(r => Number.parseInt(r));
};

var numbers = ['','one','two','three','four', 'five','six','seven','eight','nine','ten','eleven','twelve'];

class Columnise extends Component {
  render() {
    let ratio = parseRatio(this.props.ratio);
    if(ratio.length !== this.props.children.length) throw "Columnise: # of children doesn't match ratio";
    if(ratio.reduce((a, b) => a + b) !== 12) throw "Columnise: ratio sum is not 12!";

    let colClasses = ratio.map(r => `${numbers[r]} columns`);
    let columns = this.props.children.map((c, i) => (
      <div key={i} className={colClasses[i]}>
        {c}
      </div>
    ));
    return (
      <div className="row">
        {columns}
      </div>
    );
  }
};

export default Columnise;
