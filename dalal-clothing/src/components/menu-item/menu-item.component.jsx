import React from 'react';
import { withRouter } from 'react-router-dom'; 
// "withRouter" is a higher order component 
// A higher order component is basically a function 
// which takes a component as an argument
// and returns a modified component

import './menu-item.styles.scss'

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => ( 
    // Must use curly braces as title, imageUrl, size is a destructured element 
    // of props.
    // To use tik sign use curly braces.
    <div className = {`${size} menu-item` } 
        onClick={() => history.push(`${match.url}${linkUrl}`)}
        >

        <div style={{
            backgroundImage: `url(${imageUrl})`
        }}className="background-image" />

        <div className = "content">
            <h1 className = "title">{title.toUpperCase()}</h1>
            <span className = "subtitle">Shop Now</span>
        </div>

    </div>
);

export default withRouter(MenuItem); 
// The withRouter binding with MenuItem 
// will give us the access to the React-router-dom History props
