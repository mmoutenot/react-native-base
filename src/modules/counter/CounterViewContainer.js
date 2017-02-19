import {connect} from 'react-redux';
import CounterView from './CounterView';

export default connect(
  ({counter}) => ({
    counter: counter.get('value'),
    loading: counter.get('loading')
  })
)(CounterView);
