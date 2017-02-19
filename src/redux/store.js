import {applyMiddleware, createStore, compose} from 'redux';

import saga from './saga';
import middleware, {runSaga} from './middleware';
import reducer from './reducer';


const createStoreWithMiddleware = compose(
  applyMiddleware(...middleware),
)(createStore);

// create the store
const store = createStoreWithMiddleware(reducer);

runSaga(saga);

export default store;
