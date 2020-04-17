import React from 'react'

export default function Footer(){
    const year = new Date().getFullYear();

    return(
        <>
            <div className='footer'>
                <p>Copyright strgth CODE, {year} </p>
            </div>
        </>
    )
}