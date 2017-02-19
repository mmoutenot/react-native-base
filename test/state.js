// application root reducer
import reducer from '../src/redux/reducer';

// Initial application state
export const initialState = reducer({}, {});

// Run an action through all reducers
export const dispatch = (state, action) => reducer(state, action);
