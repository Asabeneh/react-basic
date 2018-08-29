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
        this.setState({term:e.target.value})
        this.props.onSearchTermChange(e.target.value);

    }
    render(){
        return (<div className="search-bar">
            <input 
            onChange = {this.handleChange}
            value = {this.state.term} 
            placeholder="Search" />
    
            </div>);
    }

}

export default SearchBar;