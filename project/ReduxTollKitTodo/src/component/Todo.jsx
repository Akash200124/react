import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo,updateTodo } from "../Featuers/todo/todoslice";

function Todo() {

    const todos = useSelector((state) => state.todos)
    const dispatch = useDispatch();

    
    

    return (
        <>
            <div>todo </div>
            {todos.map((todo) => (
                <li key={todo.id}>
                    {todo.text}
                    <button
                    className="ml-3 my-3 bg-red-600 p-2 rounded-lg "
                        onClick={() => dispatch(removeTodo(todo.id))}
                    >X</button>
                </li>
            ))}

          
         

        </>


    )
}

export default Todo