import React, { Component } from 'react';

class Table extends Component {
  render() {
    let ths = this.props.header.map((h, i) => (<th key={i}>{h}</th>));
    let trs = this.props.rows.map((row, i) => {
      let tds = row.map((r, j) => (<td key={j}>{r}</td>))
      return (<tr key={i}>{tds}</tr>);
    });

    return (
      <table className="u-full-width">
        <thead>
          <tr>
            {ths}
          </tr>
        </thead>
        <tbody>
          {trs}
        </tbody>
      </table>
    );
  }
};

export default Table;
