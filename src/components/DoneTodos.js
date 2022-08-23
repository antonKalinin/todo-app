import React from "react";
import {useGetDoneTodosQuery} from '../redux/todosApi';
import { Todo } from "./Todo";

export const DoneTodos = () => {
    const {data = []} = useGetDoneTodosQuery();

    return (
        <div id="tasks">
        {
            data.length == 0 && <h2>No done tasks...</h2>
        }
        {
            data.map(item => {
                return <Todo key={item.id} {...item}/>
            })
        }
        </div>
    )
}