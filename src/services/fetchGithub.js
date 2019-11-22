import starred from '../../data/starred.json';

export const fetchStarredRepos = () => {
  return Promise.resolve(starred);
};
