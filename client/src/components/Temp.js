import React from 'react'
import { Link } from 'react-router-dom'


/*  showing an error message if the user tries
 *  to go to an URL that doesn't exist within the app  */


const Temp = () => {
    return (
        <div>
            <h2> 404: not a proper URL </h2>
            
            <nav>
            <Link to="/">Go back to index</Link>
            </nav>
        </div>

    )
}

export default Temp
