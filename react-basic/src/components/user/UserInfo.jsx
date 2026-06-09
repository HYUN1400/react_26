import React from 'react'

export default function UserInfo({users, setUsers}) {

    const deleteUser = (id) => {
        const updatedUser = users.filter(user => user.id !== id);
        setUsers(updatedUser)

        console.log(updatedUser)
    }

  return (
    <>
        {
            users.map((user) => (
                <div key={user.id}>
                    <b>{user.id} · {user.userName} </b>
                    <span>({user.email})</span>
                    <button onClick={() => deleteUser(user.id)}>❌</button>
                </div>
            ))
        }
    </>
  )
}
