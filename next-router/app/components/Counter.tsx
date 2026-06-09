import { useState } from "react";

export default function Counter(){
    const[count, setCount] = useState(0);

    const onClickIncrease = () => {
        if(count == 10) {
            return;
        }

        setCount(count + 1);
    }

    const onClickDecrease = () => {
        if(count == 0){
            return;
        }

        setCount(count - 1);
    }

    return(
        <div
        className="flex flex-col justify-center items-center border border-dashed border-blue-500 rounded w-100 h-50 gap-3 bg-blue-50">
            <div
            className="mb-5 font-bold border px-10 py-2 text-blue-500 mr-auto ml-5 bg-white"
            >COUNTER</div>
            <div
            className="text-2xl font-semibold"
            >{count}</div>
            <div
            className="flex flex-row gap-5">
                <button
                className="font-medium px-4 py-1 bg-blue-500 rounded text-white mt-3 cursor-pointer hover:bg-blue-600"          
                onClick={onClickIncrease}
                >+</button>
                <button
                className="font-medium px-4 py-1 bg-blue-500 rounded text-white mt-3 cursor-pointer hover:bg-blue-600"          
                onClick={onClickDecrease}
                >-</button>
            </div>
        </div>
    )
}