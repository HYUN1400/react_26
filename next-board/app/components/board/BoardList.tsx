"use client"
import { boardList } from "@/app/data/data"
import { boardType } from "@/app/type/boardType";
import Link from "next/link";
import { useEffect, useState } from "react"

export default function BoardList(){

    const [contents, setContents] = useState<boardType[] | []>([]);

    useEffect(() => {
        const fetchData = async() => {
            try {
                const response = await fetch(`/api/board`);
                const datas = await response.json();
                setContents(datas);

            } catch (error) {
                console.log(error)
            }
        }

        fetchData();

    }, []);

    if(!contents) return (
        <div
                className="flex flex-col gap-4 w-full"
            >
                <div
                className="text-2xl font-bold text-white bg-blue-400 rounded-full w-35 px-3 py-2 text-center mb-7"
                >
                    게시글 목록
                </div>
        </div>
    )

    const dataPrint = () => {

        return(
            <div
                className="flex flex-col gap-5 w-full"
            >
                <div
                className="text-2xl font-bold text-white bg-blue-400 rounded-full w-35 px-3 py-2 text-center mb-7"
                >
                    게시글 목록
                </div>

                {contents.map((content, index) => (
                    <div
                    className="flex flex-row w-full justify-between gap-4 items-center"
                    key={content.id}
                    >  
                        <div
                        className=" text-white
                                    font-extrabold
                                    w-5
                                    [text-shadow:_1px_1px_0_#3b82f6,_-1px_1px_0_#3b82f6,_1px_-1px_0_#3b82f6,_-1px_-1px_0_#3b82f6]
                        "
                        >
                            {contents.length - index} .
                        </div>         
                        <Link
                            href={`/board/${content.id}`}
                            className="border-2 border-blue-400 py-2 rounded-xl
                                        bg-gradient-to-r from-white from-82% to-blue-400 to-80%
                                        hover:shadow
                                        hover:translate-px
                                        group
                                        transition
                                        w-full
                                        "
                        >
                            <div
                            className="flex flex-row justify-between items-center px-4"
                            >
                                <div 
                                    className="text-gray-600 font-bold"
                                >{content.title}</div>
                                <div
                                    className="text-xs text-white tracking-wider ml-auto"
                                >{content.writer}</div>
                            </div>
                        </Link>
                    </div>
                ))}
                
                <div
                className="flex flex-row gap-5 justify-center mt-10"
                >
                    <button
                        className="border-2 border-blue-400 px-3 py-1 rounded-full text-blue-400 font-bold hover:bg-blue-400 hover:text-white transition"
                    ><Link href={"/"}>HOME</Link></button>
                    <button
                        className="border-2 border-blue-400 px-3 py-1 rounded-full text-blue-400 font-bold hover:bg-blue-400 hover:text-white transition"
                    ><Link href={"/board/write"}>add</Link></button>
                </div>

            </div>
        )

    }

    return(
        <>
            {dataPrint()}
        </>
    )
}