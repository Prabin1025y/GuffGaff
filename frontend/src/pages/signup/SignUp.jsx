import React from 'react'

const SignUp = () => {
    return (
        <div className="flex flex-col justify-center font-[sans-serif] h-[98vh] p-4">
            <div className="max-w-md w-full mx-auto bg-sky-950 shadow-xl rounded-2xl p-8">
                <div className="text-center mb-6">
                    <h2>GuffGaff</h2>
                </div>

                <form>
                    <p className='text-3xl font-semibold mb-2 flex justify-center'>Sign Up </p>
                    <div className="space-y-6">
                        <div>
                            <label className=" text-sm mb-2 block">Username</label>
                            <input name="username" type="text" required className=" bg-sky-800  w-full text-sm px-4 py-3 rounded-md outline-blue-500 placeholder:text-white" placeholder="Enter username" />
                        </div>
                        <div>
                            <label className=" text-sm mb-2 block">Password</label>
                            <input name="password" type="password" required className=" bg-sky-800  w-full text-sm px-4 py-3 rounded-md outline-blue-500 placeholder:text-white" placeholder="Enter password" />
                        </div>
                        <div>
                            <label className=" text-sm mb-2 block">Confirm Password</label>
                            <input name="cpassword" type="password" required className=" bg-sky-800  w-full text-sm px-4 py-3 rounded-md outline-blue-500 placeholder:text-white" placeholder="Enter confirm password" />
                        </div>
                        <div>
                            <label className=" text-sm mb-2 block">Gender</label>
                            <div className='flex gap-3'>
                                <div className='flex items-center gap-1'>
                                    <input type="radio" name="gender" value="male" className="form-radio text-blue-600 h-4 w-4" />
                                    <span>Male</span>
                                </div>

                                <div className='flex items-center gap-1'>
                                    <input type="radio" name="gender" value="male" className="form-radio text-blue-600 h-4 w-4" />
                                    <span>Female</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center">
                            <input id="remember-me" name="remember-me" type="checkbox" required  className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                            <label htmlFor="remember-me" className=" ml-3 block text-sm">
                                I accept the <a className="text-blue-600 font-semibold hover:underline ml-1">Terms and Conditions</a>
                            </label>
                        </div>
                    </div>

                    <div className="!mt-12">
                        <button type="submit" className="w-full py-3 px-4 text-sm tracking-wider font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
                            Create an account
                        </button>
                    </div>
                    <p className=" text-sm mt-6 text-center">Already have an account? <a className="text-blue-600 font-semibold hover:underline ml-1">Login here</a></p>
                </form>
            </div>
        </div>
    )
}

export default SignUp