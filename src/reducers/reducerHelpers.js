const success = (state, action, key) => ({ ...state, [key]: action.payload, loading: false });
const pending = (state) => ({ ...state, loading: true });
const error = (state, action) => ({ ...state, loading: false, error: action.payload });

export const thoughtActions = {
  GET_STARRED_REPOS: (state, action) => success(state, action, 'projects'),
  GET_STARRED_REPOS_PENDING: (state) => pending(state),
  GET_STARRED_REPOS_ERROR: (state, action) => error(state, action),
};
