import { createSlice, nanoid } from "@reduxjs/toolkit";
import { act } from "react";

const initialState = {
    todos: [
        {
            id: 1,
            text: "hello world"
        }
    ]
}


export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        // we have always excess of the state and action in the reduces methods 
        // state - give us the acess of what is actually the initalstate values 
        // action - it give us the value like id 
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload

            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        updateTodo:(state,action)=>{
            const newtext = action.payload
            state.todos = state.todos.map((todo)=> todo.id === newtext.id ? todo.text = newtext.text : todo )

            console.log('newtext',newtext)
            console.log('text',newtext.text)
            // addTodo(state,action)
        }

    }
})


// second step 
export const {addTodo, removeTodo,updateTodo} = todoSlice.actions

// this is mendatory 
export default todoSlice.reducer