import React from 'react'
import AllPosts from './AllPosts'


// https://reactjs.org/docs/conditional-rendering.html
// if-else format ( ?: ) found here


// if there are posts delivered as props, all of them are mapped 
// into a single place
// if no posts are received as props, the user is informed


const Home = ({posts}) => {
    return (
        <div className="Home">
            {posts.length 
            ? ( <AllPosts posts={posts} /> )
            : ( <p> There are no posts :( </p> )
            }

            

            <p> THIS IS THE CONTENT OF 'HOME'</p>
        </div>
    )
}

export default Home
