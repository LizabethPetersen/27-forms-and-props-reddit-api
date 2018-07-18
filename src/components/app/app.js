import React from 'react';
import fetchData from '../../lib/utils';
import RedditList from '../search-form/search-form';
// import RedditDetail from '../search-result-detail/search-result-detail';

import './app.scss';

const redditApi = 'https://www.reddit.com/r';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reddit: {},
      redditList: false,
    };
  }

  load = (url) => {
    this.setState = ({ loading: true });
    return fetchData(url)
      .then((data) => {
        this.setState({ loading: false });
        return data;
      })
      .catch(console.error);
  }

  loadList = () => {
    return this.load(redditApi)
      .then((data) => {
        return data.results;
      })
      .catch(console.error);
  }

  redditSearch = (search) => {
    const url = `${redditApi}/${search}.json?limit=${limit}`;
    return this.load(url)
      .then((reddit) => {
        this.setState({ reddit });
      })
      .catch(console.error);
  }

  render() {
    return (
      <main className="container">
        <RedditList
          searchMethod={ console.log }
          reddit={ [{ title: 'My Title', url: 'Any Url' }] }
          loadList={ () => console.log('loaded') }
        />
      </main>
    );
  }
}
