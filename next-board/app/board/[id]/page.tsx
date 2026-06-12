"use client"

import { boardType } from "@/app/type/boardType";
import Link from "next/link";
import { useParams } from "next/navigation"
import { useEffect, useState } from "react";

export default function BoardDetail(){

    // SAMPLE DATA의 경우
    // board/[id] => id의 객체를 찾아야함
    // findIndex를 사용하여 id가 같은 배열의 번지를 리턴
    // boardList[index]

    // 비동기로 DB에서 가져오기
    const params = useParams();
    const idx = params.id;

    // 받아온 자료를 저장할 변수 => useState()

    const [board, setBoard] = useState<boardType | null>(null);

    useEffect(() => {
        const getFetchBoard = async() => {
            try {
                const response = await fetch(`/api/board/${idx}`);
                if(!response.ok) throw new Error('게시글을 불러오지 못했습니다.');
                const datas = await response.json();
                setBoard(datas);
            } catch (error) {
                console.log(error);
                setBoard(null);
            }
        }

        getFetchBoard();

    },[])

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


    const onClickDelete = async() => {

        const isConfirm = confirm('게시글을 삭제하시겠습니까? (삭제한 게시글은 되돌릴 수 없습니다.)');

        if(!isConfirm) return;

        try {           
            const response = await fetch(`/api/board/${idx}`,{
                method: 'DELETE'
            })

            if(response.ok){
                alert('게시글 삭제가 완료되었습니다.')
                window.location.href = "/board"
            } else {
                alert('삭제에 실패했습니다. 다시 시도해주세요.')
            }
    
        } catch (error) {
            console.log(error);
        }

    };

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
                            <div
                            className="text-5xl font-bold text-white
                                        [text-shadow:_2px_2px_0_#3b82f6,_-2px_2px_0_#3b82f6,_2px_-2px_0_#3b82f6,_-2px_-2px_0_#3b82f6]
                                        mb-1
                                        "
                            >
                                {board.title}
                            </div>
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


                        <div
                        className="text-gray-800 whitespace-pre-wrap tracking-tight text-sm leading-7"
                        >
                            {board.contents}
                        </div>

                        <hr 
                        className="border-blue-400 border-dashed mt-5"
                        />
                            <div
                            className="flex flex-row gap-5 justify-start mt-10"
                            >
                                <button
                                    className="border-2 border-blue-400 px-3 py-1 rounded-full text-blue-400 font-bold hover:bg-blue-400 hover:text-white transition"
                                ><Link href={`/board/${board.id}/modify`}>수정</Link>
                                </button>
                                <button
                                    className="border-2 border-red-400 px-3 py-1 rounded-full text-red-400 font-bold hover:bg-red-400 hover:text-white transition"
                                    onClick={onClickDelete}
                                >삭제</button>
                            </div>
                    </div>	

                </div>
        
                <div className="mb-4">
        
                </div>
              </main>
        </div>
    )
}