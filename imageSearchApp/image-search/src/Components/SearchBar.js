import React, { Component } from 'react';

class SearchBar extends Component {
    constructor() {
        super();
        this.state = {
            term: ''
        }
    }

    onInputChange = e => {
        this.setState({ 
            term: e.target.value 
        });
        console.log(e.target.value);
    }

    render() {
        return (
            <div className="searchBar ui segment">
                <form className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text" onChange={this.onInputChange}/>
                    </div>
                </form>
            </div>
        );
    };
};

export default SearchBar;