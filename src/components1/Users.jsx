import React from 'react'
import FetchData from './components1/FetchData';

export default function Users() {
    const {data} = FetchData("https://api.github.com/users");
  return (
    <div>
        {data && (
            data.map((user) => (
                <div className="text-white" key={user.id}>
                <h1>{user.login}</h1>
                <p>{user.type}</p>
                </div>
            ))
        )}
    </div>
  )
}

