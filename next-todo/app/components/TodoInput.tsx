interface TodoProps {
    onChangeTodo: (e: React.ChangeEvent<HTMLInputElement>) => void,
    onClickTodo: () => void,
    task: string,
    deadline: string
}

export default function TodoInput({onChangeTodo, onClickTodo, task, deadline}:TodoProps){

    return(
        <div
        className="flex flex-row gap-5"
        >
            <input 
            type="text"
            className="border-b border-blue-500 px-2 w-1/2 focus:outline-none"
            name='task'
            value={task}
            onChange={onChangeTodo}
            />
            <input 
            type="date"
            className="border border-dotted border-blue-500 rounded w-1/3 text-sm pl-3 text-blue-500"
            name='deadline'
            value={deadline} 
            onChange={onChangeTodo}
            />
            <button
            className="w-10 rounded bg-blue-500 text-white text-sm hover:cursor-pointer hover:bg-blue-600 transition"
            onClick={onClickTodo}
            >
                등록
            </button>
        </div>
    )
}