import React from "react";
import {useGetTodosQuery,} from '../redux/todosApi';
import { Todo } from "./Todo";

export const Todos = () => {
    const {data = []} = useGetTodosQuery();
    
    return (
        <section className="task-list">
            <h2>Tasks</h2>
            <div id="tasks">
                {
                    data.map(item => {
                        return <Todo key={item.id} {...item}/>
                    })
                }
            </div>
        </section>
    )
}