import { useState } from 'react'
import { Link } from 'react-router-dom'

const Register = () => {

    const[userData, setUserData] = useState({})

    const submit = (event) => {
        event.preventDefault()
        console.log("->->- inside submit-function in Register.js")

        fetch("/users/register", {
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
        })
    }

    const handleChange = (event) => {
        setUserData({...userData, [event.target.name]: event.target.value})
    }


    return (
        <div>
            <h2> Register page </h2>
            <form className="RegisterForm" onSubmit={submit} onChange={handleChange}>
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

export default Register