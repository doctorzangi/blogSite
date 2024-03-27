import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthService from "../../services/auth";

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [tc, settc] = useState(false); // Set initial value to false
  const [requiredFields, setRequiredFields] = useState([]);

  const handleRegister = async (e) => {
    e.preventDefault();

    // Validation for required fields
    const required = [];
    if (!email.trim()) required.push("email");
    if (!name.trim()) required.push("name");
    if (!password.trim()) required.push("password");
    if (!password2.trim()) required.push("confirmPassword");

    if (required.length > 0) {
      setRequiredFields(required);
      return;
    }

    // Validation for email
    if (/\s/.test(email) || /^[0-9-]/.test(email)) {
      toast.error("Email cannot have digits or empty spaces");
      return;
    }

    // Validation for password
    if (
      password.length < 8 ||
      !/(?=.*\d)(?=.*[a-zA-Z])(?=.*\W)/.test(password)
    ) {
      toast.error(
        "Password must be at least 8 characters long and contain at least one digit, one special character, and one letter."
      );
      return;
    }

    if (password !== password2) {
      toast.error("Passwords don't match");
      return;
    }

    // Set tc to true before sending registration request
    settc(true);

    const formResponse = await AuthService.register({
      email,
      name,
      password,
      password2,
      tc,
    });

    console.log("formresponse", formResponse);
    if (formResponse?.error) {
      // Error: show message
      toast.error(formResponse?.msg);
      settc(false); // Set tc back to false on error
    } else {
      toast.success(formResponse?.msg);
      navigate("/dashboard");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full px-6 py-8 bg-white shadow-md overflow-hidden sm:rounded-lg">
        <h2 className="text-center text-3xl font-bold text-gray-800">
          Register
        </h2>
        <form className="mt-8 space-y-6" onSubmit={handleRegister}>
          <div className="rounded-md shadow-sm space-y-4">
            <div className="relative">
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                placeholder="email"
              />
              {requiredFields.includes("email") && (
                <span className="text-xs text-red-500 absolute top-0 right-0 mt-1 mr-2">
                  *
                </span>
              )}
            </div>
            <div className="relative">
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="name"
                autoComplete="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                placeholder="Name"
              />
              {requiredFields.includes("name") && (
                <span className="text-xs text-red-500 absolute top-0 right-0 mt-1 mr-2">
                  *
                </span>
              )}
            </div>
            <div className="relative">
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                placeholder="Password"
              />
              {requiredFields.includes("password") && (
                <span className="text-xs text-red-500 absolute top-0 right-0 mt-1 mr-2">
                  *
                </span>
              )}
            </div>
            <div className="relative">
              <label htmlFor="confirmPassword" className="sr-only">
                Confirm Password
              </label>
              <input
                id="password2"
                name="password2"
                type="password"
                autoComplete="password2"
                required
                value={password2}
                onChange={(e) => setPassword2(e.target.value)}
                className={`appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                placeholder="Confirm Password"
              />
              {requiredFields.includes("password2") && (
                <span className="text-xs text-red-500 absolute top-0 right-0 mt-1 mr-2">
                  *
                </span>
              )}
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
              Register
            </button>
          </div>
        </form>
        <div className="mt-4 text-center">
          <span className="text-sm text-gray-600">
            Already have an account?
          </span>
          <button
            onClick={() => navigate("/login")}
            className="ml-1 font-medium text-indigo-600 hover:text-indigo-500"
          >
            Log In
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
