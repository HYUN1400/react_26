import React, { useRef, useState } from 'react'
import UserInfo from './UserInfo';
import CreateUser from './CreateUser';

export default function UserList02() {
    // users 객체에 [{}, {}, {}] 등록, 삭제, 리스트보기

    const [users, setUsers] = useState([
        {
            id: 1,
            userName: 'test1',
            email: 'test1@gmail.com',
            active: true
        },
        {
            id: 2,
            userName: 'test2',
            email: 'test2@gmail.com',
            active: false
        },
        {
            id: 3,
            userName: 'test3',
            email: 'test3@gmail.com',
            active: false
        }
    ]);

    // 컴포넌트 안에서 관리할 수 있는 변수 생성
    // useRef() : useRef()로 관리하는 변수는 값이 바뀌어도 컴포넌트가 리렌더링 되지 않음
    const nextId = useRef(4);

  return (
    <div>
        {/* 
            등록 컴포넌트 => CreateUser
            => 해당 컴포넌트의 input 객체가 여기에 있는 것과 동일
        */}
        <CreateUser users={users} setUsers={setUsers} nextId={nextId} />
        <UserInfo users={users} setUsers={setUsers} />

        {/*  */}
    </div>
  )
}
