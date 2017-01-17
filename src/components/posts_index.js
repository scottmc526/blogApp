import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';

class PostsIndex extends Component {
  componentWillMount() {
    console.log(this.props.fetchPosts());
  }

  render() {
    return (
      <div>list of posts</div>
    )
  }
}

export default connect(null, { fetchPosts: fetchPosts })(PostsIndex);
