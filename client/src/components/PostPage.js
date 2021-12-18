//import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom';
import PostComment from './PostComment';
//import { Card } from 'react-bootstrap'


const PostPage = ( {posts, comments} ) => {

    const { id } = useParams();
    const post = posts.find(p => (p.postID).toString() === id);
    const comment = comments.find(c => (c.OGpostID).toString() === id);

/*
    console.log("comments found are : " + JSON.stringify(comment))
    console.log("comment.OGpostID is : " + JSON.stringify(comment.OGpostID)) */
    //console.log("comment.commentbody is : " + JSON.stringify(comment.commentbody))
    console.log("comment is : " + JSON.stringify(comment))

/*    
{comment.map(com => <Card key={com.OGpostID} >
                            <Card.Body>
                                <Card.Text>
                                    {com.commentbody}
                                </Card.Text>
                            </Card.Body>
                        </Card> )}
*/


    return (
        <div className="PostPage">
            
           <article>
            {post &&
                <>
                <h2> Post body for post # {post.postID} </h2>
                <pre> {post.postbody} </pre>
                <br />
                <h2> Comments: </h2>

                {comment &&
                    <>
                    <div>
                        <h4> comments with ID of {comment.OGh5ostID}</h4>
                        <p> same as above: {post.postbody} </p>
                        <p> with the ID: {post.postID} </p>
                        <p> comment has body: {comment.commentbody} </p>
                        <p> comment has ID: {comment.OGpostID} </p>
                        
                    </div>
                    </>
                }

                {!comment &&
                    <>
                    <h4> No comments found for this post</h4>
                    <p> shit sucks :/ </p>
                    </>
                }

                <PostComment />
                <br />
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
