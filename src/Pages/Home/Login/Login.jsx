import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("guest");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log({ email, password, role });
    if (role === "guest") navigate("/guest-dashboard");
    if (role === "coach") navigate("/coachProfile");
    if (role === "champ") navigate("/champProfile");
    if (role === "gym") navigate("/gymProfile");
  };

  return (
    <div
      className="flex items-center justify-center h-screen bg-no-repeat bg-cover bg-center backdrop-blur-lg"
      style={{
        backgroundImage: `url('https://png.pngtree.com/thumb_back/fh260/background/20230625/pngtree-minimalist-cartoon-search-bar-element-in-3d-illustration-on-light-blue-image_3677201.jpg')`,
      }}
    >
      <div className="flex flex-col md:flex-row w-full max-w-4xl bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        {/* Left Side - Image */}
        <div
          className="w-full md:w-1/2 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/6ff8aa57490547.59d7a60d50a42.gif')",
          }}
        ></div>

        {/* Right Side - Login Form */}
        <div className="w-full md:w-1/2 p-6 md:p-8 bg-cyan-500">
          {" "}
          {/* cyan background for login form */}
          <h2 className="text-2xl  text-white font-bold mb-6 text-center dark:text-white">
            Login to Your Account
          </h2>
          {/* Login Form */}
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label
                className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border rounded-lg shadow-sm dark:bg-gray-700 dark:text-white"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-3 py-2 border rounded-lg shadow-sm dark:bg-gray-700 dark:text-white"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* Role Selection */}
            <div className="mb-6">
              <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
                Role
              </label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg shadow-sm dark:bg-gray-700 dark:text-white"
              >
                <option value="guest">Guest</option>
                <option value="coach">Coach</option>
                <option value="champ">Champ</option>
                <option value="gym">Gym</option>
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Login
            </button>
          </form>
          {/* Links */}
          <div className="mt-6 text-center">
            <a
              href="/forgot-password"
              className="text-sm text-blue-700 hover:underline"
            >
              Forgot Password?
            </a>
          </div>
          <div className="mt-2 text-center">
            <span className="text-sm dark:text-gray-300 text-gray-800 ">
              Don't have an account?
            </span>
            <a
              href="/signup"
              className="text-sm text-blue-700 hover:underline ml-1"
            >
              Sign up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
