import React from 'react'
import { useParams, Link } from 'react-router-dom';


// https://stackoverflow.com/questions/40682064/what-does-operator-indicate-with-this-props-children-react-cloneelemen
// source for the {post &&} 
// code doesn't work without it even though it should, idk this solved it




const PostPage = ({posts}) => {

    const { id } = useParams();
    const post = posts.find(post => (post.id).toString() === id);

    return (
        <div className="PostPage">
            <article>
            {post &&
                <>
                <h2> Post body: </h2>
                <p> {post.body} </p>
                <br />
                <h2> Comments: </h2>
                <p> temp, here comes comments </p>
                </>
            }
            {!post &&
                <>
                <h2> No posts found </h2>
                <p> Try again :( </p>
                </>
            }
            </article>
            
            
            <nav>
                <Link to="/">Go back to index</Link>
            </nav>
        </div>
    )
}

export default PostPage
