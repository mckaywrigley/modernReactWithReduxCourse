import React, { Component } from 'react';
import SearchBar from './Components/SearchBar';

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>Video Search App</h1>
        <SearchBar />
      </div>
    );
  }
}

export default App;
