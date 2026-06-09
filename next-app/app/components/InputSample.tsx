import { useState } from "react"

export default function InputSample(){

    // input의 값이 변경되면 input value 속성의 값이 업데이트
    const [text, setText] = useState<string>('');

    const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }

    return(
        <div className="mt-10">
            <input type="text" 
            className="border border-blue-500 p-2 rounded m-5 focus:outline-blue-800"
            name="text"
            value={text}
            onChange={onChange}
            />
            <button
            className="rounded bg-blue-500 text-white px-3 py-2 cursor-pointer font-bold hover:bg-blue-600"
            onClick={() => setText('')}
            >RESET</button>
            <div
            className="p-2 m-5 border border-gray-500 rounded bg-gray-100"
            >{text}</div>
        </div>
    )
}