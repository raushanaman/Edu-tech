import { useState } from "react";


export const Registration = ()=>{
    const [user, setUser] = useState({

        firstName:"",
        lastName:"",
        email:"",
        password:"",
        phoneNumber:""

    });
    const handleInputChange = (e)=>{
        const {name,value}= e.target;

        setUser((prev)=>({...prev, [name]:value}));
        }
    

    const handleFormSubmit = (e)=>{
        e.preventDefault();

        

        console.log(user);
        
    }
    return(
        <>
        <form onSubmit={handleFormSubmit}>
            <div className="max-w-md mx-auto mt-10 p-6">
                <h1 className="text-2xl font-bold mb-2">Sign Up</h1>
                <p className="text-gray-600 mb-4">Please fill this form to  create an account.</p>

                <label htmlFor="firstName" className="block font-semibold mb-1">
                    <b>First Name</b>
                </label>
                <input type="text" 
                name="firstName"
                placeholder="Enter firstName"
                required
                value={user.firstName}
                onChange= {handleInputChange}
               className="w-full border border-gray-300 rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"/>


                <label htmlFor="lastName" className="block font-semibold mb-1">
                    <b>Last Name</b>
                </label>
                <input type="text" 
                name="lastName" 
                placeholder="Enter lastName" 
                required
                value={user.lastName}
                onChange= {handleInputChange}
               className="w-full border border-gray-300 rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500" />


                <label htmlFor="email" className="block font-semibold mb-1">
                    <b>Email</b>
                </label>
                <input type="email"
                name="email"
                placeholder="Enter Email"
                required
                value={user.email}
                onChange= {handleInputChange}
               className="w-full border border-gray-300 rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500" />

                <label htmlFor="password" className="block font-semibold mb-1">
                    <b>Password</b>
                </label>
                
                <input type="password"
                placeholder="Enter Password"
                name="password"
                required
                 value={user.password}
                onChange= {handleInputChange}     
                className="w-full border border-gray-300 rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <label htmlFor="phone" className="block font-semibold mb-1">
                    <b>Phone Number</b>
                </label>
                <input type="phone" name="phoneNumber" placeholder="9798876543" required
                 value={user.phoneNumber}
                 onChange= {handleInputChange}
                className="w-full border border-gray-300 rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500" />

                <p className="text-sm text-gray-600 mb-4">
                    By creating an account you agree to our 
                    <a href="#" className="text-blue-600 hover:underline">Terms & Privacy</a>.
                </p>
                <div className="clearfix">
                    <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition-colors">
                        Sign Up
                    </button>
                </div>
            </div>
        </form>
        </>
    )
}
