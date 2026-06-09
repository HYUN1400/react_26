import { useEffect, useState } from "react";
import { userAllType } from "../type/type";

export default function UserOne({selectId}:{
    selectId: number;
}){

    const[info, setInfo] = useState<userAllType | null>(null)
    const[error, setError] = useState<string | null>(null);

    const getUser = async() => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${selectId}`)
            const datas = await response.json();
            setInfo(datas);
        } catch (error:any) {
            setError(error);
        }
    }

    useEffect(() => {
        getUser();
    }, [selectId])

    return(
        <div
        className="bg-gray-100 w-90 p-6 rounded border border-blue-500 mt-5"
        >
            <div>
                <div
                className="flex items-center gap-3">
                    <div
                    className="font-bold text-2xl italic"
                    >
                        {info?.username}
                    </div>
                    <div
                    className="text-xs text-blue-500"
                    >{info?.name}</div>
                </div>
                <div
                className="flex-row mt-3 ml-10"
                >
                    <div>· {info?.phone}</div>
                    <div>· {info?.website}</div>
                </div>
                    <div
                    className="mt-3"
                    >
                        <div
                        className="text-blue-500 font-semibold"
                        >ADDRESS</div>
                        <div
                        className="text-sm ml-10 mt-2"
                        >
                            <div>· {info?.address.street}</div>
                            <div>· {info?.address.suite}</div>
                            <div>· {info?.address.city}</div>
                            <div>· {info?.address.zipcode}</div>                 
                        </div>
                    </div>
            </div>
        </div>
    )
}