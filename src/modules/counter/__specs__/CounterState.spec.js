/*eslint-disable max-nested-callbacks, no-unused-expressions*/

import {Effects} from 'redux-loop';
import {initialState, dispatch} from '../../../../test/state';
import * as CounterStateActions from '../CounterState';

describe('CounterState', () => {

  // Example of how to test multiple dispatches in series
  describe('increment', () => {
    const getValue = (state) => state.counter.get('value');

    it('should increment the value property by one', () => {
      const secondState = dispatch(initialState, CounterStateActions.increment());
      expect(getValue(secondState)).toBe(getValue(initialState) + 1);

      const thirdState = dispatch(secondState, CounterStateActions.increment());
      expect(getValue(thirdState)).toBe(getValue(secondState) + 1);
    });
  });

  describe('reset', () => {
    it('should reset the counter state to initial value', () => {
      // create an incremented state to test against
      const modifiedState = dispatch(initialState, CounterStateActions.increment());
      expect(modifiedState.counter).not.toBe(initialState.counter);

      // reset to original and verify it === initial state
      const resetState = dispatch(modifiedState, CounterStateActions.reset());
      expect(resetState.counter).toBe(initialState.counter);
    });
  });

  // Example of how to test side effects returned from reducers
  describe('random', () => {
    const nextState = dispatch(initialState, CounterStateActions.random());

    it('should update loading bit', () => {
      expect(nextState.counter.get('loading')).toBe(true);
    });
  });
});
