import React, { Component } from 'react';


class SearchBar extends Component{ 
    state={
        term :'Search here'
    }
    onInputChange = (e) =>{
        this.setState({term:e.target.value})
    }
    onSubmit = (e)=>{
        e.preventDefault()
       this.props.onSubmit(this.state.term)
    }
    render(){
        return(
            <div className='search-bar ui segment'>
                <form className='ui form' onSubmit={this.onSubmit}>
                    <div className='feild'>
                        <label>Search Video</label>
                        <input type='text' placeholder={this.state.term}  onChange={this.onInputChange} />
                    </div>
                </form>

            </div>
        )
    }
}

export default SearchBar