import React, {useState} from 'react'
import './Search.css';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import {Button} from '@material-ui/core';

function Search() {
    const [input, setInput] = useState('')

    const search = e => {
        e.preventDefault();
        console.log(input)
    }

    return (
        <form className='search'>
            <div className='search_input'>
                <SearchIcon className='search_inputIcon'/>
                <input value={input} onChange={e => setInput(e.target.value)}/>
                <MicIcon />
            </div>
            <div className='search_buttons'>
                <Button variant='outlined' type='submit' onClick={search}>Google Search</Button>
                <Button variant='outlined'>i'm Feeling Lucky</Button>
            </div>
        </form>
    )
}

export default Search
