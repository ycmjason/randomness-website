import React, { Component } from 'react';

import RecorderContainer from '../containers/RecorderContainer';
import RecordsContainer from '../containers/RecordsContainer';
import ScrollableContainer from '../containers/utils/ScrollableContainer';

class App extends Component {

  render() {
    return (
      <div>
        <h1>Randomness website</h1>
        <RecorderContainer />
        <ScrollableContainer y height="200px" autoScroll="records">
          <RecordsContainer />
        </ScrollableContainer>
      </div>
    )
  }
}

export default App;
