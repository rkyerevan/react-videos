import React from 'react';
import VideoItem from './VideoItem';
import VideoDetail from './VideoDetail'

const VideoList = ({ videos, onVideoSelect, video}) => {
    const renderedList = videos.map(video => {
        console.log(video)
        return <VideoItem
            key = {video.id.channelId}
            onVideoSelect= {onVideoSelect}
            video = {video}
        />
    })
    return (
        <div className="d-flex">
             <VideoDetail
                video = {video}
            />
        <div className="d-flex col-5 flex-column ml-auto"> 
            {renderedList}
        </div>
        </div>

    )
}

export default VideoList;