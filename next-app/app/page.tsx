"use client"
import Image from "next/image";
import Hello from "./components/Hello";
import Start from "./components/Start";
import Counter from "./components/Counter";
import Counter02 from "./components/Counter02";
import HelloProps from "./components/HelloProps";
import InputSample from "./components/InputSample";
import InputSample02 from "./components/InputSample02";
import UserList from "./components/user/UserList";
import UserList02 from "./components/user/UserList02";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <h1 className="text-3xl font-bold my-5">HELLO Next.js</h1>

        {/* react => app.js
            react => 파일명과 함수명이 동일해야 함
            next => 파일명과 함수명이 달라도 상관없음.
              layout.tsx, page.tsx 은 약속된 이름이기 때문에 함부로 사용 X
        */}

        <Hello />
        <Start />

        <Counter />
        <Counter02 num={100} />

        <HelloProps name={'peter'} age={15} />

        <InputSample />
        <InputSample02 />


        <UserList02 />
        <div className="mb-20"></div>
    </div>
  );
}