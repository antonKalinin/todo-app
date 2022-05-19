import React, {useState} from "react";

export const NewTodo = ({handleAddTodos}) => {
    const [text, setText] = useState('');
    return (
        <>
            <input 
                type='text'
                value={text}
                onChange={(event) => setText(event.target.value)}
            />
            <button onClick={() => handleAddTodos(text)}>Add</button>
        </>
    )
}