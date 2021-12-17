import React from 'react'

const UserList = () => {
    return (
        <div className='UserList'> 
            <h2> List of all users in database: </h2>
            
            <table>
                <tr>
                    <th> ID </th>
                    <th> Username </th>
                    <th> Password</th>
                </tr>
                <tr>
                    <td> User.ID </td>
                    <td> User.username </td>
                    <td> User.password </td>
                </tr>
            </table>
        </div>
    )
}

export default UserList
