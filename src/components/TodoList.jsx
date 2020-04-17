import React, {useState} from 'react';
import axios from 'axios';
import TodoItems from './TodoItems';


export default function TodoList() {
    
    const [todos, setTodos] = useState([]);

    function getTodos(){
        axios.get("http://localhost:5000/api/todos/")
            .then(res => {
                setTodos(res.data);
                }
            )
            .catch(err => console.log(err));
    }

    window.onload = getTodos();

    function renderTodos(todos){
        return(
        <TodoItems
            key={todos._id}
            id={todos._id}
            action={todos.action}
        />
        )
    }
    
    
   
    return(
        <>
            <div className='todo-list'>
                <table className='table'>
                    <thead className='table-header'>
                        <tr>
                            <th>
                                Your To Do(s)
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        
                            {todos.map(renderTodos)}
                       
                    </tbody>
                </table>
            </div>
        </>
     )
    
}

