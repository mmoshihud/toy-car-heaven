import { getAuth } from "firebase/auth";
import { useContext } from "react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.form?.pathname || "/";

  const handleLoginForm = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    if (email.length < 1) {
      return;
    }
    signIn(email, password)
      .then(() => {
        event.target.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const showPasswordHandle = () => {
    setShowPassword(!showPassword);
  };
  return (
    <form
      onSubmit={handleLoginForm}
      className="flex h-screen items-center justify-center bg-gradient-to-r from-teal-300 via-cyan-400 to-sky-700"
    >
      <div className="w-1/3 rounded-2xl bg-white p-6 shadow-2xl">
        <h1 className="mb-3 text-center text-4xl font-bold">Login</h1>
        <p className="mb-3 text-center text-lg text-gray-600">
          Welcome Back! Please enter your details
        </p>
        <label className="mb-2 block text-xl" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          name="email"
          className="mb-2 w-full border px-2 py-1 text-xl focus:outline-none"
          placeholder="Enter Email"
        />
        <label className="mb-2 block text-xl" htmlFor="password">
          Password
        </label>
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          className="mb-4 w-full border px-2 py-1 text-xl focus:outline-none"
          placeholder="Enter Password"
        />
        <input
          onChange={showPasswordHandle}
          checked={showPassword}
          type="checkbox"
          className="mr-2"
        />
        <span className="mb-4 text-base">
          {showPassword ? "Hide Password" : "Show Password"}
        </span>
        <button
          type="submit"
          className="mt-4 w-full rounded-xl border-2 border-accent bg-accent px-5 py-2 text-xl font-bold text-white hover:bg-transparent hover:text-accent"
        >
          Login
        </button>
        <button
          type="submit"
          className="my-4 w-full rounded-xl border-2 border-accent px-5 py-2 text-xl font-semibold text-slate-500"
        >
          <img
            className="mr-2 inline h-8 w-8"
            src="https://img.icons8.com/?size=512&id=17949&format=svg"
            alt="google"
          />
          Sign in with Google
        </button>
        <Link to="/register" className="block text-center text-gray-400">
          Dont'have an account?
          <span className="ml-1 font-bold text-black">Sign up for free</span>
        </Link>
      </div>
    </form>
  );
};

export default Login;
