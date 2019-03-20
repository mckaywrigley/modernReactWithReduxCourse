import { combinedReducers } from 'redux';

// Reducer
const songsReducer = () => {
    return [
        { title: 'Stargazing', duration: '4:27' },
        { title: 'Outside', duration: '3:11' },
        { title: '90210', duration: '5:03'}
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
      return action.payload;
  }

  return selectedSong;
};

combinedReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})