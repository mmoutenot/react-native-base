import {connect} from 'react-redux';
import AppView from './AppView';

export default connect(
  ({session}) => ({
    isReady: session.get('isReady')
  })
)(AppView);
