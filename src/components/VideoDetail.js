import React from 'react';

const VideoDetail = ({ video }) => {
    
    return !video ? <div></div> :
        <div className="card col-7 ml-3 align-self-start">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={`https://www.youtube.com/embed/` + video.id.videoId} title={video.snippet.title} allowFullScreen></iframe>
            </div>
            <div className="card-body">
                <h5 className="card-title">{video.snippet.title}</h5>
                <p>{video.snippet.description}</p>
            </div>

        </div>;
}

export default VideoDetail