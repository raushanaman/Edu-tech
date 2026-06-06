import { useState } from "react";

export const Statehandling =()=>{
    const [count,setCount]=useState(0);
    const handleIncreament = ()=>{

        setCount(count+1);
    }
    return(
        <>
        <h1>{count}</h1>
        <button onClick={handleIncreament}>increament</button>
        </>
    )

}