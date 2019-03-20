import React from 'react';
import { connect } from 'react-redux';

class SongList extends React.Component {
    render() {
        return (
            <div className="songList">
                <h2>Song List</h2>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        songs: state.songs
    };
}

export default connect(mapStateToProps)(SongList);