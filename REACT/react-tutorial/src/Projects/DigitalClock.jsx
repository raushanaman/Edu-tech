import React, { useState, useEffect } from "react";

export const Clock = () => {
    const [time, setTime]=useState(new Date());

    useEffect(()=>{
        const interval = setInterval(()=>{
            setTime(new Date());
        }, 1000);
        return()=> clearInterval(interval);
    },[]);

    return(
        
        <div className="min-h-screen bg-gray-900 flex items-center justify-center">
            <div className="bg-gray-800 rounded-2xl shadow-2xl p-10 flex flex-col items-center gap-4">
            <h1 className="text-white text-2xl font-semibold tracking-widset uppercase">
                Real time Digital Clock.</h1>
            <h2 className="text-red-700 text-6xl font-bold tracking-widset font-mono">
               
                {time.toLocaleTimeString()}
                </h2>
            <h2 className="text-gray-400 text-xl tracking-wide">
                
                {time.toLocaleDateString()}
                </h2>
        </div>
        </div>
    )
}