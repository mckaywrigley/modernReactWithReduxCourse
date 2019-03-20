import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
    return (
        <div className="videoList ui relaxed divided list">
            {
                videos.map(video => {
                    return (
                        <VideoItem 
                            key={video.id.videoId}
                            video={video}
                            onVideoSelect={onVideoSelect}
                        />
                    )
                })
            }
        </div>
    );
};

export default VideoList;