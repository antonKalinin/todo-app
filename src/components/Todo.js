import React from "react";
import { 
    useUpdateTodosMutation,
    useDeleteTodosMutation
 } from "../redux/todosApi";
 import { task } from '../helper/taskObj';

export const Todo = ({text, id, done}) => {
    const [updateTodos] = useUpdateTodosMutation();
    const [deleteTodos] = useDeleteTodosMutation();
    // const [updateText, setUpdateText] = useState('');

    const handleUpdateTodos = async (id, e) => {
        const updateTask = task(text, e.target.checked, id);
        await updateTodos(updateTask);
    };

    const handleDeleteTodos = async (id) => {
        await deleteTodos(id);
    };

    return (
        <div className="task">
					<div className="content">
                        <input 
                            className="form-check-input" 
                            checked={done} 
                            type="checkbox" 
                            name="todo" 
                            onChange={(e) => handleUpdateTodos(id, e)}/>
						<input 
							type="text" 
							className="text" 
							value={text}
							readOnly
                        />
					</div>
					<div className="actions">
						{/* <button 
                            className="edit"
                        >Edit
                        </button> */}
						<button 
                            className="delete"
                            onClick={() => handleDeleteTodos(id)}
                        >Delete
                        </button>
					</div>
        </div>
    )
}