import React, { useContext, useState } from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';
import {UserContext} from '../context/AuthContext';

function Login() {

    const {login_user} = useContext(UserContext)

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()


    function handleSubmit(e){
        e.preventDefault()

        login_user(email, password)


        setEmail("")
        setPassword("")
    }

  return (
    <div
      className="bg-cover bg-center bg-no-repeat bg-fixed h-screen"
      style={{ backgroundImage: "url('/path/to/your/background-image.jpg')" }}
    >
      <Header />
      <div className="flex items-center justify-center h-full">
        <div className="max-w-md w-full bg-white bg-opacity-90 shadow-md rounded-lg p-8">
          <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
            Login
          </h1>
          
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <input
                type="email"
                value={email || ""}
                onChange={(e) => setEmail(e.target.value)}
                className="form-input mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="email@example.com"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password || ""}
                onChange={(e) => setPassword(e.target.value)}
                className="form-input mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Password"
                // autoComplete="current-password"
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  className="form-checkbox h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300 rounded shadow-sm"
                />
                <label
                  htmlFor="remember"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <Link
                  to="/reset-password"
                  className="font-medium text-blue-600 hover:text-blue-500"
                >
                  Forgot your password?
                </Link>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Sign in
            </button>
          </form>
          <div className="mt-4 text-center">
            <span className="text-sm text-gray-600">
              Don't have an account?
            </span>{" "}
            <Link
              to="/register"
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
