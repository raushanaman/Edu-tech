import { useState } from 'react'
export const Input = (props)=>{
    const {name, setName} = props;
    return(
        <>
        <input type="text" placeholder="Enter your name"
            value={name}
            onChange={(e)=> setName(e.target.value)}
        />

        </>
    )

}