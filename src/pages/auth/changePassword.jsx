import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthService from "../../services/auth";

const ChangePassword = () => {
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const navigate = useNavigate();

  const handlechangePassword = async (e) => {
    e.preventDefault();

    const formResponse = await AuthService.changePassword({
      password,
      password2,
    });

    console.log("formresponse", formResponse);
    if (formResponse?.error) {
      // Error: show message
      toast.error(formResponse?.msg);
    } else {
      toast.success(formResponse?.msg);
      navigate("/login");
    }
    if (!password.trim() || !password2.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full px-6 py-8 bg-white shadow-md overflow-hidden sm:rounded-lg">
        <h2 className="text-center text-3xl font-bold text-gray-800">
          Change Password
        </h2>
        <form className="mt-8 space-y-6" onSubmit={handlechangePassword}>
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label htmlFor="password" className="sr-only">
                New Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none rounded-none relative rounded-t-md block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="New Password"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Confirm New Password
              </label>
              <input
                id="password2"
                name="password2"
                type="password"
                autoComplete="password2"
                required
                value={password2}
                onChange={(e) => setPassword2(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <svg
                  className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 12a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                  <path
                    fillRule="evenodd"
                    d="M4 8v2a6 6 0 0012 0V8a2 2 0 00-2-2H6a2 2 0 00-2 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              Change Password
            </button>
          </div>
        </form>
        <div className="mt-4 text-center">
          <span className="text-sm text-gray-600">
            Login with old password?
          </span>
          <a
            href="/"
            className="ml-1 font-medium text-indigo-600 hover:text-indigo-500"
          >
            Login
          </a>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ChangePassword;
