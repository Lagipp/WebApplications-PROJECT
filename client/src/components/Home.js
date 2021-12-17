import React from 'react'
import AllPosts from './AllPosts'
import { Link } from 'react-router-dom'


// https://reactjs.org/docs/conditional-rendering.html
// if-else format ( ?: ) found here


// if there are posts delivered as props, all of them are mapped 
// into a single place
// if no posts are received as props, the user is informed


const Home = ({posts}) => {
    return (
        <div className="Home">

            {posts.length 
            ?                               /* if posts */
            ( <>
                <h2> All posts </h2> 
                <AllPosts posts={posts} /> 
              </> )

            :                               /* else if no posts */
            (
                <p> There are no posts :( </p> 
            )
            }

            

            <p> THIS IS THE CONTENT OF 'HOME'</p>

            <nav>
                <Link to="/post">Go make a new post</Link>
            </nav>

        </div>
    )
}

export default Home
