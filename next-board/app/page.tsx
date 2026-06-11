import Image from "next/image";
import BoardList from "./components/board/BoardList";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center 
                    font-sans bg-yellow-50 dark:bg-black                    
                    ">
      <main className="flex flex-1 w-full max-w-3xl flex-col justify-center
                      items-center gap-10 py-13 px-16 dark:bg-black sm:items-start">
          <div
          className="flex flex-col"
          >
            <div
              className="font-extrabold text-5xl text-blue-500"
            >
              HELLO ━━━━━━
            </div>
            <div
              className="font-black text-4xl text-yellow-50
                        [text-shadow:_2px_2px_0_#3b82f6,_-2px_2px_0_#3b82f6,_2px_-2px_0_#3b82f6,_-2px_-2px_0_#3b82f6]
                        "
            >NEXT-BOARD</div>
            <div
              className="font-extrabold text-5xl text-blue-500"
            >HAVE A GOOD DAY</div>
          </div>
      </main>
    </div>
  );
}
