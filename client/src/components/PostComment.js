import { useState } from "react"


const PostComment = () => {

    const[comment, setComment] = useState([])

    const submit = (event) => {
        event.preventDefault()
        console.log(">> DEBUG: inside submit-function in PostComment.js")

        fetch("users/comment", {
            method: "POST",
            headers: {
                "Content-type": "applications/json"
            },
            body: JSON.stringify(comment),
            mode: "cors"
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })

        console.log("--- User submitted comment succesfully")
    }

    const handleChange = (event) => {
        setComment({...comment, [event.target.name]: event.target.value})
    }

    return (
        <div className="PostComment">
            <form className="CreateCommentForm" onSubmit={submit} onChange={handleChange}>
                <input type="text" name="commentbody" />
                <input type="submit" />
            </form>


        </div>
    )
}

export default PostComment
