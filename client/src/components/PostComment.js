import { useState } from "react"
import { useParams } from 'react-router-dom'


/*  Function that allows authenticated users to post comments 
 *  under an already-made post. Comment is assigned the same 
 *  ID as the post it is being commented under.                */


const PostComment = () => {

    const { id } = useParams()
    const[comment, setComment] = useState([])

    const submit = (event) => {
        event.preventDefault()
        console.log(">> DEBUG: inside submit-function in PostComment.js")

        fetch("/users/comment/" + id, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(comment),
            mode: "cors"
        })
        .then(response => response.json())
        .then(data => {
            console.log(data + "after fetch in COMMENT post")
        })

        console.log("--- User submitted comment succesfully")
        console.log(comment)
    }

    const handleChange = (event) => {
        setComment({...comment, [event.target.name]: event.target.value})
    }

    return (
        <div className="PostComment">
            <form className="CreateCommentForm" onSubmit={submit} onChange={handleChange}>
                <input type="text" name="commentbody" placeholder="Post a new comment" />
                <input type="submit" />
            </form>
        </div>
    )
}

export default PostComment
