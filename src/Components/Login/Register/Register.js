import React from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();
    const navigateLogin = event=>{
        navigate('/login')
    }
  return (
    <div>
      <div class="flex items-center justify-center min-h-screen bg-gray-100">
        <div class="px-8 py-6 mx-4 mt-4 text-left bg-white shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3">
          <h3 class="text-2xl font-bold text-center">Join us</h3>
          <form action="">
            <div class="mt-4">
              <div>
                <label class="block" for="Name">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  re
                  class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
              <div class="mt-4">
                <label class="block" for="email">
                  Email
                </label>
                <input
                  type="text"
                  placeholder="Email"
                  required
                  class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
              <div class="mt-4">
                <label class="block">Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  required
                  class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
              <div class="mt-4">
                <label class="block">Confirm Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  required
                  class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
              <span class="text-xs text-red-400">Password must be same!</span>
              <div class="flex">
                <button class="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">
                  Create Account
                </button>
              </div>
              <div class="mt-6 text-grey-dark">
                Already have an account?
                <span className="text-orange-400 cursor-pointer" onClick={navigateLogin}>Log In</span>
               
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
