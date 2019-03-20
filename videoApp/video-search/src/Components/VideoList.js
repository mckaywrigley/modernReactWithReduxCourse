import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos }) => {
    return (
        <div className="videoList">
            {
                videos.map(video => {
                    console.log(video);
                    return (
                        <VideoItem 
                            key={video.id.videoId}
                            video={video}
                        />
                    )
                })
            }
        </div>
    );
};

export default VideoList;