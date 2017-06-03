import React, { Component } from 'react';

import Columnise from './utils/Columnise';

const tick = (<i style={{color: 'green'}} className="fa fa-check" aria-hidden="true"></i>);
const cross = (<i style={{color: 'red'}} className="fa fa-times" aria-hidden="true"></i>);

class TestResult extends Component {
  render() {
    let bits = this.props.bits;
    let results = this.props.results;
    if(bits.length === 0) return null;
    if(!results) return null;

    let testNames = Object.keys(results);
    let resultRows = testNames.map(testName => (
      <Columnise ratio="1:11" key={testName}>
        <section>{results[testName]? tick: cross}</section>
        <section>{testName}</section>
      </Columnise>
    ));

    return (<div>{resultRows}</div>);
  }
};

export default TestResult;
