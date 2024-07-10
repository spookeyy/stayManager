import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/AuthContext';

function Register() {

  const nav = useNavigate();
  const {register_user} = useContext(UserContext)

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [repeatPassword, setRepeatPassword] = useState()
  const [username, setUserName] = useState()
  const [phone_number, setPhone_number] = useState()
  const [is_admin, setIs_admin] = useState(false)


  // console.log(email, password, repeatPassword, username, phone_number, is_admin);
  function handleSubmit(e){
    // console.log(email, password, repeatPassword, username, phone_number, is_admin);
    e.preventDefault()

    if(password !== repeatPassword){
      toast.error("Passwords do not match")
      return
    }
    register_user(username, email, password, phone_number, is_admin);
    setEmail("")
    setPassword("")
    setRepeatPassword("")
    setUserName("")
    setPhone_number("")
    setIs_admin(false)
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-semibold mb-6 text-center text-gray-800">Register</h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="name"
              className="block text-lg font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              value={username || ""}
              onChange={(e) => setUserName(e.target.value)}
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
              placeholder="username"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-lg font-medium text-gray-700"
            >
              Email address
            </label>
            <input
              id="email"
              type="email"
              value={email || ""}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
              placeholder="email@example.com"
            />
          </div>
          <div>
            <label
              htmlFor="phone_number"
              className="block text-lg font-medium text-gray-700"
            >
              Phone Number
            </label>
            <input
              type="text"
              id="phone_number"
              value={phone_number || ""}
              onChange={(e) => setPhone_number(e.target.value)}
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
              placeholder="Phone Number"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-lg font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password || ""}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
              placeholder="Password"
            />
            </div>
          <div>
            <label
              htmlFor="password"
              className="block text-lg font-medium text-gray-700"
            >
              repeat Password
            </label>
            <input
              type="password"
              value={repeatPassword || ""}
              onChange={(e) => setRepeatPassword(e.target.value)}
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
              placeholder="Password"
            />
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="terms"
              className="rounded border-gray-300 text-blue-500 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
            <label htmlFor="terms" className="ml-2 block text-lg text-gray-900">
              I agree to the{" "}
              <Link to="/terms" className="text-blue-500">
                Terms
              </Link>{" "}
              and{" "}
              <Link to="/privacy" className="text-blue-500">
                Privacy Policy
              </Link>
            </label>
          </div>
          <button
            type="submit"
            className="w-full py-3 px-4 bg-blue-500 hover:bg-blue-600 text-lg text-white font-semibold rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Sign up
          </button>
        </form>
        <div className="mt-6 border-t border-gray-200"></div>
        <div className="mt-6">
          <p className="text-lg text-center text-gray-700">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
