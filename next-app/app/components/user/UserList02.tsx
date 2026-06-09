import { useMemo, useRef, useState } from "react"
import PrintUser from "./PrintUser"
import CreateUser from "./CreateUser"

export default function UserList02(){
    // users 등록, 삭제, 수정 useState() 관리

    const [users, setUsers] = useState([
        {
            id: 1,
            userName: 'test1',
            email: 'test1@gmail.com',
            active: true
        },
        {
            id: 2,
            userName: 'test2',
            email: 'test2@gmail.com',
            active: false
        },
        {
            id: 3,
            userName: 'test3',
            email: 'test3@gmail.com',
            active: false
        }
    ])

    const [inputs, setInputs] = useState({
            userName: '',
            email: ''
        });
    const {userName, email} = inputs;
    const nextId = useRef(4);
    
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;

        setInputs({
            ...inputs,
            [name]:value
        })
    }
    
    const onClickCreate = () => {
        const newUser = {
            id: nextId.current,
            userName: userName,
            email: email,
            active: false
        }

        if (!userName || email == null || email === "") {
            return;
        }
    
        setUsers([...users, newUser]);
    
        nextId.current += 1;
    
        setInputs({
            userName:'',
            email:''
        })
    }


    const onClickDelete = (id:number) => {
        const currentUser = users.filter((user) => user.id !== id);
        setUsers(currentUser)
    }

    const onClickToggle = (id:number) => {
        setUsers(
            users.map(user=> user.id === id ? {...user, active: !user.active}: user)
        )
    }

    const activeUser = () => {
        return users.filter(user => user.active).length;
    }

    const activeUserCount = useMemo(() => activeUser(), [users])
    const allUserCount = useMemo(() => users.length, [users])


    return(
        <>
            {/* user를 등록할 input => createUser 컴포넌트 */}
            <CreateUser
                userName={userName} 
                email={email} 
                onChange={onChange} 
                onClickCreate={onClickCreate}
            />

            {/* 출력에 필요한 컴포넌트 UserList1 */}
            <PrintUser 
                users={users} 
                onClickDelete={onClickDelete}
                onClickToggle={onClickToggle} 
            />

            <div>현재 활동 중인 유저: {activeUserCount} / {allUserCount}</div>
        </>
    )
}