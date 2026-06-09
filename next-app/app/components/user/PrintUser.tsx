import { UserType } from "@/app/type/UserType"
import User from "./User";

type userProps = {
    users: UserType[];
    onClickDelete: (id:number) => void;
    onClickToggle: (id:number) => void;
}

export default function PrintUser({users, onClickDelete, onClickToggle}:userProps){
    return(
        <>
        {
            <User 
                users={users} 
                onClickDelete={onClickDelete}
                onClickToggle={onClickToggle} 
            />
        }
        </>
    )
}