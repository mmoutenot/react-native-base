import {Map} from 'immutable';
import {takeEvery, takeLatest} from 'redux-saga'
import {call, put, select} from 'redux-saga/effects'

import {generateRandomNumber} from '../../services/randomNumberService';


// Initial state
const initialState = Map({
  value: 0,
  loading: false
});

// Actions
const INCREMENT = 'CounterState/INCREMENT';
const RESET = 'CounterState/RESET';
const RANDOM_REQUEST = 'CounterState/RANDOM_REQUEST';
const RANDOM_RESPONSE = 'CounterState/RANDOM_RESPONSE';

// Action creators
export function increment() {
  return {type: INCREMENT};
}

export function reset() {
  return {type: RESET};
}

export function random() {
  return {
    type: RANDOM_REQUEST
  };
}

export function* onRequestRandom() {
  debugger;
  const randomNumber = yield call(generateRandomNumber);
  yield put({
    type: RANDOM_RESPONSE,
    payload: randomNumber,
  });
}

// Reducer
export default function counterStateReducer(state = initialState, action = {}) {
  switch (action.type) {
    case INCREMENT:
      return state.update('value', value => value + 1);

    case RESET:
      return initialState;

    case RANDOM_REQUEST:
      return state.set('loading', true);

    case RANDOM_RESPONSE:
      return state
        .set('loading', false)
        .set('value', action.payload);

    default:
      return state;
  }
}

// Saga
export function* counterSaga () {
  yield [
    takeLatest(RANDOM_REQUEST, onRequestRandom),
  ]
}
