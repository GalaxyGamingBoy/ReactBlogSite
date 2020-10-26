import React from "react"

import BlogTitle from "./blog_components/BlogTitle"
import BlogDesc from "./blog_components/BlogDesc"
import BlogStats from "./blog_components/BlogStats"


function Blog(props){
    return(
        <div style={{backgroundImage: "url(https://www.amba.agency/wp-content/uploads/2020/04/AMBA-Communications-blue-blog-background-800x470.jpg)",
        backgroundColor: "#cccccc"}}>
            <BlogTitle blogTitle={props.title} />
            <BlogStats author={props.author} date={props.date} />
            <BlogDesc desc={props.desc} />
        </div>
    )
}

export default Blog