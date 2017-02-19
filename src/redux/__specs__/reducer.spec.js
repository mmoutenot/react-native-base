/*eslint-disable max-nested-callbacks, no-unused-expressions*/

import {initialState, dispatch} from '../../../test/state';
import * as SessionState from '../../modules/session/SessionState';

describe('reducer', () => {
  describe('mainReducer', () => {
    it('resets state with RESET_STATE action', () => {
      // Use auth.isLoggedIn as an example. isReady is changed in the
      // SessionState reducer, so the entire store state is not reset.

      const newState = {...initialState, counter: initialState.counter.set('value', 9)};
      const resetStateAction = SessionState.resetSessionStateFromSnapshot(newState);

      const nextState = dispatch(newState, resetStateAction);

      expect(initialState.counter.get('value')).toBe(0);
      expect(nextState.counter.get('value')).toBe(9);

      expect(initialState.session.get('isReady')).toBe(false);
      expect(nextState.session.get('isReady')).toBe(true);
    });
  });
});
