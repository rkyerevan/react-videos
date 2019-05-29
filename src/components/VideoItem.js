import React from 'react';

const VideoItem = ({ video, onVideoSelect }) => {

    const textStyle = {
        fontSize: '100%',
        overflow: 'hideen',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis'
    }

    return (
        <React.Fragment>
            <div className="card mb-1" onClick={() => onVideoSelect(video)} style={{ maxWidth: '1240px', width: '100%' }}>
                <div className="row no-gutters">
                    <div className="col-md-4 p-2">
                        <img src={video.snippet.thumbnails.medium.url} className="card-img" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body p-0">
                            <h5 className="card-title pl-2 overflow-hidden p-2" style={textStyle}>{video.snippet.title}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>

        // <div>
        //     <img src={video.snippet.thumbnails.medium.url} />
        //     {video.snippet.title}
        // </div>
    )
}

export default VideoItem;