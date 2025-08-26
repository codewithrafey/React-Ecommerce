import React from 'react'

function LoginSignup() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[linear-gradient(180deg,#fde1ff,#e1ffea22_60%)] p-4">
      <div className="container bg-white shadow-lg rounded flex flex-col justify-center max-w-md w-full mx-auto p-6 gap-5">
        <h1 className="text-2xl font-semibold text-center uppercase">Sign up</h1>

        {/* Input Fields */}
        <div className="field flex flex-col gap-4 w-full">
          <input 
            type="text" 
            id="username" 
            placeholder="Enter your username" 
            className="border text-sm rounded px-4 py-3 border-gray-500 focus:outline-none"
          />
          <input 
            type="email" 
            id="email" 
            placeholder="Enter your email" 
            className="border text-sm rounded px-4 py-3 border-gray-500 focus:outline-none"
          />
          <input 
            type="password" 
            id="password" 
            placeholder="Enter your password" 
            className="border text-sm rounded px-4 py-3 border-gray-500 focus:outline-none"
          />
        </div>

        {/* Signup Button */}
        <button className="btn bg-red-500 text-white font-semibold rounded p-3 w-full hover:bg-red-600 transition cursor-pointer">
          Signup
        </button>

        {/* Already have account */}
        <p className="text-center text-gray-600">
          Already have an account?{" "}
          <span className="text-red-600 cursor-pointer hover:underline">Login</span>
        </p>

        {/* Terms */}
        <div className="flex items-start gap-2 text-sm text-gray-600">
          <input type="checkbox" id="terms" className="mt-1 accent-red-600"/>
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
