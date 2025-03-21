"use client";

import { SetStateAction, useState, useEffect } from "react";

export default () => {
    const [todos, setTodos] = useState<string[]>([]);
    const [newTodo, setNewTodo] = useState('');
    const [markedTodos, setMarkedTodos] = useState<number[]>([]);

    useEffect(() => {
        const savedTodos = JSON.parse(localStorage.getItem('todos') || '[]');
        const savedMarkedTodos = JSON.parse(localStorage.getItem('markedTodos') || '[]');
        setTodos(savedTodos);
        setMarkedTodos(savedMarkedTodos);
    }, []);

    useEffect(() => {
        if (todos.length > 0 || markedTodos.length > 0) {
            localStorage.setItem('todos', JSON.stringify(todos));
            localStorage.setItem('markedTodos', JSON.stringify(markedTodos));
        }
    }, [todos, markedTodos]);

    const onChange = (e: { target: { value: SetStateAction<string>; }; }) => {
        setNewTodo(e.target.value);
    }

    const toggleMarkTask = (index: number) => {
        setMarkedTodos(prev => 
            prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
        );
    }

    return (
        <div className="p-4">
            <input type="text"
                value={newTodo}
                onChange={onChange}
                placeholder="New Todo"
                className="border border-gray-300 rounded-lg p-2 mr-4"
            />
            <button onClick={() => {
                setTodos([...todos, newTodo]);
                setNewTodo('');
            }}
            className="bg-yellow-500 text-white py-2 px-5 rounded-lg"
            >Add</button>
            <ul className="mt-4 flex flex-col gap-4">
                {todos.map((newTodo, index) => (
                    <li 
                        className={`cursor-pointer ${markedTodos.includes(index) ? 'line-through text-red-600' : ''}`} 
                        key={index} 
                        onClick={() => toggleMarkTask(index)}
                    >
                        {newTodo}
                    </li>
                ))}
            </ul>
        </div>
    )
}