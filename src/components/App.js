import React from 'react';
import SearchBar from './SearchBar';

import youtube from './../apis/youtube';
import VideoList from './VideoList';
// import VideoDetail from './VideoDetail'

class App extends React.Component {
    state = {
        videos: [],
        selectedVideo: null

    }

    componentDidMount(){
        this.onSubmit('liverpool fc')
    }


    onSubmit = async term => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        })

        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        })
    }

    onVideoSelect = video => {
        this.setState({
            selectedVideo: video
        })
    }

    render() {
        return (
            <div>
                <SearchBar
                    onSubmit={this.onSubmit}
                />
                <VideoList
                    onVideoSelect={this.onVideoSelect}
                    videos={this.state.videos}
                    video = {this.state.selectedVideo}
                />
            </div>
        )
    }
}

export default App