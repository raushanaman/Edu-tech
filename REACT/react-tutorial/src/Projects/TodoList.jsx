import { TodoItem } from "./TodoItem";
export const TodoList = ({todos=[], deleteTask, editTask, toggleDone})=>{
    return(
        <ul>
            {todos.map((todo, index)=>(
                <TodoItem key={index}
                    todo={todo}
                    index={index}
                    deleteTask={deleteTask}
                    editTask={editTask}
                    toggleDone={toggleDone}
                />
            ))}
        </ul>
    )
}