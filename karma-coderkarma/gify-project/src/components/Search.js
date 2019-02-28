import React, { Component } from 'react';

class Search extends Component {
  render() {
    return (
      <div>
        <label>
          Search
          <input type="text"  placeholder="Find cool giphy"/>
        </label>
        <input onSubmit={this.search} type="submit" />
      </div>
    );
  }
}

export default Search;
