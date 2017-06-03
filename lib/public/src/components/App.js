import React, { Component } from 'react';

import RecorderContainer from '../containers/RecorderContainer';
import RecordsContainer from '../containers/RecordsContainer';
import ExtractionsContainer from '../containers/ExtractionsContainer';
import ScrollableContainer from '../containers/utils/ScrollableContainer';
import Columnise from './utils/Columnise';

class App extends Component {

  render() {
    return (
      <div>
        <h1>Randomness website</h1>
        <h3>Record controls</h3>
        <RecorderContainer />
        <Columnise ratio="8:4">
          <section>
            <h3>Media Logs</h3>
            <ScrollableContainer x y height="150px" autoScroll="records">
              <RecordsContainer />
            </ScrollableContainer>
          </section>

          <section>
            <h3>Extractions Logs</h3>
            <ScrollableContainer x y height="150px" autoScroll="records">
              <ExtractionsContainer />
            </ScrollableContainer>
          </section>
        </Columnise>
      </div>
    )
  }
}

export default App;
