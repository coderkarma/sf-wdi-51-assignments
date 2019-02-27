import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Post from './App';
import * as serviceWorker from './serviceWorker';

const post = {
  title: 'Code',
  author: 'Karma',
  body: 'Hello',
  comments: ['firstComment', 'secondComent', 'ThirdOne']
};

//  Defining the props in Hello app
ReactDOM.render(<Post post={post} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
