import { connect } from 'react-redux';

import Extractions from '../components/Extractions';

const mapStateToProps = (state, ownProps) => ({
  records: state.records
});

export default connect(mapStateToProps)(Extractions)
