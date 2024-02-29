
import React from 'react';
import './style.css';

const SearchComponent = () => {
    return (
        <div className="main">
            <div className="search-container">
                <input type="text" placeholder="Search for a country" className="search-input" />
                <button className="search-button">Search</button>
            </div>
            {/* <div class="multiselect">
                <div class="select-box">
                    <select multiple>
                        <option value="option1">Option 1</option>   
                    </select>
                </div>
            </div> */}

<div class="filter-container">
  <input type="text" placeholder="Filter..." class="filter-input"></input>
</div>
        </div>
    );
};

export default SearchComponent;
