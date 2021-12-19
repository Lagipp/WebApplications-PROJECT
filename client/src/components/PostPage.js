import { useParams, Link } from 'react-router-dom';
import PostComment from './PostComment';


/*  Rendering the single post that has the same ID as the parameters
 *  in the URL. Also showing only the comments that have the matching ID  */


const PostPage = ( {posts, comments} ) => {

    const { id } = useParams();
    const post = posts.find(p => (p.postID).toString() === id);


    // https://stackoverflow.com/questions/38618088/how-to-find-multiple-elements-in-array-javascript-es6/38618116
    // src for the 'forEach()' function 
    

    /*  picking only the comments that match the ID of the post that is being viewed  */

    let AllComments = []
    comments.forEach(c => {if ((c.OGpostID) === post.postID) AllComments.push(c.commentbody);})


    return (
        <>
        <div className="PostPage">
            
           <article>
            {post &&
                <>
                <h2> Post contents: </h2>
                <pre> {post.postbody} </pre>
                <br />
                <h2> Comments: </h2>


                {/* checking if the post has any comments under it 
                  * with a matching ID. (= if anyone has left a comment) */}

                {AllComments.length !== 0 && 
                    <>
                    <div className="CommentsList">
                        <ul> 
                            {AllComments.map(com => 
                            <li key={com} >
                                   <p> {com} </p>
                            </li>)}
                        </ul>
                    

                    </div>
                    </>
                }

                {AllComments.length === 0 &&
                    <>
                    <h4> No comments found for this post</h4>
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
            <br />
        </div>

        <div>
            <nav>
                <Link to="/">Go back to index</Link>
            </nav>
        </div>
        </>
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
