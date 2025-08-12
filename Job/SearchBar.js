import React, { useState } from 'react';
import './SearchBar.css'; // Import the CSS for the search bar

const SearchBar = () => {
    const [query, setQuery] = useState('');

    const handleChange = (e) => {
        setQuery(e.target.value);
    };

    return (
        <div className="search-bar-container">
            <div className="search-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#F55533" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 20.9999L16.65 16.6499" stroke="#F55533" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
            <input
                type="text"
                className="search-bar-input"
                placeholder="Search by: Job title or Position"
                value={query}
                onChange={handleChange}
            />
        </div>
    );
};

export default SearchBar;
