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
            onDelete={()=>{
                getTodos();
            }}
        />
        )
    }
    
    
   
    return(
        <>
            <h1>Your To Do(s)</h1>        
            <div>
                <table>
                    <thead>
                        <tr>
                            <th className='table-head description'>Description</th>
                            <th className='table-head action'>Actions</th>
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

