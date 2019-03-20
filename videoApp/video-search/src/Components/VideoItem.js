import React from 'react';

const VideoItem = ({ video }) => {
    return (
        <div className="videoItem">
            <h2>{video.snippet.title}</h2>
            <img 
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.description}
            />
        </div>
    );
};

export default VideoItem;