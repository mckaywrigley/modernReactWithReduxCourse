import React, { Component } from 'react';
import youtube from './apis/youtube';
import SearchBar from './Components/SearchBar';
import VideoList from './Components/VideoList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      videos: []
    };
  };

  onTermSubmit = async term => {
    const res = await youtube.get('/search', {
      params: {
        q: term
      }
    });
    this.setState({ videos: res.data.items })
  };

  render() {
    return (
      <div className="app ui container">
        <SearchBar 
          onFormSubmit={this.onTermSubmit}
        />
        <VideoList 
          videos={this.state.videos}
        />
      </div>
    );
  };
};

export default App;
