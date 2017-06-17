import React, { Component } from 'react';

import RecorderContainer from '../containers/RecorderContainer';
import RecordsContainer from '../containers/RecordsContainer';
import TestContainer from '../containers/TestContainer';
import ExtractionsContainer from '../containers/ExtractionsContainer';
import ScrollableContainer from '../containers/utils/ScrollableContainer';
import Tabs from './utils/Tabs';

class App extends Component {

  render() {
    return (
      <div>
        <h1>Randomness website</h1>

        <section>
          <h3>Record controls</h3>
          <RecorderContainer />
        </section>

        <hr />

        <Tabs titles={['Logs', 'Tests']}>
          <section>
            <h5>Extractions Logs</h5>
            <ScrollableContainer x y height="150px" autoScroll="records">
              <ExtractionsContainer />
            </ScrollableContainer>

            <h5>Media Logs</h5>
            <ScrollableContainer x y height="150px" autoScroll="records">
              <RecordsContainer />
            </ScrollableContainer>
          </section>

          <section>
            <h5>Tests</h5>
            <h7>Inner-Product Extractor</h7>
            <TestContainer extractor="innerProduct" />
            <hr />
            <h7>Inner-Product Extractor (finite field 2^5)</h7>
            <TestContainer extractor="innerProduct2pow5" />
          </section>
        </Tabs>


      </div>
    )
  }
}

export default App;
