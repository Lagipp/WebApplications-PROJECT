import { useState } from 'react'
import { Link } from 'react-router-dom'


/*  Function that allows authenticated users to make new posts  */


const PostNew = ({jwt}) => {

    const[post, setPost] = useState([])

    const submit = (event) => {
        event.preventDefault()
        console.log(">> DEBUG: inside submit-function in PostNew.js")

        fetch("/users/post", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(post),
            mode: "cors"
        })
        .then(response => response.json())
        .then(data => {
            console.log(data + "after fetch in NEW post")
        })
        
        console.log("--- User submitted post successfully")
        console.log(post)
    }

    const handleChange = (event) => {
        setPost({...post, [event.target.name]: event.target.value})
    }

    return (
        <div className="PostNew">


            {/* checking to see whether the user is logged in. 
              * if they are, they can make a new post */}

            {jwt 
            ? 
                <> 
                    <h2> Make a new post </h2>

                    <form className="CreatePostForm" onSubmit={submit} onChange={handleChange}>
                        <input type="text" name="postbody" />
                        <input type="submit" />
                    </form>
                </>

            : 
                <> 
                    <br /> 
                    <h3> You have to be logged in to make a post! </h3> 
                </>
            }

            <br />
            <nav>
                <Link to="/">Go back to index</Link>
            </nav>
        </div>
    )
}


export default PostNew
