import React, { Component } from 'react';
import youtube from './apis/youtube';
import SearchBar from './Components/SearchBar';

class App extends Component {

  onTermSubmit = async term => {
    const res = await youtube.get('/search', {
      params: {
        q: term
      }
    });
    console.log(res.data);
  };

  render() {
    return (
      <div className="app ui container">
        <SearchBar 
          onFormSubmit={this.onTermSubmit}
        />
      </div>
    );
  };
};

export default App;
