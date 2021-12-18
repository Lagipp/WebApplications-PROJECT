//import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom';
import PostComment from './PostComment';
import { Card } from 'react-bootstrap'


const PostPage = ( {posts, comments} ) => {

    const { id } = useParams();
    const post = posts.find(post => (post.postID).toString() === id);
    const comment = comments.find(comment => (comment.OGpostID).toString() === id);


    return (
        <div className="PostPage">
            
           <article>
            {post &&
                <>
                <h2> Post body: </h2>
                <pre> {post.postbody} </pre>
                <br />
                <h2> Comments: </h2>

                {comment &&
                    <>
                    <div>
                        {comment.map(com => <Card key={com.OGpostID} >
                            <Card.Body>
                                <Card.Text>
                                    {com.commentbody}
                                </Card.Text>
                            </Card.Body>
                        </Card> )}
                    </div>
                    </>
                }

                {!comment &&
                    <>
                    <h4> No comments found </h4>
                    <p> shit sucks :/ </p>
                    </>
                }

                <PostComment />
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

    //const [post, setPost] = useState("");

    //const [comments, setComments] = useState([])
    //const [post, setPost] = useState({})
    /*
    useEffect(() => {
        fetch("/users/post/" + id)
        .then(response => response.json())
        .then(json => {
            setComments(json.comments);
            setPost(json.posts);
            console.log("<< dbg: while fetching comments: " + json.comments)
            console.log("<< dbg: while fetching post: " + json.posts)
        })
    }, [id])
    */

    /*
    useEffect(() => {
        fetch("/users/post/" + id)
        .then(response => response.json())
        .then(json => {
            setPost(json);
            console.log("inside fetch() of PostPage.js, JSON = " + json)})

    }, [id])
    */

/*
            <>
            <h2> Post body: </h2>
            <pre> {post.postbody} </pre>
            <br />
            <h2> Comments: </h2>
            <p> comment-field for post {post.postID}, WIP </p>
            </>
*/

/*

            */


export default PostPage
