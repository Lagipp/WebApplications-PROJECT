import React from 'react'
import { Link } from 'react-router-dom'


const SinglePost = ({post}) => {
    return (
        <article className="SinglePost">
            <p> post no. {post.id}:
            <Link to={`/post/${post.id}`}>
                <pre> {post.body} </pre> 
            </Link>
            </p>
        </article>
    )
}

export default SinglePost
