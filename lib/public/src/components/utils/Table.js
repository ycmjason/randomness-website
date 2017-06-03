import React, { Component } from 'react';

class Table extends Component {
  render() {
    let ths = this.props.header.map((h, i) => (<th key={i}>{h}</th>));
    let tdss = this.props.rows.map((row) => {
      return row.map((r, j) => (<td key={j}>{r}</td>))
    });

    if(this.props.indexed){
      ths = [(<th key={-1}>#</th>)].concat(ths);
      tdss = tdss.map((tds, i) => [(<td key={-1}>{i}</td>)].concat(tds));
    };

    let trs = tdss.map((tds, i) => (<tr key={i}>{tds}</tr>));

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
