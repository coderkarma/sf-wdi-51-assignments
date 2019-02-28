import React, { Component } from 'react';
import Search from './Search';
import Result from './Result';

import axios from 'axios';

class SearchContainer extends Component {
  state = {
    query: '',
    gifs: []
  };

  componentDidMount() {
    this.search();
  }

  search = () => {
    axios
      .get(
        'http://api.giphy.com/v1/gifs/trending?api_key=c82diwDEqDrm7rTiFQpXKdpBVKBb0cXH'
      )
      .then(response => {
        console.log('response', response);
        this.setState({
          gifs: response.data.data
        });
      })
      .then(error => console.log('error', error));
  };

  render() {
    let gifs = this.state.gifs.map((gif, index) => {
      let images = gif.images.downsized;
      let title = gif.title;
      return (
        // <div>
        //   <p>{images}</p>
        //   <p>{title}</p>
        // </div>
        {gifs}
      );
    });
    // console.log(gifs)
    return (
      <div>
        <Search />
        <Result gif={this.state.gifs} />
      </div>
    );
  }
}

export default SearchContainer;
