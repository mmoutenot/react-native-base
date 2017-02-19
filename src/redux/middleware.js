import createSagaMiddleware from 'redux-saga'

import loggerMiddleware from './middleware/loggerMiddleware';


const sagaMiddleware = createSagaMiddleware();

// define store middlewares as an array
export default [
  sagaMiddleware,
  loggerMiddleware,
];

export function runSaga (saga) {
  sagaMiddleware.run(saga);
}
