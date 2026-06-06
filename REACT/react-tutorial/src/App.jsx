// import {Card} from "./Components/Card";
// import { EventHandling } from "./Components/EventHandling";
// import { EventPropagation } from "./Components/EventPropagation";
// import { DerivedState } from "./Components/hooks/DerivedState";
// import { Statehandling } from "./Components/hooks/State";
// import { DerivedState } from "./Components/hooks/DerivedState";
// import { Input } from "./Components/hooks/Input";
// import { Display } from "./Components/hooks/Display";
import { TodoForm } from "./Projects/TodoForm";
import { TodoList } from "./Projects/TodoList";
import "./Projects/Todo.css";

// import { ToggleSwitch } from "./Projects/ToggleSwitch";

import { useState } from "react";
export default function App() {
    // const [name,setName]= useState();
        const [todos, setTodos]=useState([]);

        const addTask = (task)=>{
            if(task.trim()==="")return;
            setTodos([task, ...todos]);


        }

        const deleteTask = (indexToDelete)=>{
            const updateTodo = todos.filter((_,index)=> index !==indexToDelete);
            setTodos(updateTodo);
        }
    return (
        <section className="container">

            {/* <Card /> */}
            {/* <EventHandling /> */}
            {/* <EventPropagation /> */}
            {/* <Statehandling/> */}
            {/* <DerivedState/> */}
            {/* <Input name={name} setName={setName}/>

            <Display name={name}/> */}
            {/* <ToggleSwitch /> */}
            <TodoForm addTask = {addTask}/>
            <TodoList todos = {todos} deleteTask={deleteTask}/>
        </section>
    );
}



