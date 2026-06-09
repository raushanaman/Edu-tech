import { useState } from "react";

export const Counter = ()=>{
    const [count,setCount] = useState(0);
    const [step,setStep] = useState(0);
    
    const handleIncrement = ()=>{
        if(step===0){
            setCount(count+1);
        }
        else{

            setCount(count+step);
        }
    }
    
    const handleDecrement = ()=>{
        if(step===0){
            setCount(count-1);
        }
        else{

            setCount(count-step);
        }    }
    
    const handleReset = ()=>{
        setCount(0);
    }



    return(
        <div className="min-h-screen bg-gray-900 flex items-center justify-center">
            <div className="bg-gray-800 rounded-2xl shadow-2xl p-10 flex flex-col items-center gap-6 w-80">

                <h1 className="text-white text-2xl font-bold tracking-wide uppercase">
                    Counter Challenge
                </h1>

                <p className="text-green-400 text-6xl font-mono font-bold">
                    {count}
                </p>

                <div className="flex flex-col items-center gap-2 w-full">
                    <label className="text-gray-400 text-sm font-semibold uppercase tracking-widest">
                        Step
                    </label>
                    <input
                        type="number"
                        value={step}
                        onChange={(e) => setStep(Number(e.target.value))}
                        className="w-full text-center bg-gray-700 text-white rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-green-400"
                    />
                </div>

                <div className="flex gap-3 w-full">
                    <button
                        onClick={handleIncrement}
                        disabled={count >= 100}
                        className="flex-1 bg-green-500 hover:bg-green-600 disabled:opacity-40 text-white font-bold py-2 rounded-lg transition">
                        + Inc
                    </button>
                    <button
                        onClick={handleDecrement}
                        disabled={count <= 0}
                        className="flex-1 bg-red-500 hover:bg-red-600 disabled:opacity-40 text-white font-bold py-2 rounded-lg transition">
                        - Dec
                    </button>
                    <button
                        onClick={handleReset}
                        className="flex-1 bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 rounded-lg transition">
                        Reset
                    </button>
                </div>
            </div>
        </div>
    )
}