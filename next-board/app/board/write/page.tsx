"use client"

import Link from "next/link";
import { useState } from "react";

export default function Write(){

    const [form, setForm] = useState({
        title: '',
        writer: '',
        contents: ''
    });

    const {title, writer, contents} = form;

    const onChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    }

    // 서버로 데이터 전송
    const onSubmit = async() => {
        // title, writer, contents 가 없으면 alert
        if(!title || !writer || !contents){
            alert('게시글을 작성해주세요!')
            return;
        }

        //서버로 등록 => /api/board (POST)
        // fetch('url', config)
        // get을 제외한 method는 config 정보를 포함하여 전송
        // response(응답) => 서버가 화면으로 / request(요청) => 화면이 서버로
        
        const response = await fetch(`/api/board`, {
            method: 'POST',
            headers: {
                'content-Type' : 'application/json'
            },
            body: JSON.stringify(form)
        });

        //전송 후 이동할 경로
        window.location.href = "/board"
    }


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
                        className="text-5xl font-bold text-yellow-50
                                    [text-shadow:_2px_2px_0_#3b82f6,_-2px_2px_0_#3b82f6,_2px_-2px_0_#3b82f6,_-2px_-2px_0_#3b82f6]
                                    mb-1
                                    "
                        >
                            글쓰기
                        </div>

                        <form>
                            <div
                                className="flex flex-col gap-3 mb-6"
                            >              
                                <input 
                                    type="text"
                                    className="font-bold text-gray-600 border-3 border-blue-400 rounded-xl h-10 bg-white pl-3 focus:outline-none"
                                    placeholder="제목"
                                    name="title"
                                    value={title}
                                    onChange={onChange}
                                />
                                <input 
                                    type="text"
                                    className="border-2 border-blue-400 rounded-xl w-20 bg-blue-50 ml-auto focus:outline-none text-center"
                                    placeholder="작성자"
                                    name="writer"
                                    value={writer}
                                    onChange={onChange}
                                />
                            </div>
                            <hr className="border-blue-400 border-dashed mb-10 w-full m-auto" />
                            <textarea 
                                id=""
                                className="text-gray-700 border-2 border-blue-400 resize-none focus:outline-none p-2 rounded-xl bg-white w-full"
                                rows={20}
                                name="contents"
                                value={contents}
                                onChange={onChange}
                            >
                            </textarea>

                            <div
                            className="flex flex-row gap-5 justify-start mt-10"
                            >
                                <button
                                    className="border-2 border-blue-400 px-3 py-1 rounded-full text-blue-400 font-bold hover:bg-blue-400 hover:text-white transition"
                                    type="button"
                                    onClick={onSubmit}
                                >작성</button>
                                <button
                                    className="border-2 border-red-400 px-3 py-1 rounded-full text-red-400 font-bold hover:bg-red-400 hover:text-white transition"
                                    type="reset"
                                >초기화</button>
                            </div>

                        </form>
                    </div>	

                </div>
        
                <div className="mb-4">
        
                </div>
              </main>
        </div>
    )
}