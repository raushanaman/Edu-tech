// import {Card} from "./Components/Card";
// import { EventHandling } from "./Components/EventHandling";
// import { EventPropagation } from "./Components/EventPropagation";
// import { DerivedState } from "./Components/hooks/DerivedState";
// import { Statehandling } from "./Components/hooks/State";
// import { DerivedState } from "./Components/hooks/DerivedState";
// import { Input } from "./Components/hooks/Input";
// import { Display } from "./Components/hooks/Display";
// import { TodoForm } from "./Projects/TodoForm";
// import { TodoList } from "./Projects/TodoList";
// import { Counter } from "./Projects/Challenge";
// import { Registration } from "./Projects/Registration";
// import { ContactForm } from "./Projects/ContactForm";
// import { LoginForm } from "./Projects/LoginForm";
// import "./Projects/Todo.css";
import {ThemeProvider} from "./Components/hooks/useContextAPI/LightToggle";
import { DarkLight } from "./Components/hooks/useContextAPI/LightToggle";
// import { HowNotToFetchApi } from "./Components/hooks/UseEffect/HowNotToFetchApi";

// import { Pokemon } from "./Projects/Pokemon";
// import {UseRefs} from "./Components/hooks/UseRefs/UseRefs";
// import { ReactUseEffect } from "./Components/hooks/UseEffect";

// import { Clock } from "./Projects/DigitalClock";

// // import { ToggleSwitch } from "./Projects/ToggleSwitch";

// import { useState } from "react";
export default function App() {
    // const [name,setName]= useState();
        // const [todos, setTodos]=useState([]);

        // const addTask = (task)=>{
        //     if(task.trim()==="")return;
        //     setTodos([{text: task, done: false}, ...todos]);
        // }

        // const deleteTask = (indexToDelete)=>{
        //     setTodos(todos.filter((_,index)=> index !==indexToDelete));
        // }

        // const editTask = (indexToEdit, newText)=>{
        //     setTodos(todos.map((todo, index)=>
        //         index === indexToEdit ? {...todo, text: newText} : todo
        //     ));
        // }

        // const toggleDone = (indexToToggle)=>{
        //     setTodos(todos.map((todo, index)=>
        //         index === indexToToggle ? {...todo, done: !todo.done} : todo
        //     ));
        // }
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
            {/* <TodoForm addTask = {addTask}/>
            <TodoList todos={todos} deleteTask={deleteTask} editTask={editTask} toggleDone={toggleDone}/> */}
            {/* <Clock /> */}
            {/* <Counter /> */}
            {/* <Registration /> */}
            {/* <LoginForm /> */}
            {/* <ContactForm /> */}


            {/* <ReactUseEffect/> */}
            {/* <HowNotToFetchApi /> */}
            {/* <Pokemon/> */}

            {/* <UseRefs/> */}

            <ThemeProvider>
                <DarkLight/>

            </ThemeProvider>
        </section>
    );
}



