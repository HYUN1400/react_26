import { UserType } from "@/app/type/UserType";

type users = {
    users: UserType[];
    onClickDelete: (id:number) => void;
    onClickToggle: (id:number) => void;
}

export default function User({users, onClickDelete, onClickToggle}:users) {
    return(
        <>
            {
                users.map((user) => (
                <div 
                    className="text-sm mb-5 font-semibold text-blue-600"  
                    key={user.id}
                    style={{ color: user.active ? '#00c950' : 'black' }}
                >
                    {user.id} . {user.userName} ({user.email})
                    <button 
                        className="px-3 py-1 ml-3 rounded bg-red-500 text-white hover:bg-red-600 cursor-pointer"
                        onClick={() => onClickDelete(user.id)}
                    >×</button>
                    <button
                        className="px-3 py-1 ml-3 rounded bg-blue-500 text-white hover:bg-blue-600 cursor-pointer"
                        onClick={() => onClickToggle(user.id)}
                    >
                        토글
                    </button>
                </div>
            ))
            }
        </>
    )
}