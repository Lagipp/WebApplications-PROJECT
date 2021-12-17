import { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = ({ setJwt, setUser, jwt} ) => {

    const[userData, setUserData] = useState({})

    const submit = (event) => {
        event.preventDefault()
        console.log(">> inside submit-function in client/Login.js")

        fetch("/users/login", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(userData),
            mode: "cors"
        })
        .then(response => response.json())
        .then(data => {
            //console.log(">> DEBUG: DATA TOKEN IS " + data.token)
            
            if(data.token) {
                setJwt(data.token)
                setUser(JSON.parse(Buffer.from(data.token.split(".")[1], "base64").toString()))

                //console.log(">> DEBUG: USERNAME IS : " + userData.username)
                //console.log(">> ''SECOND'' DEBUG: data.token is " + data.token)
            }
        })  
    }

    const handleChange = (event) => {
        setUserData({...userData, [event.target.name]: event.target.value})
    }

    //<h2> {jwt ? `Logged in as ${userData.username}!` : "Login page"} </h2>

    return (
        <div>

            <h2> Login page </h2>

            <form className="LoginForm" onSubmit={submit} onChange={handleChange}>
                <input type="text" name="username" />
                <input type="password" name="password" />
                <input type="submit" />
            </form>

            <br />
            <nav>
                <Link to="/">Go back to index</Link>
            </nav>
        </div>
    )
}

export default Login
