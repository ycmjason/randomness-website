import React, { Component } from 'react';

import Message from './utils/Message';
import Columnise from './utils/Columnise';

import TestButtonContainer from '../containers/TestButtonContainer';

class Tests extends Component {
  render() {
    let bits = this.props.bits;
    if(bits.length === 0) return (<Message type="noData" />);
    return (
      <Columnise ratio="2:2:8">
        <section>
          <TestButtonContainer extractor={this.props.extractor} />
        </section>

        <section>
          count: {bits.length}
        </section>

        <section>
          {bits.split('').join(' ')}
        </section>
      </Columnise>
    );
  }
};

export default Tests;
