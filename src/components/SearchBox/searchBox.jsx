import React from 'react';
import './searchBox.css';
const SearchBox = ({ onInputChange }) => {
    return (
        <div className="Search-Container">
            <input
                onChange={(event) => onInputChange(event.target.value)}
                placeholder="type keyword"
                className="search-input"
            ></input>
        </div>
    );
};

export default SearchBox;
