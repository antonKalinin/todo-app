import React, {useState} from "react";
import {useGetTodosQuery, useAddTodosMutation, useDeleteTodosMutation} from '../redux/todosApi';
import { Todo } from "./Todo";
import { NewTodo } from "./NewTodo";

export const Todos = () => {
    const {data = []} = useGetTodosQuery();
    const [addTodos, {isLoading}] = useAddTodosMutation();
    const [deleteTodos] = useDeleteTodosMutation();

    const handleAddTodos = async (text) => {
        const newTask = {
            text,
            done: false
        };
        await addTodos(newTask).unwrap()
    };

    const handleDeleteTodos = async (id) => {
        await deleteTodos(id)
    };
    
    return (
        <section>
            <NewTodo handleAddTodos={handleAddTodos}/>
            <ul>
                {
                    data.map(item => {
                        return <Todo key={item.id} {...item} handleDeleteTodos={handleDeleteTodos}/>
                    })
                }
            </ul>
        </section>
    )
}