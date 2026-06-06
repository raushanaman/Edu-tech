import { useState } from "react";

export const DerivedState=() =>{
    const [user,setUser]=useState([
        { name:"ram",age:25},
        { name:"shyam",age:35},
        { name:"hari",age:45},
        { name:"gita",age:55},
        { name:"sita",age:65}

    ]);
    const userCount = user.length;
    const avgAge = (user.reduce((acc, item)=> acc + item.age, 0))/userCount;
    return(
        <div>
        <h1>Derived State User list</h1>
        <ul>
            {user.map((item,index)=>(
                <li key={index}>
                    {item.name}-{item.age} years old
                </li>
            ))}
        </ul>
        
        <h3>Total users:{userCount}</h3>
        <h3>Average age:{avgAge.toFixed(2)}</h3>


        
        </div>
)
}