import React from 'react'
import SinglePost from './SinglePost'

const AllPosts = ({posts}) => {
    return (
        <>
          {posts.map(post => ( <SinglePost key={post.id} post={post} /> ))}  
        </>
    )
}

export default AllPosts
