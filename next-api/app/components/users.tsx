import { useEffect, useState } from "react"
import { userType } from "../type/type";
import axios from "axios";
import UserOne from "./userOne";

export default function Users(){

    // https://jsonplaceholder.typicode.com/users
    // 데이터를 비동기로 가져오기
    
    // LIFECYCLE 컴포넌트 생명주기
    // => 컴포넌트가 처음 렌더링 될 때 (마운트 / 언마운트)
    // => 업데이트 될 때 (특정 props의 변화)
    // 생성 => 업데이트 => 제거
    // useEffect() => 부수효과를 실행(렌더링 된 후) api 호출, 타이머

    const[users, setUsers] = useState<userType[] | null>(null);
    
    // error
    const[error, setError] = useState<string | null>(null);

    // 로딩 상태
    const[loading, setLoading] = useState<boolean>(false);

    // userOne에서 출력할 id 설정
    const[selectId, setSelectId] = useState<number | null>(null);


const fetchUser = async() => {
    try {
        // 기존값 세팅
        setError(null);
        setUsers(null);
        setLoading(true); // 로딩중

        const response = await axios.get<userType[]>('https://jsonplaceholder.typicode.com/users')
        setUsers(response.data);

    } catch (error:any) {
        setError(error);
    }

    setLoading(false);

}
        
useEffect(() => {
    fetchUser();
}, [])

if(loading) return <div>LOADING ...</div>
if(error) return <div>Error</div>    
if(!users) return <div>null</div>
    
    return(
        <div>
            <div
            className="text-2xl font-bold mb-5 mt-20 text-blue-500"
            >USER LIST AXIOS</div>
            <ul>
                {
                    users.map((user) => (
                        <div
                        key={user.id}
                        >
                            <li 
                            className="pt-2 pb-2 flex gap-2 items-center hover:text-blue-500 cursor-pointer"
                            onClick={() => setSelectId(user.id)}
                            style={{color: selectId == user.id ? '#2b7fff' : 'black'}}
                            >
                                {user.username} 
                                <div
                                className="text-xs text-gray-500"
                                >
                                    ({user.name} / {user.phone})
                                </div>
                            </li>
                            <hr
                            className="border- border-gray-300" />
                        </div>
                    ))
                }
            </ul>
            <div>
                <button 
                onClick={fetchUser}
                className="font-medium px-4 py-1 bg-blue-500 rounded text-white mt-3 cursor-pointer hover:bg-blue-600"
                >불러오기</button>
            </div>

            {/* user를 선택하면 해당 유저의 다른 정보를 표시 */}
            {/* 선택한 유저의 id 값을 props로 전달 => UserOne 컴포넌트에서 axios */}
            {/* selectId 없으면 출력 X */}
            {/* 조건부 렌더링 && */}
            {
                selectId !== null && (
                    <div>
                        <UserOne selectId={selectId} />
                        <button
                        onClick={() => setSelectId(null)}
                        className="font-medium px-4 py-1 bg-pink-500 rounded text-white mt-3 cursor-pointer hover:bg-pink-600" 
                        >닫기</button>
                    </div>
                )
            }
        </div>
    )
}