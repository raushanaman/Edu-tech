import { useRef } from "react";
export const UseRefs = ()=>{

    const username = useRef(null);
    const password = useRef(null);
    const handleInput=(e)=>{
        e.preventDefault();
    console.log(username.current.value);
    console.log(password.current.value);
    }
    return(
        <form onSubmit={handleInput}>
            <input type="text" placeholder="enter something" ref={username}/>
            <br /><br />
            <input type="text" placeholder="enter password" ref={password} />
            <br /><br />
            <button>submit</button>
        </form>
    )
}