import React, {useState} from 'react';


export default function TodoItems(props){

    const [complete, setComplete] = useState(false);

    function handleComplete(){
        setComplete(!complete);
    }

    return(
        <>
        <tr className='table-row'>
         <td style={{textDecoration: complete ? 'line-through' : 'none'}} onClick={handleComplete}>{props.action}</td>
        </tr>
       
                
        </>
    )
}