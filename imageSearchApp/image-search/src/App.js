import React, { Component } from 'react';
import unsplash from './api/unsplash';
import SearchBar from './Components/SearchBar';


class App extends Component {
  constructor() {
    super();
    this.state = {
      images: []
    }
  }

  onSearchSubmit = async term => {
    const res = await unsplash
      .get(`/search/photos`, {
        params: { query: term },
      });
    this.setState({ images: res.data.results });
  };

  render() {
    return (
      <div className="app ui container">
        <SearchBar 
          onSubmit={this.onSearchSubmit}
        />
        Found: {this.state.images.length} images.
      </div>
    );
  }
}

export default App;
