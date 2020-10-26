import React from 'react';

function BlogStats(props){
    return(
    <h4 id="stats">By: {props.author}, {props.date}</h4>
    )
}

export default BlogStats