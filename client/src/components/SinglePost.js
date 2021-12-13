import React from 'react'
import { Link } from 'react-router-dom'


const SinglePost = ({post}) => {
    return (
        <article>
            <Link to={`/post/${post.id}`}>
                <p> post no. {post.id}: {post.body} </p>
            </Link>

        </article>
    )
}

export default SinglePost
