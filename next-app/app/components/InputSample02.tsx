import { useRef, useState } from "react"

interface UserInfo {
    id: string,
    nick: string
}

export default function InputSample02(){

    const [info, setInfo] = useState<UserInfo>({
        id: '',
        nick: ''
    });
    
    const {id, nick} = info;

    const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setInfo({
            ...info,
            [name]:value
        })
    }

    const idInput = useRef<HTMLInputElement | null>(null);

    const onClick = () => {
        setInfo({
            id: '',
            nick: ''
        })

        // ? 옵셔널 체이닝
        // 해당 객체가 없을 때 에러 없이 안전하게 접근 가능
        idInput.current?.focus();
    }


    return(
        <div
        className="flex flex-col items-center justify-center gap-5 m-10">
            <div className="input-box">
                <input type="text" name="id" placeholder="ID" 
                className="border border-blue-500 p-2 rounded m-2 focus:outline-blue-800 w-30 bg-blue-50"
                onChange={onChange}
                value={id}
                ref={idInput}
                />
                <input type="text" name="nick" placeholder="닉네임" 
                className="border border-blue-500 p-2 rounded m-2 focus:outline-blue-800 w-30 bg-blue-50"
                onChange={onChange}
                value={nick}
                />
            </div>
            <button
            className="rounded bg-blue-500 text-white px-3 py-2 cursor-pointer font-bold hover:bg-blue-600"
            onClick={onClick}
            >RESET</button>
            <div
            className="p-2 m-5 border border-gray-500 rounded bg-gray-100"
            >{id} / {nick}</div>
        </div>
    )
}