import React from "react";
import { 
    useUpdateTodosDoneMutation,
    useDeleteTodosMutation
 } from "../redux/todosApi";

export const Todo = ({text, id, done}) => {
    const [updateTodosDone] = useUpdateTodosDoneMutation();
    const [deleteTodos] = useDeleteTodosMutation();

    const handleUpdateTodosDone = async (id) => {
        const updateTask = {
            id: id,
            text,
            done: !done
        };
        await updateTodosDone(updateTask)
    };

    const handleDeleteTodos = async (id) => {
        await deleteTodos(id)
    };

    return (
        <>
            <li>
                <div>
                    <input type="checkbox" id={id} name="todo" onChange={() => handleUpdateTodosDone(id)}/>
                    <label htmlFor={id}>{text}</label>
                    <button onClick={() => handleDeleteTodos(id)}>Delete</button>
                </div>
            </li>
        </>
    )
}