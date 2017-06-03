import { connect } from 'react-redux';

import TestSuit from 'nist-randomness-test-suite';

import { publishTest } from '../actions';

import TestButton from '../components/TestButton';

const testSuit = new TestSuit(0.01);

const mapStateToProps = (state, ownProps) => ({
  bits: state.records.reduce((bs, record) => bs + record.extractions[ownProps.extractor], ''),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  runTest: (bits) => {
    let result = {};
    TestSuit.testNames.forEach(testName => {
      result[testName] = testSuit[testName](bits);
    });
    return result;
  },
  publishTest: (result) => {
    dispatch(publishTest(ownProps.extractor, result));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TestButton);
