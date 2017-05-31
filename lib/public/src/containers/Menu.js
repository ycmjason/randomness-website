import React, { Component } from 'react'
import { connect } from 'react-redux'

import MenuItem from '../components/MenuItem';

import { changeExtractor } from '../actions';

const extractor_names = ["Inner-Product Extractor"];
const mapDispatchToProps = (dispatch) => ({
  extractors: () => {
    return extractor_names.map(name => ({
      name,
      select: () => { dispatch(changeExtractor(name)) },
    }));
  },
});

export default connect(null, mapDispatchToProps)(class extends Component{
  render(){ 
    var menu_items = this.props.extractors().map((ext, i) => (<MenuItem key={i} onClick={ext.select}>{ext.name}</MenuItem>));
    return (
      <div>
        {menu_items}   
      </div>
    )
  };
});
