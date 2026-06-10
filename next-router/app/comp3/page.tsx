"use client"
import Link from "next/link"
import React, { useState } from "react"
import { students } from "../data/data";

export default function Comp3(){

  // 컴포넌트에서 다른 컴포넌트로 이동 데이터를 전달하기 
  // html => html / html => 서버 / 컴포넌트 => 컴포넌트
  // 1) Path variable => http://localhost:3000/comp1/{...}/{...} 
  // 2) Query String => http://localhost:3000/comp1?id=1&page=3

  // NEXT
  // path variable => params 객체로 접근 ([id] 동적폴더 사용)
  // query string => searchParams 객체로 접근 (?key=value&key=value...)

    const id = '1'

    const [inputs, setInputs] = useState({
      idName: '',
      age: ''
    });

    const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
      const {name, value} = e.target;
      setInputs({
        ...inputs,
        [name]:value
      })
    }

    const {idName, age} = inputs;

    const studentPrint = () => {
      return(
        <>
          {students.map((student) => (
              <Link 
              key={student.id}
              className="border border-blue-500 rounded w-50 px-5 py-2 mb-4 text-center text-blue-500 font-bold hover:bg-blue-500 hover:text-white transition-colors"
              href={`/param3/${student.name}`}>{student.name}        
              <div
              className="text-xs text-gray-300"
              >({student.phone})</div></Link>
          ))}
        </>
      )
    }

    return(
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
              <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
                
                <div
                className="text-2xl font-bold mb-10"
                >
                  COMP3 AREA 
                </div>

                <div
                className="flex flex-col gap-6 justify-center"
                >
                  {/* path variable => param.tsx 컴포넌트에 값을 전달 */}
                  <Link href={`/param/${id}`}
                  className="bg-blue-500 text-white px-10 py-2 rounded text-center font-bold"
                  >path variable로 데이터 전달</Link>

                  {/* query string 방법으로 param2.tsx 전달 */}
                  <Link href={`/param2?id=1234&nick=abcd`}
                  className="bg-blue-500 text-white px-10 py-2 rounded text-center font-bold"
                  >Query string으로 전달</Link>

                  <Link href={`/param2?id=2345&nick=bcde`}
                  className="bg-blue-500 text-white px-10 py-2 rounded text-center font-bold"
                  >Query string으로 전달 2</Link>

                  {/* query string param으로 idName, age 전송
                      idName, age => input

                  */}
                  <div
                  className="flex flex-row gap-3 h-7"
                  >
                    <input 
                      type="text"
                      name="idName" 
                      value={idName} 
                      onChange={onChange}
                      className="border border-blue-500 w-30" />
                    <input 
                      type="text" 
                      name="age" 
                      value={age}
                      onChange={onChange}
                      className="border border-blue-500 w-30" />
                    <Link href={`/param?idName=${idName}&age=${age}`}
                    className="text-sm bg-green-500 text-white px-3 py-1 rounded text-center font-bold"
                    >전송</Link>
                  </div>

                    {/* Students 데이터 출력
                        => students.name : param3/name 으로 전달
                        ※ 한 폴더 안에 동적 폴더가 여러 개면 Error / page.tsx도 여러개 있을 수 없음
                    */}

                    <div
                    className="flex flex-col items-center mt-10">
                      <div
                      className="text-2xl font-bold mb-3"
                      >
                        STUDENTS
                      </div>
                      {studentPrint()}
                    </div>

                </div>
              </main>
            </div>
    )
}