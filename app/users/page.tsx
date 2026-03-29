import React from 'react'

interface User {
    id : number;
    name : string;
    email : string;
}

const users = async () => {
   const res = await fetch('https://jsonplaceholder.typicode.com/users')
   const users: User[] = await res.json()
  return (
    <div>
        <h1>Users Page</h1>
       {users.map(user => (
        <li key={user.id}>{user.name} -- {user.email}</li>

       ))}
    </div>
  )
}

export default users
