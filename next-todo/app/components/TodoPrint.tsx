import { useState } from "react"

interface Todo {
    id: number,
    completed: boolean,
    task: string,
    deadline: string
}

interface Todos {
    todos: Todo[],
    onClickDelete: (id:number) => void
    onClickComplete: (id:number) => void
}

export default function TodoPrint({todos, onClickDelete, onClickComplete}:Todos){
    
    // const [edit, setEdit] = useState(false);
    
    return(
        <div
        className="flex flex-col gap-3 w-full"
        >
            {
                todos.map((todo) => (
                    <div
                    key={todo.id}
                    >
                        <div
                        className="flex flex-row gap-10 justify-between items-center mb-3"
                        >
                            <input 
                            type="checkbox"
                            className="m-1
                            appearance-none h-4 w-7 rounded-full border
                            border-blue-400 checked:border-blue-500 checked:bg-blue-500
                            " 
                            checked={todo.completed}
                            onChange={() => onClickComplete(todo.id)}
                            />
                            
                            <div
                            className="w-1/5 text-start ml-2 font-bold text-blue-100 [text-shadow:_1px_1px_0_#3b82f6,_-1px_1px_0_#3b82f6,_1px_-1px_0_#3b82f6,_-1px_-1px_0_#3b82f6]"
                            >
                                {todo.id}
                            </div>

                            {/* task 내용 누르면 수정할 수 있게 만들기 */}

                            {/* edit? 
                                (
                                    <input 
                                        type="text"
                                        value={todo.task}
                                        onChange={(e) => updateTodo(todo.id, e.target.value)}
                                        onBlur={() => setEdit(false)} 
                                        onKeyDown={(e) => {
                                            e.key === 'Enter' ? setEdit(false) : setEdit(true);
                                        }}
                                        className="w-3/5 border rounded border-blue-500 focus:outline-none"
                                        />
                                )

                                :  */}


                            {                            
                                (
                                    <div
                                    className={`w-3/5 text-start ${todo.completed ? 'text-blue-100' : 'text-black'}`}
                                    // onClick={() => setEdit(true)}
                                    >
                                        {todo.task}
                                    </div>
                                )
                            }

                            <div
                            className="w-1/5 text-start text-gray-300 text-sm">
                                {todo.deadline}
                            </div>

                            <button
                            className="text-xs font-bold w-10 h-6 rounded border-1 border-red-500 text-red-500 cursor-pointer hover:bg-red-500 hover:text-white transition"
                            onClick={() => onClickDelete(todo.id)}
                            >×</button>
                        </div>
                        <hr
                        className="border-blue-300"
                        />
                    </div>
                    
                ))
            }
        </div>
    )
}