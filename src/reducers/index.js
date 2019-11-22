export const setSelectedTab = 'SET_SELECTED_TAB';
import { thoughtActions } from './reducerHelpers';

const initialState = {
  projects: [],
  err: {},
  loading: false
};

export default function reducer(state = initialState, action) {
  const transformer = thoughtActions[action.type] || (() => state);
  return transformer(state, action);
}
