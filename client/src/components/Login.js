import { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = ({ setJwt, setUser, jwt} ) => {

    const[userData, setUserData] = useState({})

    const submit = (event) => {
        event.preventDefault()
        console.log("->->- inside submit-function in Login.js")

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
            console.log(data)
            if(data.token) {
                setJwt(data.token)
                setUser(JSON.parse(Buffer.from(data.token.split(".")[1], "base64").toString()))
            }
        })  
    }

    const handleChange = (event) => {
        setUserData({...userData, [event.target.name]: event.target.value})
    }


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
