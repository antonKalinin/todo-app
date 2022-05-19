import React from "react";

export const Todo = ({text, id, handleDeleteTodos}) => {
    return (
        <>
            <li>{text} <button onClick={() => handleDeleteTodos(id)}>Delete</button></li>
        </>
    )
}