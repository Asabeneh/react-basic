import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './style.css'
// import App from './App';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail'
import registerServiceWorker from './registerServiceWorker';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyCX3p-HtatkAgLy4dL9bgvRbF1w_ZQZ0Go';






class App extends React.Component{
    constructor (props) {
        super(props);
        this.state = {
            videos:[],
            selectedVideo:null
        };
        YTSearch({key:API_KEY,term:'react'},(videos) => {this.setState({videos:videos,selectedVideo:videos[0]})
        })
    }
    
    render () {
     console.log("videos",this.state.videos)
        return <div>
        <SearchBar />
        <VideoDetail video = {this.state.selectedVideo} />
        <VideoList
        onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
        videos = {this.state.videos}  />
    </div>

    }
   
}

ReactDOM.render(

    <App />
, document.getElementById('root'));
registerServiceWorker();
