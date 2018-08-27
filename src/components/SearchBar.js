import React,{Component} from 'react';
import '../style.css'

class SearchBar extends Component {
    constructor (props) {
        super(props);
        this.state = {
            term:''
        }
    }
    handleChange = (e) => {
        this.setState({
            term:e.target.value
        })

    }
    render(){
        return (<div className="search-bar">
            <h1>Length:{this.state.term.length}</h1>
            <input onChange = {this.handleChange} value = {this.state.term} placeholder="Search" />
            <p>{this.state.term}</p>
            </div>);
    }

}

export default SearchBar;