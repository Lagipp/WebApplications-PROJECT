import React from 'react'
import { Link } from 'react-router-dom'


/*  after mapping all posts, setting each one a link
 *  to a page where, after clicking the link, only 
 *  the single post and its comments are visible      */


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
