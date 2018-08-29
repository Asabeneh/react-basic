import React, {Component} from 'react';
import VideoListItem from './VideoListItem';
import '../style.css'

const VideoList = (props) => {
    const videoItems = props.videos.map(video => {
        return <VideoListItem
        onVideoSelect = {props.onVideoSelect}
        key={video.id.videoId}
        video = {video}/>
    });
    return (
        <ul className="col-md-4 list-group">
        {videoItems}
        </ul>
    )
}

export default VideoList;