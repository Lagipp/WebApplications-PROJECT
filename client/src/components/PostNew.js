import React from 'react'
import { Link } from 'react-router-dom'


// allowing an authenticated user to make new posts


const PostNew = ({handleSubmit, newBody, setNewBody}) => {
    return (
        <div className="PostNew">
            <h2> Make a new post </h2>

            <form onSubmit={handleSubmit}>
                <label htmlFor="newBody"> Post: </label>
                <br />
                <textArea placeholder="Post something" id="newBody" type="text" onChange={(e) => setNewBody(e.target.value)} value={newBody} />

                <button type="submit"> Submit </button>
            </form>

            <nav>
                <Link to="/">Go back to index</Link>
            </nav>
        </div>
    )
}

export default PostNew
