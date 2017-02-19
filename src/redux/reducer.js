import {combineReducers} from 'redux';

import navigationStateReducer from '../modules/navigation/NavigationState';
import counterStateReducer from '../modules/counter/CounterState';
import sessionStateReducer, {RESET_STATE} from '../modules/session/SessionState';

export default combineReducers({
  // @NOTE: By convention, the navigation state must live in a subtree called
  //`navigationState`
  navigationState: navigationStateReducer,
  session: sessionStateReducer,

  counter: counterStateReducer,
});
