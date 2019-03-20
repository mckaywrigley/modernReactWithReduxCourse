import React from 'react';
import { selectSong } from './Actions';

import SongList from './Components//SongList';

const App = () => {
    return (
        <div>
            <h1>Song App</h1>
            <SongList />
        </div>
    );
};

export default App;