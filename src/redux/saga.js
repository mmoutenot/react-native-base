import {counterSaga} from '../modules/counter/CounterState';
export default function* combinedSaga () {
  yield [
    counterSaga(),
  ]
}
