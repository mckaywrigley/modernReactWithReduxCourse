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

  componentDidMount() {
    this.onTermSubmit('planet earth');
  }

  onTermSubmit = async term => {
    const res = await youtube.get('/search', {
      params: {
        q: term
      }
    });

    this.setState({ 
      videos: res.data.items,
      selectedVideo: res.data.items[0] 
    })
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
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail 
                video={this.state.selectedVideo}
              />
            </div>
            <div className="five wide column">
              <VideoList 
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  };
};

export default App;
