import React, { Component } from 'react';


class SearchBar extends Component{ 
    state={
        term :'Search here'
    }
    onInputChange = (e) =>{
        this.setState({term:e.target.value})
    }
    render(){
        return(
            <div className='search-bar ui segment'>
                <form className='ui form'>
                    <div className='feild'>
                        <label>Search Video</label>
                        <input type='text'  value={this.state.term} onChange={this.onInputChange} />
                    </div>
                    <div>
                        {this.state.term}
                    </div>
                </form>

            </div>
        )
    }
}

export default SearchBar