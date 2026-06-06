import { useState } from "react";

export const TodoItem = ({todo, index, deleteTask, editTask, toggleDone})=>{
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(todo.text);

    const handleEdit = ()=>{
        if(editText.trim() === "") return;
        editTask(index, editText);
        setIsEditing(false);
    }

    return(
        <li className={todo.done ? "done" : ""}>
            {isEditing ? (
                <>
                    <input type="text" className="edit-input" value={editText} onChange={(e)=>setEditText(e.target.value)}/>
                    <button className="save-btn" onClick={handleEdit}>💾</button>
                </>
            ) : (
                <>
                    <span>{todo.text}</span>
                    <div className="btn-group">
                        <button className="done-btn" onClick={()=>toggleDone(index)}>✅</button>
                        <button className="edit-btn" onClick={()=>setIsEditing(true)}>✏️</button>
                        <button className="delete-btn" onClick={()=>deleteTask(index)}>🗑️</button>
                    </div>
                </>
            )}
        </li>
    )
}
