import {useState,useEffect} from "react";

export  const ReactUseEffect = ()=>{

    const [count, setCount]=useState(0);
    const [name, setName] = useState("");
    useEffect(()=>{
        console.log(name);

    },[name])
    return(
        <>
        <h1>hello  use Effect</h1>
        <p>count: {count}</p>
        <button onClick={()=>setCount(count+1)}>Increment</button>

        <p>
            Name: <span>{name}</span>
        </p>

        <input type="text"
        placeholder="Enter something here"
        value={name}
        onChange={(e)=>setName(e.target.value)}
        />
        </>
    )
}