import React, { Component } from 'react';
import Search from './Search';
import Result from './Result';

import axios from 'axios';

class SearchContainer extends Component {
  state = {
    query: '',
    gifs: []
  };

  onSearch = e => {
    this.setState({
      query: e.target.value
    });
  };

  search = e => {
    e.preventDefault();
    axios
      .get(
        `https://api.giphy.com/v1/gifs/search?api_key=c82diwDEqDrm7rTiFQpXKdpBVKBb0cXH&q=${
          this.state.query
        }&limit=25&offset=0&rating=G&lang=en`
      )
      .then(response => {
        // console.log('response', response);
        this.setState({
          gifs: response.data.data
        });
        console.log('after assigning axios to state', this.state.gifs);
      })
      .then(error => console.log('error', error));
  };

  render() {
    let gifs = this.state.gifs.map((gif, index) => {
      let images = gif.images.downsized.url;
      let title = gif.title;
      return (
        <div>
          <img src={images} alt="gif" />
          <p>{title}</p>
        </div>
      );
    });
    // console.log(gifs)
    return (
      <div>
        <Search onSearch={this.onSearch} search={this.search} />
        <Result gif={this.state.gifs} />
        {gifs}
      </div>
    );
  }
}

export default SearchContainer;
