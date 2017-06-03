import React, { Component } from 'react';

import RecorderContainer from '../containers/RecorderContainer';
import RecordsContainer from '../containers/RecordsContainer';
import TestsContainer from '../containers/TestsContainer';
import ExtractionsContainer from '../containers/ExtractionsContainer';
import ScrollableContainer from '../containers/utils/ScrollableContainer';
import Columnise from './utils/Columnise';

class App extends Component {

  render() {
    return (
      <div>
        <h1>Randomness website</h1>

        <section>
          <h3>Record controls</h3>
          <RecorderContainer />
        </section>

        <section>
          <h3>Extractions Logs</h3>
          <ScrollableContainer x y height="150px" autoScroll="records">
            <ExtractionsContainer />
          </ScrollableContainer>
        </section>

        <section>
          <h3>Media Logs</h3>
          <ScrollableContainer x y height="150px" autoScroll="records">
            <RecordsContainer />
          </ScrollableContainer>
        </section>

        <section>
          <h3>Tests</h3>
          <h5>Inner-Product Extractor</h5>
          <TestsContainer extractor="innerProduct" />
          <h5>Inner-Product Extractor (finite field 5)</h5>
          <TestsContainer extractor="innerProduct5" />
        </section>

      </div>
    )
  }
}

export default App;
