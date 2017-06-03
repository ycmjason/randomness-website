import { connect } from 'react-redux';

import TestResult from '../components/TestResult';

const mapStateToProps = (state, ownProps) => ({
  bits: state.records.reduce((bs, record) => bs + record.extractions[ownProps.extractor], ''),
  results: state.testResults[ownProps.extractor],
});

export default connect(mapStateToProps)(TestResult);
