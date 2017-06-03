import React, { Component } from 'react';

import Table from './utils/Table';
import Message from './utils/Message';

class Records extends Component {
  render() {
    if(!this.props.records.length) return (<Message type="noData" />);
    var records = this.props.records.map(record => ({
      video: record.video.substring(5000, 5030) + `... (${record.video.length} in total)`,
      audio: record.audio.substring(5000, 5030) + `... (${record.audio.length} in total)`,
    }));
    let header = ['Video', 'Audio'];
    let rows = records.map(record => Object.keys(record).map(k => record[k] ));
    return (
      <Table header={header} rows={rows} />
    );
  }
};

export default Records;
