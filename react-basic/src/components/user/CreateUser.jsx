import React, { useRef, useState } from 'react'

export default function CreateUser({users, setUsers, nextId}) {

    const [inputs, setInputs] = useState({
        userName: '',
        email: ''
    });

    const {userName, email} = inputs;

    const onChange = (e) => {
        const {name, value} = e.target;
        setInputs({
            ...inputs,
            [name] : value
        })
    }

    const create = () => {
        const newUser = {
            id: nextId.current,
            userName: userName, // key와 value의 이름이 같으면 하나만 적어도 OK
            email: email,
            active: false
        }

        // react에서는 push / pop 등 원본 데이터가 변경되는 함수 사용 지양
        // useState()로 ...spread 문법!
        // setUsers([...users].concat(newUser)) 도 사용 가능 => 내부적으로 효율적
        setUsers([...users, newUser]);
        nextId.current += 1;

        setInputs({
            userName: '',
            email: ''
        });
    }

    return (
        <>
            <input 
                type="text"
                name='userName' 
                placeholder='이름' 
                onChange={onChange}
                value={userName}
            />

            <input 
                type="text" 
                name='email' 
                placeholder='이메일' 
                onChange={onChange}
                value={email}
            />

            <button onClick={create}>추가</button>
        </>
    )
}
