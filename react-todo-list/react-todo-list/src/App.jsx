import { useEffect, useState } from "react"
import { NewTodoForm } from "./NewTodoForm"
import { TodoList } from "./TodoList"
import "./styles.css"

export default function App() {
  // these are our states
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []

    return JSON.parse(localValue)
  })

  // useEffect is a hook that allows you to perform side effects in your components.
  // cannot use hooks conditionally, they have to be at the top level of your component.
  // components follow a similar structure 
  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  // addTodo function to add a new todo
  function addTodo(title) {
    setTodos(currentTodos => [
      ...currentTodos,
      { id: crypto.randomUUID(), title, completed: false },
    ])
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          // anytime you want to change your state, you need to make sure you are not 
          // mutating the existing state because React needs to know when the state has changed.
          return { ...todo, completed }
        }
        return todo
      })
    })
  }

  // we can do the same thing with delete 
  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }
  // when I try to copy and do 2 todos it wont work, it will take an empty away
  // and adds a new value, which makes the 1st obsolete
  // when you want to modify this data, you need to pass the function. 
  // use the one argument ex. currentTodos

  return (
    <>
      <NewTodoForm onSubmit={addTodo} />
      {/*       
          important React note, you can only have 1 element in a form 
          so use a fragment (an empty tag: <> </>) to differentiate your components if needed! 
      */}
      <h1 className="header">Todo List</h1>
      {/* instead of hardcoding the lists, we can make it dynamic with maps*/}
      <TodoList
        todos={todos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo} />
    </>
  )
}