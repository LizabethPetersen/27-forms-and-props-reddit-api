import superagent from 'superagent';

const fetchData = (url) => {
  return superagent.get(url)
    .then((result) => {
      console.log(result.body, 'RESULT.BODY');
      return result.body;
    })
    .catch(console.error);
};

fetchData();
