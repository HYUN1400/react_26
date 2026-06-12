"use client"

import { boardType } from "@/app/type/boardType";
import { useParams } from "next/navigation"
import { useEffect, useState } from "react";

export default function BoardModify(){

        // 비동기로 DB에서 가져오기
        const params = useParams();
        const idx = params.id;
    

        // 수정할 객체 생성 id, title, content => /api/board/[id] method PUT

        const [edit, setEdit] = useState({
            id: '',
            title: '',
            contents: ''
        });

        // 받아온 자료를 저장할 변수 => useState()
        const [board, setBoard] = useState<boardType | null>(null);
    
        useEffect(() => {
            const getFetchBoard = async() => {
                try {
                    const response = await fetch(`/api/board/${idx}`);
                    if(!response.ok) throw new Error('게시글을 불러오지 못했습니다.');
                    const datas = await response.json();
                    setBoard(datas);

                    setEdit({
                    id: String(idx),
                    title: datas.title,
                    contents: datas.contents
                });

                } catch (error) {
                    console.log(error);
                    setBoard(null);
                }
            }
    
            getFetchBoard();
    
        },[])


        // 수정한 객체 저장
        const {title, contents} = edit;

        const onChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setEdit({
            ...edit,
            [e.target.name] : e.target.value
        })
        }

        const onClickEdit = async() => {
            const response = await fetch(`/api/board/${idx}`, {
                method: 'PUT',
                headers: {
                    'content-Type': 'application/json'
                },
                body: JSON.stringify(edit)
            });

            window.location.href=`/board/${idx}`
        }


        // 객체 없을 때
    
        if(!board){
            return(
                <div className="flex flex-col flex-1 items-center justify-center 
                            font-sans bg-yellow-50 dark:bg-black                    
            ">
                <main className="flex flex-1 w-full max-w-3xl flex-col 
                                  items-center gap-10 py-13 px-16 dark:bg-black sm:items-start">
                    <div
                    className="
                    text-yellow-50
                    font-extrabold
                    text-4xl
                    [text-shadow:_1px_1px_0_#3b82f6,_-1px_1px_0_#3b82f6,_1px_-1px_0_#3b82f6,_-1px_-1px_0_#3b82f6]
                    "
                    >
                        404 NOT FOUND
                    </div>
                </main>
            </div>
            )
        }

    // RETURN

    return(
        <div className="flex flex-col flex-1 items-center justify-center 
                        font-sans bg-yellow-50 dark:bg-black                    
        ">
              <main className="flex flex-1 w-full max-w-3xl flex-col 
                              items-center gap-10 py-13 px-16 dark:bg-black sm:items-start">
                <div
                  className="w-full"
                >
                  
                    <div
                        className="flex flex-col gap-4 w-full"
                    >
                        <div
                        className="flex flex-row items-end justify-between"
                        >
                            <input
                            type="text"
                            className="text-5xl font-bold caret-blue-500 text-white
                                        [text-shadow:_2px_2px_0_#3b82f6,_-2px_2px_0_#3b82f6,_2px_-2px_0_#3b82f6,_-2px_-2px_0_#3b82f6]
                                        mb-1
                                        w-full
                                        border border-dotted border-blue-400 rounded-xl
                                        bg-blue-50
                                        focus:outline-none
                                        p-2
                                        "
                            value={title}
                            name="title"
                            onChange={onChange}
                            />
                        </div>

                        <div
                        className="flex flex-row gap-2 justify-between items-center"
                        >
                            <div
                            className="text-sm bg-blue-300 w-20 text-center rounded-full text-white"
                            >
                                {board.writer}
                            </div>

                            <div
                            className="text-xs text-gray-400"
                            >· {board.reg_date}</div>
                        </div>
                        <hr 
                        className="border-blue-400 border-dashed mb-5"
                        />


                        <textarea
                        className="text-gray-800 whitespace-pre-wrap 
                                    tracking-tight text-sm leading-7
                                    border border-dotted border-blue-400 rounded-xl
                                    bg-blue-50
                                    p-2
                                    focus:outline-none
                                    resize-none
                                    [&::-webkit-scrollbar]:w-3
                                    [&::-webkit-scrollbar-track]:bg-blue-100
                                    [&::-webkit-scrollbar-thumb]:bg-blue-300
                                    [&::-webkit-scrollbar-thumb]:rounded-full
                                    hover:[&::-webkit-scrollbar-thumb]:bg-blue-400
                                    "
                        rows={20}
                        name="contents"
                        value={contents}
                        onChange={onChange}
                        />

                        <hr 
                        className="border-blue-400 border-dashed mt-5"
                        />
                            <div
                            className="flex flex-row gap-5 justify-start mt-10"
                            >
                                <button
                                    className="border-2 border-red-400 px-3 py-1 rounded-full text-red-400 font-bold hover:bg-red-400 hover:text-white transition"
                                    onClick={onClickEdit}
                                >확인</button>
                            </div>
                    </div>	

                </div>
        
                <div className="mb-4">
        
                </div>
              </main>
        </div>
    )
}