import { connect } from 'react-redux';

import TestSuite from 'nist-randomness-test-suite';

import { publishTest } from '../actions';

import TestButton from '../components/TestButton';

const testSuite = new TestSuite(0.01);

const mapStateToProps = (state, ownProps) => ({
  bits: state.records.reduce((bs, record) => bs + record.extractions[ownProps.extractor], ''),
  disabled: state.recorder.active,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  runTest: (bits) => {
    let result = {};
    TestSuite.testNames.forEach(testName => {
      result[testName] = testSuite[testName](bits);
    });
    return result;
  },
  publishTest: (result) => {
    dispatch(publishTest(ownProps.extractor, result));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TestButton);
