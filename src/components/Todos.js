import React, {useState} from "react";
import {
    useGetTodosQuery,
    useAddTodosMutation
} from '../redux/todosApi';
import { Todo } from "./Todo";
import { NewTodo } from "./NewTodo";

export const Todos = () => {
    const {data = []} = useGetTodosQuery();
    const [addTodos, {isLoading}] = useAddTodosMutation();

    const handleAddTodos = async (text) => {
        const newTask = {
            text,
            done: false
        };
        await addTodos(newTask).unwrap()
    };
    
    return (
        <section>
            <NewTodo handleAddTodos={handleAddTodos}/>
            <ul>
                {
                    data.map(item => {
                        return <Todo key={item.id} {...item}/>
                    })
                }
            </ul>
        </section>
    )
}