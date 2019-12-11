export const fetchStarredRepos = async() => {
  return fetch('https://api.github.com/users/UncleJerry23/starred')
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'unable to post new game';
      return json;
    })
    .then(starred => {
      return Promise.all(starred.map(i => {
        return {
          url: i.html_url,
          description: i.description,
          name: i.name,
          id: i.id,
          deployed: i.deployments_url
        };
      }));
    });
};
