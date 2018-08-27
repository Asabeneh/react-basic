import React, {Component} from 'react';
import VideoListItem from './VideoListItem';
import '../style.css'

const VideoList = (props) => {
    const videoItems = props.videos.map(video => {
        return <VideoListItem
        onVideoClick = {props.onVideoSelect}
        key={video.id.videoId}
        video = {video}/>
    });
    return (
        <ul className="col-md-4 list-group">
        <h1>{props.videos.length}</h1>
        {videoItems}
        </ul>
    )
}

export default VideoList;