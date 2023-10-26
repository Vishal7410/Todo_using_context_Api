import React, { useState } from 'react'

function AddTodo({updateList}) {

  const [inputText, setInputText] = useState('');

  return (
    <div>
        <input 
        type="text"
        value = {inputText}
        placeholder="Add Your Next Todo....."
        onChange={e => setInputText(e.target.value)}

         />
         <button onClick={() => updateList(inputText)}>Add</button>
    </div>
  )
}

export default AddTodo