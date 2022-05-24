import React from "react";
import { Header } from "./components/Header";
import { Todos } from './components/Todos'

export const App = () => {
    
    
    return (
        <>
            <Header />
            <main>
                <Todos/>
            </main>
        </>
    )
}