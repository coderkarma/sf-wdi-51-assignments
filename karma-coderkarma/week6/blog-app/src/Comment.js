import React, { Component } from 'react';

class Comment extends Component {
  render() {
    return <p> {this.props.message} </p>;
  }
}

export default Comment;