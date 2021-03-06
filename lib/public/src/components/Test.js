import React, { Component } from 'react';

import Message from './utils/Message';
import Columnise from './utils/Columnise';

import TestButtonContainer from '../containers/TestButtonContainer';
import TestResultContainer from '../containers/TestResultContainer';

class Test extends Component {
  render() {
    let bits = this.props.bits;
    if(bits.length === 0) return (<Message type="noData" />);
    return (
      <div>
        <Columnise ratio="2:2:8">
          <section>
            <TestButtonContainer extractor={this.props.extractor} />
          </section>

          <section>
            count: {bits.length}
          </section>

          <section style={{wordBreak: 'break-all'}}>
            {bits}
          </section>
        </Columnise>

        <Columnise ratio="2:7:3">
          <div>&nbsp;</div>
          <TestResultContainer extractor={this.props.extractor} />
          <div>&nbsp;</div>
        </Columnise>
      </div>
    );
  }
};

export default Test;
