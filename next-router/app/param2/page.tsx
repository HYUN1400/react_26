"use client"

import { useSearchParams } from "next/navigation"

export default function Param2(){

    // queryString => searchParams

    const search = useSearchParams();
    console.log(search);

    // get 
    const id = search.get('id');
    const nick = search.get('nick');

    return(
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
              <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
                
                <div
                className="text-2xl font-bold"
                >
                  PARAM2 AREA ? [id]
                </div>

                <div>
                    id: {id} / nick: {nick}
                </div>
              </main>
        </div>
    )
}