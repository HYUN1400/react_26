// "use client" => page.tsx에서 관리
import { useState } from "react"

// props로 count의 기본값을 받기
// 만약 값이 없다면 기본값 0 => {num=0} => undefined만 처리, null은 처리 X

type CounterProps = {
    // ? optional 
    num?: number;
}

export default function Counter02({num=0}:CounterProps) {
    
    const [count, setCount] = useState<number>(num ?? 0);

    return (
        <div className="m-3">
            <h1 className="text-2xl m-2 text-center">{count}</h1>
            <button 
            className="px-4 py-2 mr-3 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer"
            onClick={() => setCount(count+1)}
            >+</button>
            <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer"
            onClick={() => setCount(count-1)}
            >-</button>
        </div>
    )
}