import React, { Component } from 'react';

class Search extends Component {
  render() {
    return (
      <form onSubmit={this.props.search}>
        <label>
          Search
          <input
            onChange={this.props.onSearch}
            type="text"
            placeholder="Find cool giphy"
          />
        </label>
        <input type="submit" />
      </form>
    );
  }
}

export default Search;
