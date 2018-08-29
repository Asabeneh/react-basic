import _ from 'lodash';
import React,{Component} from 'react';
import './style.css';
import Header from './components/Header'
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
import './App.css';
import YTSearch from 'youtube-api-search';
const API_KEY = 'AIzaSyCX3p-HtatkAgLy4dL9bgvRbF1w_ZQZ0Go';


class App extends React.Component{
    constructor (props) {
        super(props);
        this.state = {
            videos:[],
            selectedVideo:null
        };

       
    }
    componentDidMount(){
        this.videoSearch('food')
    }

    videoSearch = (term) => {
        YTSearch(
            {key:API_KEY,term:term},
            (videos) => {this.setState({videos:videos,selectedVideo:videos[0]})
        })
    }

    
    render () {
        const videoSearch =_.debounce((term) => {this.videoSearch(term)},300)
     console.log("videos",this.state.videos)
        return <div>
        <Header />
        <SearchBar onSearchTermChange = {videoSearch}/>
        <VideoDetail video = {this.state.selectedVideo} />
        <VideoList
        onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
        videos = {this.state.videos}  />
    </div>

    }
   
}

export default  App;



