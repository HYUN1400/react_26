"use client"

import { useSearchParams } from "next/navigation"

export default function Param3(){

    const search = useSearchParams();
    const idName = search.get('idName');
    const age = search.get('age');
    
    return(
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
              <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
                
                <div
                className="text-2xl font-bold"
                >
                  PARAM3 AREA ? [id]
                </div>

                <div>
                    id: {idName} / age: {age}
                </div>

                {/* 학생명 띄우기 */}

              </main>
        </div>
    )
}