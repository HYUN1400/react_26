import React from 'react'

const User = ({user}) => {
   return (
        <div>
            <b>{user.userName}</b> <span>{user.email}</span>
        </div>
    )
}

export default function UserList() {
    const users = [
        {
            id: 1,
            userName: 'peter',
            email: 'peter0810@gmail.com'
        },
        {
            id: 2,
            userName: 'matt',
            email: 'namp@gmail.com'
        },
        {
            id: 3,
            userName: 'wade',
            email: 'unicorn@gmail.com'
        }
    ];

  return (
    <div>
        {/* <div>
            <b>{users[1].userName}</b> <span>{users[1].email}</span>
        </div> */}

        {
            users.map((user) => (
                // 만약 key로 사용할 값이 없다면 array index 사용
                <User user={user} key={user.id} />
            ))
        }

        {/* {
            users.map((user, index) => (
                <User user={user} key={index}/>
            ))
        } */}
        
    </div>
  )
}
