import React, { Component } from 'react';

import Table from './utils/Table';
import Message from './utils/Message';

class Extractions extends Component {
  render() {
    if(!this.props.records.length) return (<Message type="noData" />);
    let header = ['Inner-Product Extractor', 'Inner-Product Extractor (finite field 5)'];
    let extractions = this.props.records.map(record => record.extractions);
    let rows = extractions.map(extraction => Object.keys(extraction).map(k => extraction[k] ));
    return (<Table header={header} rows={rows} indexed />);
  }
};

export default Extractions;
