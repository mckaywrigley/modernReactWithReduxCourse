import React, { Component } from 'react';
import youtube from './apis/youtube';
import SearchBar from './Components/SearchBar';

class App extends Component {
  render() {
    return (
      <div className="app ui container">
        <SearchBar />
      </div>
    );
  }
}

export default App;
