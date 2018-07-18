import React from 'react';
import PropTypes from 'prop-types';

import './search-form.scss';

export default class RedditList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      limit: [
        {
          minLength: 1,
          maxLength: 100,
        },
      ],
    };
  }
  
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.searchMethod(this.state.search);
  }

  handleSearch = (event) => {
    const search = event.target.value;
    this.setState({ search });
  }

  handleLimits = (event) => {
    const limits = event.target.value;
    this.setState({ limits });
  }

  render() {
    return (
      <div className="reddit-list">
          <form>
            <input
             onChange={ this.handleSearch }
             placeholder="Search..."
             />
             <input
             onChange={ this.handleLimits }
             placeholder="# Items to Return..."
             />
             <button onSubmit={ this.handleSubmit }>Submit</button>
            {
              this.props.redditItems.map((reddit, index) => {
                return (
                    <div key={index}>
                      <div
                        className="item"
                        id={ reddit.url }
                        onClick={ this.props.loadList }
                        >
                        {reddit.title}
                        </div>
                    </div>
                );
              })
            }
          </form>
      </div>
    );
  }
}

RedditList.propTypes = {
  searchMethod: PropTypes.func,
  redditItems: PropTypes.array,
  loadList: PropTypes.func,
};
