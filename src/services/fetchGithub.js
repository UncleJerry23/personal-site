import starred from '../../data/starred.json';

//https://api.github.com/users/UncleJerry23/starred
export const fetchStarredRepos = async() => {
  return Promise.all(starred.map(async(i) => {
    const depUrl = await fetchDeployedLink(i.deployments_url);
    const obj = {
      url: i.html_url,
      description: i.description,
      name: i.full_name,
      id: i.id,
      deployed: depUrl
    };
    return obj;
  }));
};


// fetch with passed url
// eslint-disable-next-line no-unused-vars
const fetchDeployedLink = (url) => {
  return Promise.resolve('https://pushpinlms.herokuapp.com/');
};
