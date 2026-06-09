import React, { useState } from 'react'


export default function Counter() {

    // react 가상DOM에서 변경되는 값 관리 => useState();
    // useState() => 변수의 상태를 관리하는 훅

    const [number, setNumber] = useState(0);

    const onIncrease = () => {
        setNumber(n => n + 1);
    }

    const onDecrease = () => {
        if(number == 0){
            return;
        }

        setNumber(n => n - 1);
    }

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+</button>
            <button onClick={onDecrease}>-</button>
        </div>
    )
}
