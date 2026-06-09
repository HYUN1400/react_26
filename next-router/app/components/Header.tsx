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
                className="flex flex-row gap-10 text-white-500 text-sm font-semibold"
                >
                   <Link href="/comp1">comp1</Link>
                   <Link href="/comp2">comp2</Link>
                   <Link href="/comp3">comp3</Link>
                </div>
            </nav>
        </div>
    )
}