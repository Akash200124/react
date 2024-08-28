import { createContext, useContext } from "react";

// add default value 
export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "to msg",
            compeleted: false
        }

    ],
    addTodo: (todo) => { },
    updateTOdo: (id, todo) => { },
    deleteTodo: (id) => { },
    toggleCompleted: (id) => { }
})

// to wrap 
export const TodoProvider = TodoContext.Provider

// custom hook 

export const useTodo = () => {

    return useContext(TodoContext);
}