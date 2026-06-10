import React, { useState } from "react"

export default function InputPrint(){

    const[text, setText] = useState('');

    const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }

    return(
        <div
        className="flex flex-col justify-center items-center border border-dashed border-blue-500 rounded w-100 h-auto py-5 gap-3 bg-blue-50">           
            <div
            className="mb-5 font-bold border px-10 py-2 text-blue-500 mr-auto ml-5 bg-white"
            >INPUT</div>

            <input 
            type="text"
            className="border border-blue-500 bg-white focus:outline-none h-10 p-2"
            value={text}
            onChange={onChange}
            />

            <div
            className="font-bold italic px-3 break-all"
            >👉 {text}</div>
        </div>
    )
}