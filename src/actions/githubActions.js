import { createAction } from 'promise-middleware-redux';
import { fetchStarredRepos } from '../services/fetchGithub';

export const [
  getStarredRepos,
  GET_STARRED_REPOS,
  GET_STARRED_REPOS_PENDING,
  GET_STARRED_REPOS_ERROR
] = createAction('GET_STARRED_REPOS', fetchStarredRepos);
