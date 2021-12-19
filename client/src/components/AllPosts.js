import React from 'react'
import SinglePost from './SinglePost'


/*  Mapping all posts gotten from fetching when reloading 
 *  the index page and assigning them their own key-values  */

const AllPosts = ({posts}) => {
    return (
        <>
          {posts.map(post => ( <SinglePost key={post.postID} post={post} /> ))}  
        </>
    )
}

export default AllPosts
