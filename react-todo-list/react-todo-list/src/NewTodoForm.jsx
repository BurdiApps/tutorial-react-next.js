
// To manage code better, we will break it up into components, this is for the new todo form. 
import { useState } from "react"
export function NewTodoForm({ onSubmit }) {
  const [newItem, setNewItem] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    if (newItem === "") return

    onSubmit(newItem)
    

    setNewItem("")
  }
 
  return (
    <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          {/* 
              use onChange for whatever even listener you want to use
              in regular js you use onInput to have the value to change whever
              React uses onChange (ex.) onChange={e => setNewItem(e.target.value)}
          */}

          <input
            value={newItem}
            onChange={e => setNewItem(e.target.value)}
            type="text"
            id="item"
          />
        </div>
        <button className="btn">Add</button>
      </form>
  )
}