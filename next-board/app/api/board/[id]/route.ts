import db from "@/app/lib/db";
import { boardType } from "@/app/type/boardType";
import { NextRequest, NextResponse } from "next/server";


// id에 해당하는 board return GET
// => /api/board/[id]
// GET(request, param) 
// _:NextRequest : (_) 사용하지 않는 변수
export async function GET(_:NextRequest,{params}:{params:{id:string}}){
    try {
        // select 조회의 return 은 반드시 배열
        // return값이 하나라면 index=0 값을 추출하여 사용

        const {id} = await params;
        const [rows] = await db.query(`SELECT * FROM board WHERE id=?`, [id])
        
        // 게시글 없을 때
        if((rows as boardType[]).length === 0) {
            return NextResponse.json({message:'존재하지 않는 게시글입니다.'}, {status: 404})
        }

        return NextResponse.json((rows as boardType[])[0]);

    } catch (error:any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}


//수정
export async function PUT(req: NextRequest){
    try {
        const {id, title, contents} = await req.json();
        const [result] = await db.query(
            `UPDATE board SET title=?, contents=? WHERE id=?`,
            [title, contents, id]
        );

        return NextResponse.json({message:'게시글 수정 성공', result}, {status:200});

    } catch (error:any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}

//삭제
export async function DELETE(_:NextRequest,{params}:{params:{id:string}}){
    try {
        const {id} = await params;
        const [result] = await db.query(
            `DELETE FROM board WHERE id=?`,
            [id]
        );

        return NextResponse.json({message:'게시글 삭제 완료', result}, {status:200});

    } catch (error:any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}