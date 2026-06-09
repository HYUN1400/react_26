import { useState } from "react"

export default function InputColor(){

    const[color, setColor] = useState('black');

    const onChangeColor = (e:React.ChangeEvent<HTMLInputElement>) => {
        setColor(e.target.value)
    }

    return(
        <div
        className="flex flex-col justify-center items-center border border-dashed border-blue-500 rounded w-100 h-50 gap-3 bg-blue-50">
            <div
            className="mb-5 font-bold border px-10 py-2 text-blue-500 mr-auto ml-5 bg-white"
            >COLOR PICKER</div>
            <div
            className="flex flex-row items-center justify-center gap-10"
            >
                <input type="color"
                className="w-10 h-10 cursor-pointer"
                onChange={onChangeColor}
                /> 
                <div
                className="flex flex-col items-center gap-1"
                >
                    <div
                    className="w-15 h-15 rounded border"
                    style={{backgroundColor: `${color}`}}
                    ></div>
                    <div
                    className="text-xs font-semibold text-blue-500"
                    >
                        {color}
                    </div>
                </div>
            </div>
            
        </div>
    )
}