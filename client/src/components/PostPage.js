import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom';


const PostPage = () => {

    //const post = posts.find(post => (post.id).toString() === id);



    const { id } = useParams();
    const [post, setPost] = useState("");


    useEffect(() => {
        fetch("/users/post/" + id)
        .then(response => response.json())
        .then(json => {
            setPost(json);
            console.log("inside fetch() of PostPage.js, JSON = " + json)})

    }, [id])



    return (
        <div className="PostPage">
            
            <>
            <h2> Post body: </h2>
            <pre> {post.postbody} </pre>
            <br />
            <h2> Comments: </h2>
            <p> comment-field for post {post.postID}, WIP </p>
            </>

            <nav>
                <Link to="/">Go back to index</Link>
            </nav>
        </div>
    )
}




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


export default PostPage
