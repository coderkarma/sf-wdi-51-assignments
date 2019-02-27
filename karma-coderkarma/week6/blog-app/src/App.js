import React, { Component } from 'react';
import Comment from './Comment';
import './App.css';

class Post extends Component {
  render() {
    let comments = this.props.post.comments.map((comment, index) => {
      console.log(comment, index);
     return  <Comment message={comment} key={index} />;
    });

    return (
      <div className="App">
        {/*  accessing the property and value with the this .props.name */}
        <h1> Hello {this.props.post.title} </h1>
        <h2> {this.props.post.author} </h2>
        <h2> {this.props.post.body} </h2>

        <section>{comments}</section>
      </div>
    );
  }
}

export default Post;
