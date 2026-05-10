import { TodoItem } from "./TodoItem";

export function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul className="list">
        {/* This is short circuiting in JS down below with && */}
        {todos.length === 0 && "No Todos"}
        {todos.map(todo => {
          return (
            <TodoItem 
            {...todo} 
            key={todo.id} 
            toggleTodo={toggleTodo} 
            deleteTodo={deleteTodo}
          />
            ) // This will pass all my props along excatly how they are 
        })}
    </ul>
  )
}
      