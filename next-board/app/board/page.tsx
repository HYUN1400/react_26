import BoardList from "../components/board/BoardList";

export default function Board(){
    return(
        <div className="flex flex-col flex-1 items-center justify-center 
                            font-sans bg-yellow-50 dark:bg-black                    
                            ">
              <main className="flex flex-1 w-full max-w-3xl flex-col 
                              items-center gap-10 py-13 px-16 dark:bg-black sm:items-start">
                <div
                  className="w-full"
                >
                  <BoardList />
                </div>
        
                <div className="mb-4">
        
                </div>
              </main>
        </div>
    )
}