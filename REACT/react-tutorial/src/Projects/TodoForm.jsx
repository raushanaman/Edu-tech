import { useState } from "react";

export const TodoForm = ({addTask})=>{

    const [task,setTask]=useState("");
    const handleSubmit = ()=>{
        addTask(task);
        setTask("");
    }

    return (
        <>
        <input type="text" value = {task} onChange={(e)=>setTask(e.target.value )} placeholder="enter your task"/>
        <button onClick={handleSubmit}>Add Task</button>
        </>
    )

};
