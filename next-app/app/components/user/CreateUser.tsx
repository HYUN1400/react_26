import { UserType } from "@/app/type/UserType";
import { useRef, useState } from "react";

type createProps = {
    userName: string,
    email: string,
    onChange: (e:React.ChangeEvent<HTMLInputElement>) => void,
    onClickCreate: () => void;
}


export default function CreateUser({userName, email, onChange, onClickCreate}:createProps){


    return(
        <>
        <div className="mb-4">
            <input 
                type="text"
                name="userName"
                placeholder="이름"
                className="border border-blue-500 p-2 rounded m-2 focus:outline-blue-800 w-30 bg-blue-50"
                value={userName}
                onChange={onChange}
            />

            <input 
                type="text"
                name="email"
                placeholder="이메일"
                className="border border-blue-500 p-2 rounded m-2 focus:outline-blue-800 w-30 bg-blue-50"
                value={email}
                onChange={onChange}
            />

            <button 
                className="px-3 py-1 ml-3 rounded bg-green-500 text-white hover:bg-green-600 cursor-pointer"
                onClick={onClickCreate}
            >
                생성
            </button>
        </div>

        </>
    )
}