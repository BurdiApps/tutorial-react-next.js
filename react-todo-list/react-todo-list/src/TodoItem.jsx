export function TodoItem({ completed, id, title, toggleTodo, 
deleteTodo }) { 
// pass in the fucntions as props

  return (
    <li>
      <label>
        {/* 
          make sure you are using keys when you are mapping through lists, 
          it helps React identify which items have changed, are added, or 
          are removed. Keys should be given to the elements inside the array 
          to give the elements a stable identity. 
        */}
        <input
            type="checkbox"
            checked={completed}
            onChange={e => toggleTodo(id, e.target.checked)}
        />
        {title}
      </label>
      <button
        onClick={() => deleteTodo(id)}
        className="btn btn-danger">
         Delete
      </button>
  </li>
  )    
}