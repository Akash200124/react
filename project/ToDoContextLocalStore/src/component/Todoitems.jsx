import React, { useState } from "react";
import { useTodo } from "../Context";

function Todoitems({todo}){

    const {updateTOdo,toggleCompleted,deleteTodo} = useTodo()

    const[TodoEditble,setTodoEditble]= useState(false)
    const[todoMsg,setTodoMsg] = useState(todo.todo)


    const editTodo= ()=>{
        updateTOdo(todo.id ,{...todo,todo: todoMsg})
        setTodoEditble(false)
    }   

    const toggleComplete = ()=>{
        toggleCompleted(todo.id)
    }


    return(
        <div
        className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
            todo.compeleted ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
        }`}
    >
        <input
            type="checkbox"
            className="cursor-pointer"
            checked={todo.compeleted}
            onChange={toggleComplete}
        />
        <input
            type="text"
            className={`border outline-none w-full bg-transparent rounded-lg ${
                TodoEditble ? "border-black/10 bg-white px-2" : "border-transparent"
            } ${todo.compeleted ? "line-through" : ""}`}

            value={todoMsg}
            onChange={(e) => setTodoMsg(e.target.value)}
            readOnly={!TodoEditble}
        />
        {/* Edit, Save Button */}
        <button
            className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50 ${TodoEditble}"

            onClick={() => {
                if (todo.compeleted) return;

                if (TodoEditble) {
                    editTodo();
                } else setTodoEditble((prev) => !prev);
            }}

            disabled={todo.compeleted}
        >
            {TodoEditble ? "📁" : "✏️"}
        </button>
        {/* Delete Todo Button */}
        <button
            className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
            onClick={() => deleteTodo(todo.id)}
        >
            ❌
        </button>
    </div>
    )
}

export default  Todoitems