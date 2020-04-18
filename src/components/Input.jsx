import React, {useState} from 'react';
import axios from 'axios';

export default function Input(){

    const [input, setInput] = useState({
        action: ""
    });

    function handleChange(e){
        const value = e.target.value;

        setInput({
            action: value
        });
    }


    function addTodo(){

        if(input.action && input.action.length > 0){
            axios
              .post("http://localhost:5000/api/todos", input)
              .then(res => {
                  if(res.data){

                      setInput({
                          action: ""
                      });
                      
                  } else {
                      console.log('input field required');
                  }
              })
              .catch(err => console.error(err));
              
        }

    }



    return(
        <>
            <h1>Add your To Do(s)</h1>       
            <div className='input'>
                <input 
                    type='text' 
                    placeholder='Enter your To Do(s)'
                    onChange={handleChange}
                    value={input.action} />
                <button onClick={addTodo}>Add Todo</button>    
            </div>
        </>
    )
}