import React, { useEffect } from "react";
import {Todos} from './Todos';
import {DoneTodos} from './DoneTodos';
import { Routes, Route, Link } from "react-router-dom";

export const Main = () => {
    
    return (
        <section className="task-list">
            <menu className="menu">
                <Link className='menu__item' to='/'>Tasks</Link>
                <Link className='menu__item' to='done'>Done</Link>
            </menu>
            <Routes>
                <Route path="/" element={<Todos />}/>
                <Route path="done" element={<DoneTodos />}/>
            </Routes>

        </section>
    )
};