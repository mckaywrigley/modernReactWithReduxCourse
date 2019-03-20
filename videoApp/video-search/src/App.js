import React, { Component } from 'react';
import youtube from './apis/youtube';
import SearchBar from './Components/SearchBar';
import VideoList from './Components/VideoList';
import VideoDetail from './Components/VideoDetail';

class App extends Component {
  constructor() {
    super();
    this.state = {
      videos: [],
      selectedVideo: null
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

  onVideoSelect = video => {
    this.setState({
      selectedVideo: video
    });
  }

  render() {
    return (
      <div className="app ui container">
        <SearchBar 
          onFormSubmit={this.onTermSubmit}
        />
        <VideoDetail 
          video={this.state.selectedVideo}
        />
        <VideoList 
          videos={this.state.videos}
          onVideoSelect={this.onVideoSelect}
        />
      </div>
    );
  };
};

export default App;
