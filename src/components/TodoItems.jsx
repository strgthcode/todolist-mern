import React from 'react';
import axios from 'axios';


export default function TodoItems(props){

    function handleDelete(){
        axios
          .delete(`http://localhost:5000/api/todos/${props.id}`)
          .then(res => {
              if(res.data){
                  props.onDelete();
                  console.log('Deleted Succesfully')
              }
          })
          .catch(err => console.error(err));
    }

    return(
        <>
       
            <tr>
                <td className='body-items'> 
                    {props.action} 
                </td>
                <td className='body-items'>
                    {/* <button className='action-buttons'>Edit</button> */}
                    <button className='action-buttons' onClick={handleDelete}>Complete</button>
                </td>
            </tr>
         
         

       

        </>
    )
}