import React, { Component } from 'react';

const buttonStyle = {
  borderRadius: '0',
  border: 'none',
  marginBottom: '0',
};

const itemSelectedStyle = Object.assign({}, buttonStyle, {
  color: '#FFF',
  backgroundColor: '#33C3F0',
  borderColor: '#33C3F0',
});

const itemStyle = buttonStyle;

const childrenStyle = {
  border: '1px solid black',
  display: 'none'
};

const childrenSelectedStyle = Object.assign({}, childrenStyle, {
  display: 'block',
});

class Tabs extends Component {
  constructor(props){
    super(props);
    this.state = { show: 0 };
  }

  selectTab(i) {
    this.setState({show: i});
  }

  render() {
    let { titles, children } = this.props;
    if(titles.length !== children.length) throw "Tabs: titles length doesn't match children length";

    let titleButtons = titles.map((t, i) => (
      <button key={i}
        style={(this.state.show === i)? itemSelectedStyle: itemStyle}
        onClick={() => this.selectTab(i)}>{t}
      </button>
    ));
    children = children.map((c, i) => (
      <section key={i} style={{display: (this.state.show === i? 'block': 'none')}}>{c}</section>
    ));
    return (
      <div style={{border: '1px solid #bbb'}}>
        <section style={{borderBottom: '1px solid #bbb', marginBottom: '1rem'}}>
          {titleButtons}
        </section>

        <section style={{padding: '0.01em 16px',}}>
          {children}
        </section>
      </div>
    );
  }
};

export default Tabs;
