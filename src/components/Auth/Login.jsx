import React, { useState } from 'react';

const Login = ({ handleLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        handleLogin(email, password);
        setEmail('');
        setPassword('');
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
            <div className="w-full max-w-md p-10 rounded-3xl bg-gray-950 shadow-2xl border border-emerald-500">
                <h2 className="text-3xl font-semibold text-white mb-6 text-center">Welcome Back</h2>
                <form onSubmit={submitHandler} className="flex flex-col space-y-5">
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        type="email"
                        placeholder="Email"
                        className="w-full py-3 px-5 bg-gray-900 text-white border border-emerald-500 rounded-full placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
                    />
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        type="password"
                        placeholder="Password"
                        className="w-full py-3 px-5 bg-gray-900 text-white border border-emerald-500 rounded-full placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
                    />
                    <button
                        type="submit"
                        className="w-full py-3 px-5 bg-emerald-600 text-white text-lg font-medium rounded-full hover:bg-emerald-500 transition duration-300"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
