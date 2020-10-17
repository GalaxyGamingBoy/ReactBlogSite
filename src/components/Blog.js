import React from "react"

import BlogTitle from "./blog_components/BlogTitle"

function Blog(){
    return(
        <div style={{backgroundImage: "url(https://www.amba.agency/wp-content/uploads/2020/04/AMBA-Communications-blue-blog-background-800x470.jpg)",
        backgroundColor: "#cccccc"}}>
            <BlogTitle blogTitle="Test Blog" />
        </div>
    )
}

export default Blog