import React from 'react'

interface User {
    id : number;
    name : string;
    email : string;
}

const users = async () => {
   const res = await fetch('https://jsonplaceholder.typicode.com/users', {next : {revalidate : 10}}) // this mean that every 10 sec it will go and fetch some new data
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
