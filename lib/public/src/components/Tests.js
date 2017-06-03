import React, { Component } from 'react';

import Message from './utils/Message';
import Columnise from './utils/Columnise';

import TestButtonContainer from '../containers/TestButtonContainer';
import TestResultContainer from '../containers/TestResultContainer';

class Tests extends Component {
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

        <section>
          <TestResultContainer extractor={this.props.extractor} />
        </section>
      </div>
    );
  }
};

export default Tests;
