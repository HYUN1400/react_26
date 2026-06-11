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
                className="flex flex-col gap-4 w-full"
            >
                <div
                className="text-2xl font-bold text-white bg-blue-400 rounded-full w-35 px-3 py-2 text-center mb-7"
                >
                    게시글 목록
                </div>

                {contents.map((content) => (
                    <Link
                        href={`/`}
                        key={content.id}
                        className="border-2 border-blue-400 py-2 rounded-xl
                                    bg-white
                                    hover:bg-blue-400
                                    hover:translate-px
                                    group
                                    transition"
                    >
                        <div
                        className="flex flex-row justify-between items-center px-4"
                        >
                            <div 
                                className="text-gray-800 font-medium group-hover:text-white"
                            >{content.title}</div>
                            <div
                                className="text-sm text-blue-400 group-hover:text-white tracking-wider"
                            >{content.writer}</div>
                        </div>
                    </Link>
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