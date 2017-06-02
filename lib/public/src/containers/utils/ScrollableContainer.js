import { connect } from 'react-redux';

import Scrollable from '../../components/utils/Scrollable';

const mapStateToProps = (state, ownProps) => Object.assign({
  state: state[ownProps.autoScroll] || false
}, ownProps);

export default connect(mapStateToProps)(Scrollable)
