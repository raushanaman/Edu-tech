export const TodoItem = ({todo,index,deleteTask})=>{
    return(
        <>
            <li>{todo}
            <button onClick={()=>deleteTask(index)}>Delete Task</button>
            </li>
        </>
    )
}