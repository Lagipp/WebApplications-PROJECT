import React from 'react'
import AllPosts from './AllPosts'
import { Link } from 'react-router-dom'


// https://reactjs.org/docs/conditional-rendering.html
// conditional rendering format ( ?: ) found here


/*  Main page (/index) rendering all posts made by authenticated users  */


const Home = ({posts}) => {
    return (
        <div className="Home">

            {posts.length 
            ?                               /* if there are posts */
            ( <>
                <h2> All posts </h2> 
                <AllPosts posts={posts} /> 
              </> )

            :                               /* else if no posts */
            (
                <p> There are no posts :( </p> 
            )
            }


            <nav>
                <Link to="/post">Go make a new post</Link>
            </nav>

        </div>
    )
}

export default Home
