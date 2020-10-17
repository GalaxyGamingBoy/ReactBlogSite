import React from "react"

function BlogTitle(props){
    const styles = {
        fontFamily: "helvetica",
        textAlign: "center",
        fontSize: 35,
        textShadow: "1.5px 1.5px #000000",
        color: "#000000",
        textDecoration:"underline",
    }
    return(
    <h1 style={styles}>{props.blogTitle}</h1>
    )
}

export default BlogTitle