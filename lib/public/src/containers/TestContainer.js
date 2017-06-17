import { connect } from 'react-redux';

import Test from '../components/Test';

const mapStateToProps = (state, ownProps) => ({
  bits: state.records.reduce((bs, record) => bs + record.extractions[ownProps.extractor], ''),
});

export default connect(mapStateToProps)(Test)
