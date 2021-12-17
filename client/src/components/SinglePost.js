import React from 'react'
import { Link } from 'react-router-dom'


const SinglePost = ({post}) => {
    return (
        <article className="SinglePost">
            <p> post no. {post.postID}:
            <Link to={`/post/${post.postID}`}>
                <pre>{post.postbody}</pre> 
            </Link>
            </p>
        </article>
    )
}

export default SinglePost
