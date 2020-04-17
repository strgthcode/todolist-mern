import React from 'react';
import Input from './Input';
import TodoList from './TodoList';


export default function Content(){
    return(
        <>
            <div className='content'>
                <Input />
                <TodoList />
            </div>
        </>
    )
}