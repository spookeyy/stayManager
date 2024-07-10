import React from 'react';

export default function ResetPasswordForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.resetPasswordEmail.value;
    console.log('Reset password for email:', email);
    // Add logic here to handle password reset (e.g., API call)
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl w-full bg-white p-8 rounded shadow-lg">
        <div>
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">Reset Password</h2>
          <p className="text-sm text-gray-600 mb-4 text-center">
            Please enter your email address below. We'll send you a link to reset your password.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="resetPasswordEmail" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              type="email"
              id="resetPasswordEmail"
              name="resetPasswordEmail"
              placeholder="email@example.com"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Reset Password
            </button>
          </div>
        </form>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            If you're not sure which email address you used to register, please{' '}
            <a
              href="/contact"
              className="text-blue-500 hover:text-blue-700 font-medium focus:outline-none focus:underline"
            >
              contact support
            </a>
            .
          </p>
        </div>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Need further assistance? Visit our{' '}
            <a
              href="/faq"
              className="text-blue-500 hover:text-blue-700 font-medium focus:outline-none focus:underline"
            >
              FAQ
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
