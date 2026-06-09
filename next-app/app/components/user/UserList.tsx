import { UserProps } from "@/app/type/UserType";

const User = ({user, index}:UserProps) => {

    return(
            <div className="text-sm m-1 font-semibold text-blue-500"  key={index}>
                {user.id} | {user.userName}({user.email})
            </div>
    )

}

export default function UserList(){

    const users = [
        {
            id: 1,
            userName: 'test1',
            email: 'test1@gmail.com'
        },
        {
            id: 2,
            userName: 'test2',
            email: 'test2@gmail.com'
        },
        {
            id: 3,
            userName: 'test3',
            email: 'test3@gmail.com'
        }
    ];


    return(
        <>
            {
                users.map((user, index) => (
                    <User user={user} index={index} />
                ))
            }
        </>
    )
}