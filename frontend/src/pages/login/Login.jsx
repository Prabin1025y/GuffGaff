import React from 'react'

const Login = () => {
    return (
        <div className="flex flex-col justify-center font-[sans-serif] h-[98vh] p-4">
            <div className="max-w-md w-full mx-auto bg-sky-950 shadow-xl rounded-2xl p-8">
                <div className="text-center mb-6">
                    <h2>GuffGaff</h2>
                </div>

                <form>
                    <p className='text-3xl font-semibold mb-2 flex justify-center'>Login</p>
                    <div className="space-y-6">
                        <div>
                            <label className=" text-sm mb-2 block">Username</label>
                            <input name="username" type="text" className=" bg-sky-800  w-full text-sm px-4 py-3 rounded-md outline-blue-500 placeholder:text-white" placeholder="Enter username" />
                        </div>
                        <div>
                            <label className=" text-sm mb-2 block">Password</label>
                            <input name="password" type="password" className=" bg-sky-800  w-full text-sm px-4 py-3 rounded-md outline-blue-500 placeholder:text-white" placeholder="Enter password" />
                        </div>
                    </div>

                    <div className="!mt-6">
                        <button type="button" className="w-full py-3 px-4 text-sm tracking-wider font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
                            Login
                        </button>
                    </div>
                    <p className=" text-sm mt-6 text-center">Don't have an account yet? <a className="text-blue-600 font-semibold hover:underline ml-1">Register here</a></p>
                </form>
            </div>
        </div>
    )
}

export default Login