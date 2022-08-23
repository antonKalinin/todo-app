import React, {useState} from "react";
import {useAddTodosMutation} from '../redux/todosApi';
import { task } from '../helper/taskObj';


export const Header = () => {
    const [text, setText] = useState('');
    const [addTodos] = useAddTodosMutation();

    const handleAddTodos = async (text, e) => {
        e.preventDefault();
        const newTask = task(text, false);
        await addTodos(newTask).unwrap();
        setText('')
    };

    return (
        <header>
		<h1>Todo List</h1>
		<form id="new-task-form">
			<input 
				type="text" 
                value={text}
				name="new-task-input" 
				id="new-task-input" 
				placeholder="What do you have planned?"
                onChange={(event) => setText(event.target.value)}
                />
			<input 
				type="submit"
                onClick={(e) => handleAddTodos(text, e)}
				id="new-task-submit" 
				value="Add task" />
		</form>
	</header>
    )
}