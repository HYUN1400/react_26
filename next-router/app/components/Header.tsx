import Link from "next/link";

export default function Header(){
    // 링크 연결
    // <Link href="/path">text</Link>
    return(
        <div
        className="bg-blue-500 text-white p-7">
            <nav
            className="flex flex-row justify-between items-center"
            >
                <div
                className="text-lg font-black"
                ><Link href="/">NEXT.JS</Link></div>
                <div
                className="flex flex-row gap-10 text-white-500 text-sm font-medium"
                >
                   <Link href="/comp1" className="hover:text-blue-200 transition">LIST</Link>
                   <Link href="/comp2" className="hover:text-blue-200 transition">COUNT</Link>
                   <Link href="/comp3" className="hover:text-blue-200 transition">PARAM</Link>
                   <Link href="/comp4" className="hover:text-blue-200 transition">TODO</Link>
                </div>
            </nav>
        </div>
    )
}