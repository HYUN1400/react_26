"use client"
import { useRef, useState } from "react";
import { todolist } from "./data/todolist";
import TodoPrint from "./components/TodoPrint";
import TodoInput from "./components/TodoInput";

export default function Home() {

  //FUNCTION

  const nextId = useRef(5);

  const [todos, setTodos] = useState([
    ...todolist
  ])

  const [inputs, setInputs] = useState({
      id: null,
      completed: false,
      task: '',
      deadline: ''
  });

  const {id, task, completed, deadline} = inputs;

  const onChangeTodo = (e:React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]:value
    });
  }

  const onClickTodo = () => {

    if (task.trim() === '' || !deadline) return;

    const newTodo = {
      id: nextId.current,
      completed: false,
      task: task,
      deadline: deadline.slice(-5)
    }

    setTodos([
      ...todos,
      newTodo
    ])

    setInputs({
    id: null,
    completed: false,
    task: '',
    deadline: ''
  });

   nextId.current += 1;
  }

  const onClickDelete = (id:number) => {
    setTodos(
      todos.filter((todo) => todo.id !== id)
    )
  }

  const onClickComplete = (id:number) => {
    setTodos(
      todos.map((todo) => (todo.id === id)? {...todo, completed: !todo.completed} : todo)
    )
  }

  // const updateTodo = (id:number, updateTask:string) => {
  //   setTodos(
  //     todos.map((todo) => todo.id === id? {...todo, task:updateTask} : todo)
  //   )
  // }


  // RETURN

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div 
      className="flex w-150 h-160 rounded shadow flex-col py-15 px-16 
                bg-white dark:bg-black overflow-y-scroll
                [&::-webkit-scrollbar]:w-2
                [&::-webkit-scrollbar-track]:bg-blue-100
                [&::-webkit-scrollbar-thumb]:bg-blue-400
                [&::-webkit-scrollbar-thumb]:rounded-full
                hover:[&::-webkit-scrollbar-thumb]:bg-blue-500"
      >
        
        <div
        className="flex flex-col items-center justify-center w-full"
        >
          <div
            className="text-3xl font-extrabold text-blue-500 mb-3"
          >
            TODOLIST
          </div>
          
          <div
          className="border-1 mb-7 bg-yellow-50 w-full text-center text-blue-400 py-1 text-sm font-bold"
          >
            해야 할 일을 기록하세요!
          </div>

          <TodoInput 
            onChangeTodo={onChangeTodo}
            onClickTodo={onClickTodo}
            task = {task}
            deadline = {deadline}
          />

          <div className="mb-12"></div>

          <TodoPrint 
            todos={todos}
            onClickDelete={onClickDelete}
            onClickComplete={onClickComplete}
            // updateTodo={updateTodo}
          />
          
        </div>
      </div>
    </div>
  );
}
