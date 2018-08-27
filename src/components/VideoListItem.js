import React, {Component} from 'react';
import '../style.css'

const VideoListItem = ({video, onVideoSelect}) => {

    const imgUrl = video.snippet.thumbnails.default.url;


    console.log(video)
    return <li className="list-group-item" onClick = {() => onVideoSelect(video)}>
    <div className="video-list media">
        <div className="media-left">
           <img className="media-object" src = {imgUrl} />
        </div>

        <div className ="media-body">
            <div className="media-heading">
            {video.snippet.title}
            </div>
        </div>
    </div>
   
    
    
    </li>
}

export default VideoListItem;