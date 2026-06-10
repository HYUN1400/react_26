"use client"
import { useParams } from "next/navigation"

export default function Param(){

    // ...~/param/abcd
    // params => useParams()

    // 한글 params는 깨짐 => 방지처리 decodeURIComponent
    const params = useParams();
    console.log(params.id);

    const id = decodeURIComponent(params.id as string);

    return(
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
              <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
                
                <div
                className="text-2xl font-bold"
                >
                  PARAM AREA / [id]
                </div>
                <div>
                    params : {id}
                </div>
              </main>
            </div>
    )
}