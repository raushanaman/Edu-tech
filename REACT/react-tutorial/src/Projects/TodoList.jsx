import { TodoItem } from "./TodoItem";
export const TodoList = ({todos =[],deleteTask})=>{
    return(
        <ul>
            {todos.map((todo, index)=>(
                <TodoItem key={index}
                    todo={todo}
                    index={index}
                    deleteTask={deleteTask}
                />
            ))}
        </ul>
    )
}