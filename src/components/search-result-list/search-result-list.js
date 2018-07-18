import React from 'react';
import PropTypes from 'prop-types';

export default class RedditDetail extends React.Component {
  render() {
    return (
      this.props.reddit.data.children.data.title
        ? <div className="reddit-detail">
            <h2>{ this.props.reddit.data.children.data.title }</h2>
                <img src={ this.props.reddit.data.children.data.thumbnail }/>
          </div>
        : null
    );
  }
}

RedditDetail.propTypes = {
  reddit: PropTypes.object,
};
