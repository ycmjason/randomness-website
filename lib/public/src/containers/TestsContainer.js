import { connect } from 'react-redux';

import Tests from '../components/Tests';

const mapStateToProps = (state, ownProps) => ({
  bits: state.records.reduce((bs, record) => bs + record.extractions[ownProps.extractor], ''),
});

export default connect(mapStateToProps)(Tests)
