"use client"
import Counter from "../components/Counter"
import InputColor from "../components/InputColor"
import InputPrint from "../components/InputPrint"

export default function Comp2(){
  // 1) count + - => 0~10 useState()
  // 2) input onChange input 글자출력 {text} useState()
  // 3) input onChange => input type="color" => h2 색상 변경


    return(
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
              <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
                <div
                className="flex flex-col gap-10"
                >
                  <Counter />
                  <InputPrint />
                  <InputColor />
                </div>
              </main>
            </div>
    )
}