// GET / POST / PUT / DELETE
// GET: 화면으로 데이터를 가져오기
// POST: 화면에서 데이터 보내기
// PUT: 화면에서 만든 데이터 보내기 (수정)
// DELETE: 화면에서 삭제 요청

import db from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";


// 1 전체 게시글 조회 GET
// => /api/board 경로로 오는 GET 요청 처리 메서드
export async function GET(){
    try {
        const [rows] = await db.query('SELECT * FROM board ORDER BY id DESC')
        return NextResponse.json(rows);
    } catch (error:any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}

// 2 게시글 등록 POST
export async function POST(req: NextRequest){
    try {
        const {title, writer, contents} = await req.json();
        const [result] = await db.query(
            'INSERT INTO board(title, writer, contents) VALUES(?,?,?)',
            [title, writer, contents]
        );

        console.log(result);
        return NextResponse.json({message:'게시글 등록 성공', result}, {status:200});
        
    } catch (error:any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}