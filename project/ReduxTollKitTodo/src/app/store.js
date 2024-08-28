import { configureStore } from "@reduxjs/toolkit";
 import todoReducer from '../Featuers/todo/todoslice'

export const store = configureStore({
    reducer: todoReducer
})


// how to use redux 
/**
 1. start with creating store.js and each application should have only one store 
    it want reducer 
 2. we have to create a feature slice 
    - name of the featureSlice 
    - initial state (intial data )   
    - reducer => it contain the key and value ( function ) each funtion get 2 value in the parameter (state , action ) 
       - state => in store we get updated state value in the store 
       - action = > in action we get the action.payload 

    after completion we have to export 2 things 
    1. each functionality like add, delete and update 
    2. main source name.reducer 
    
 3. now for add and show in component 
   1.useDispatch()  - it is use to send the value in the store. for that export the reducer function like add and through reducer send the data to the store dispatch (addTodo(useState variable))   

   2.useSelector() - it is use to get the value from the store for that use callback and write the name of state  useSelector(state => state.todos{this is the name of the initial state})
     store the value in the varible and loop the data 
   
   3. for remove the value we have to send the action then we use useDispatch   
   dispatch(removeTodo(todo.id))

   where,
   dispatch is the variable of useDispatch()
   removeTodo is the reducer function 
   todo.id = we get the value using useSelector and onClick did this 

 */