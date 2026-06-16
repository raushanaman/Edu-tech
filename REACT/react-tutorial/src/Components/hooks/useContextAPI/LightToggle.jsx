import {createContext, use, useState} from "react";


// step 1: Create a context

export const ThemeContext = createContext();

// step 2: Create a provider component


export const ThemeProvider = ({children})=>{

    const [theme,setTheme] = useState("dark");

    const handleToggleTheme = () =>{
        return setTheme((prev)=>prev === "dark"? "light":"dark")
    }

    return (
    <ThemeContext.Provider value={{theme, handleToggleTheme}}>
        {children}
        </ThemeContext.Provider>
    );
};


// creating a component;

export const DarkLight = ()=>{

// step 3: use the context

    const {theme,handleToggleTheme} = use(ThemeContext);
    return (
        <div className={`p-4 h-lvh flex flex-col justify-center 
            items-center bg-blue-900 ${theme=== "dark"? "bg-gray-800":"bg-white"}
        `}>
    <div className="">
        <h1 className={`my-4 text-xl
        ${theme === "light" ? "text-gray-800": "text-white"}`}>Toggle button concept project</h1>
        <p className={`my-4 text-xl
        ${theme === "light" ? "text-gray-800": "text-white"}`}>hello everyone this side aman</p>
        <button onClick={handleToggleTheme}
        className="bg-blue-500 hover:bg-green-600 text-white rounded-md mt-4 p-4"
        >
            {theme === "dark" ? "switch to light mode": "switch to dark mode"}
            </button>
    </div>
    </div>
    )
}

