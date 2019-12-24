import React from 'react'

import './search-box.styles.scss'

export const SearchBox = ({placeholder, handleChange}) => {
    return(
        <div className="container">
            <input 
                type='search' 
                placeholder= {placeholder}
                onChange={handleChange}/>
          <div className="search"></div>
        </div>
    );
}