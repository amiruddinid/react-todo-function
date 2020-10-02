import React, { useState } from 'react'
import List from './List'

export default function Todo(props) {
  const {todo, add, remove, edit, complete, completeAll, children} = props;
  const [value, setValue] = useState('')
  return (
    <div className="Todo">
        {children}
        <input type="text" onChange={(e) => setValue(e.target.value) }/>
        <button type="button" onClick={() => add(value)}>Add</button>
        <button type="button" onClick={() => completeAll()}>Complete All</button>
        <List 
          todo={todo} 
          remove={remove} 
          edit={edit}
          complete={complete}
        />
      </div>
  )
}