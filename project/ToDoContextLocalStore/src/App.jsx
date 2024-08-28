import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from './Context'
import TodoFrom from './component/TodoFrom'
import Todoitems from './component/Todoitems'

function App() {

  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev])
  }

  const updateTOdo = (id, todo) => {
    setTodos((prev) => prev.map((prevtodo) => (prevtodo.id === id ? todo : prevtodo)))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => (todo.id !== id)))
  }

  const toggleCompleted = (id) => {
    setTodos((prev) => prev.map((prevtodo) => prevtodo.id === id ? { ...prevtodo, compeleted: !prevtodo.compeleted } : prevtodo))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  // localstoreage 


  return (
    <TodoProvider value={{ todos, addTodo, deleteTodo, toggleCompleted, updateTOdo }}>
      <div className="py-8 bg-[#172842] min-h-screen rounded-lg">
        <div className="w-full max-w-2xl mx-auto shadow-sm rounded-lg px-4 py-3 text-white">
          <h1 className='text-2xl font-bold text-center mb-8 mt-2'>Manage your todos</h1>
          <div className='mb-4'>
            <TodoFrom />
          </div>
          <div className='flex flex-wrap gap-y-3'>
            {/* to list list component  */}
            
            {todos.map((todo) => (
              <div key={todo.id} className='w-full'>
                <Todoitems todo={todo} />
              </div>
            ))}

          </div>

        </div>

      </div>
    </TodoProvider>
  )
}

export default App
