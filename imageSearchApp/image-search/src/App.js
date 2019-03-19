import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from './Components/SearchBar';


class App extends Component {
  onSearchSubmit = term => {
    axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization: 'Client-ID 40bdaf803000b0cb28dcbc55ef89093104e9d29854971bb8be382053a0a79fe2'
    }
    });
  };

  render() {
    return (
      <div className="app ui container">
        <SearchBar 
          onSubmit={this.onSearchSubmit}
        />
      </div>
    );
  }
}

export default App;
