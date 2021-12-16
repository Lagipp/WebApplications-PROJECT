import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom';


// https://stackoverflow.com/questions/40682064/what-does-operator-indicate-with-this-props-children-react-cloneelemen
// source for the {post &&} 
// code doesn't work without it even though it should, idk this solved it


/*
<article>
            {post &&
                <>
                <h2> Post body: </h2>
                <pre> {post.body} </pre>
                <br />
                <h2> Comments: </h2>
                <p> comment-field for post {post.id}, WIP </p>
                </>
            }
            {!post &&
                <>
                <h2> No posts found </h2>
                <p> Try again :( </p>
                </>
            }
            </article>
            */


const PostPage = () => {

    const { id } = useParams();
    //const post = posts.find(post => (post.id).toString() === id);

    const [post, setPost] = useState("");


    useEffect(() => {
        fetch("/api/post/" + id)
        .then(response => response.json())
        .then(json => setPost(json))

    }, [id])



    return (
        <div className="PostPage">
            
            <>
            <h2> Post body: </h2>
            <pre> {post.body} </pre>
            <br />
            <h2> Comments: </h2>
            <p> comment-field for post {post.id}, WIP </p>
            </>

            <nav>
                <Link to="/">Go back to index</Link>
            </nav>
        </div>
    )
}

export default PostPage
