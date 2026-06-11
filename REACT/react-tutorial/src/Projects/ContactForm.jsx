import { useState } from "react";

export const ContactForm = () => {

    const [formData, setFromData] = useState({
        username: "",
        password: "",
        message: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFromData({
            ...formData, [name]: value
        });
    }
    const handleLogin = (e) => {
        e.preventDefault();
        if (formData.username == "aman@gmail.com" && formData.password == "1234") {
            const msg = formData.message;

            alert(msg);

            setFromData({
                username: "",
                password: "",
                message: ""
            });

        }
        else {
            alert("invalid credentials");
        }
    }




    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center px-4">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl shadow-2xl w-full max-w-md p-10">

                <div className="text-center mb-8">
                    <div className="text-5xl mb-3">🔐</div>
                    <h2 className="text-3xl font-bold text-white">Welcome Back</h2>
                    <p className="text-white/60 text-sm mt-1">Sign in to your account</p>
                </div>

                <form onSubmit={handleLogin} autoComplete="off" className="flex flex-col gap-5">

                    <div className="flex flex-col gap-1">
                        <label className="text-white/80 text-sm font-medium">Email</label>
                        <input
                            type="text"
                            name="username"
                            placeholder="Enter your email"
                            required
                            autoComplete="off"
                            value={formData.username}
                            onChange={handleChange}
                            className="bg-white/10 border border-white/30 text-white placeholder-white/40 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition"
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="text-white/80 text-sm font-medium">Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            required
                            autoComplete="off"
                            value={formData.password}
                            onChange={handleChange}
                            className="bg-white/10 border border-white/30 text-white placeholder-white/40 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition"
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-white/80 text-sm font-medium">TextArea</label>
                        <textarea type="text" 
                            placeholder="Enter your message" 
                            name="message" 
                            value={formData.message}
                            onChange={handleChange}></textarea>
                    </div>

                    <button className="mt-2 w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-purple-500/40 transition duration-300 cursor-pointer">
                        Send Message
                    </button>

                </form>
            </div>
        </div>
    )
}