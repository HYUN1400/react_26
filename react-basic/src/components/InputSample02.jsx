import React, { useRef, useState } from 'react'

export default function InputSample02() {

    // useState로 객체 관리하기

    const [inputs, setInputs] = useState({
        // {} 안에서 사용할 이름을 key:value 로 초기화

        id: '',
        nick: ''
    });

    const {id, nick} = inputs;

    const onChange = (e) => {
        const {name, value} = e;
        setInputs({
            ...inputs,
            [name]: value // name key를 가지는 value 값을 저장
        })
    }

    const idInput = useRef();

    const onClick = () => {
        setInputs({
            id: '',
            nick: ''
        })

        idInput.current.focus();

        // id 위치로 포커스
        // useRef(): 특정 DOM을 선택해야 하는 상황에 사용 
    }

  return (
    <div>
        <input 
            type="text" 
            name='id' 
            value={id} 
            placeholder='ID'
            onChange={(e) => {onChange(e.target)}}
            ref = {idInput}
        />

        <input 
            type="text" 
            name='nick' 
            value={nick} 
            placeholder='닉네임' 
            onChange={(e) => {onChange(e.target)}}
        />
        <button onClick={onClick}>초기화</button>
        <div>{id}({nick})</div>
    </div>
  )
}
