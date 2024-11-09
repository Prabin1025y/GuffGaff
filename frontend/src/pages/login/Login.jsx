import React, { useState } from 'react'
import useLogIn from '../../hooks/useLogIn';
import { Link } from 'react-router-dom';

const Login = () => {

    const [loginData, setLoginData] = useState({
        username: "",
        password: ""
    });

    const { login, isLoading } = useLogIn();

    const handleLoginDataChange = (event) => {

        setLoginData((prev) => ({ ...prev, [event.target.name]: event.target.value }));

    }

    const handleOnSubmit = async (event) => {
        event.preventDefault();

        await login(loginData);

    }

    return (
        <div className="flex flex-col justify-center font-[sans-serif] h-[98vh] p-0 sm:p-4">
            <div className="max-w-md w-full mx-auto bg-sky-950 shadow-xl rounded-2xl p-8">
                <div className="text-center mb-6">
                    <h2>GuffGaff</h2>
                </div>

                <form onSubmit={handleOnSubmit}>
                    <p className='text-3xl font-semibold mb-2 flex justify-center'>Login</p>
                    <div className="space-y-6">
                        <div>
                            <label className=" text-sm mb-2 block">Username</label>
                            <input onChange={handleLoginDataChange} value={loginData.username} name="username" type="text" className=" bg-sky-800  w-full text-sm px-4 py-3 rounded-md outline-blue-500 placeholder:text-white" placeholder="Enter username" />
                        </div>
                        <div>
                            <label className=" text-sm mb-2 block">Password</label>
                            <input onChange={handleLoginDataChange} value={loginData.password} name="password" type="password" className=" bg-sky-800  w-full text-sm px-4 py-3 rounded-md outline-blue-500 placeholder:text-white" placeholder="Enter password" />
                        </div>
                    </div>

                    <div className="!mt-6">
                        <button type="submit" className="w-full py-3 px-4 text-sm tracking-wider font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none" disabled={isLoading}>
                            {isLoading ? <span className='loading loading-spinner'></span> : "Login"}
                        </button>
                    </div>
                    <p className=" text-sm mt-6 text-center">Don't have an account yet? <Link to="/signup" className="text-blue-600 font-semibold hover:underline ml-1">Register here</Link></p>
                </form>
            </div>
        </div>
    )
}

export default Login