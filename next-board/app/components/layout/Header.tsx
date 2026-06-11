import Link from "next/link";

export default function Header(){
    return(
        <div
        className="border-b border-blue-500"
        >
            <nav
                className="flex flex-row justify-between items-center p-6"
            >
                <div>
                    <Link 
                        href={"/"}
                        className=" text-3xl text-white 
                                    [text-shadow:_2px_2px_0_#3b82f6,_-2px_2px_0_#3b82f6,_2px_-2px_0_#3b82f6,_-2px_-2px_0_#3b82f6]
                                    hover:text-blue-500 transition font-extrabold
                                    hover:[text-shadow:_2px_2px_0_#FFFFFF,_-2px_2px_0_#FFFFFF,_2px_-2px_0_#FFFFFF,_-2px_-2px_0_#FFFFFF]
                                    "
                    >NEXT-BOARD</Link>
                </div>
                <div
                    className="flex flex-row gap-5"
                >
                    <Link 
                        href={"/board/write"}
                        className="border-2 border-blue-500 px-3 py-1 rounded-full text-blue-500 font-bold hover:bg-blue-500 hover:text-white transition"
                    >글쓰기</Link>
                    <Link
                        href={"/board"}
                        className="border-2 border-blue-500 px-3 py-1 rounded-full text-blue-500 font-bold hover:bg-blue-500 hover:text-white transition"
                    >게시글</Link>
                </div>
            </nav>
        </div>
    )
}