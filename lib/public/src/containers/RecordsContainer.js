import { connect } from 'react-redux';

import Records from '../components/Records';

const mapStateToProps = (state, ownProps) => ({
  records: state.records
});

export default connect(mapStateToProps)(Records)
