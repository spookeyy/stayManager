import React from 'react';

export default function ResetPasswordForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // For demonstration purposes, let's log the email entered
    const email = e.target.resetPasswordEmail.value;
    console.log('Reset password for email:', email);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-4">Reset Password</h1>
      <div className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="resetPasswordEmail" className="block text-gray-700 text-sm font-bold mb-2">
              Enter your email address:
            </label>
            <input
              type="email"
              id="resetPasswordEmail"
              name="resetPasswordEmail"
              placeholder="email@example.com"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex items-center justify-between mb-4">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Reset Password
            </button>
          </div>
        </form>
      </div>
      <div className="max-w-md mx-auto text-center">
        <p className="text-sm text-gray-600 mb-2">
          Please enter your email address above. We'll send you a link to reset your password.
        </p>
        <p className="text-sm text-gray-600">
          If you're not sure which email address you used to register, please contact support.
        </p>
        <div className="mt-4">
          <a
            href="/contact"
            className="text-blue-500 hover:text-blue-700 font-medium focus:outline-none focus:underline"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
}
