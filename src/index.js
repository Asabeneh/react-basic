import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './style.css'
import App from './App';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail'
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<App />, document.querySelector('.container'));
registerServiceWorker();
