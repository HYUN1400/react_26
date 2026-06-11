export default function Footer(){
    return(
        <div
            className="p-6 border-t border-blue-300 bg-blue-300"
        >
            <div
                className="mb-5 text-white font-bold"
            >
                To get started, edit the page.tsx file.
            </div>
            <div
                className="flex flex-col gap-1 text-xs items-end text-blue-100"
            >
                <div
                    className=""
                >Looking for a starting point or more instructions?</div>
                <div>Head over to Templates or the Learning center.</div>
                <div
                    className="text-white mt-3 font-semibold"
                >© NEXT.JS</div>
            </div>
        </div>
    )
}