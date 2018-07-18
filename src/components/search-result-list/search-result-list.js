import React from 'react';
import PropTypes from 'prop-types';

export default class RedditDetail extends React.Component {
  render() {
    return (
      // title on reddit is accessed via: data.children.data.title—is all this included in the path here?
      this.props.reddit.title
        ? <div className="reddit-detail">
            <h2>{ this.props.reddit.title }</h2>
                <img src={ this.props.reddit.thumbnail }/>
          </div>
        : null
    );
  }
}

RedditDetail.propTypes = {
  reddit: PropTypes.object,
};
