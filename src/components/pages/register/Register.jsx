import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleLoginForm = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);
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
        <h1 className="mb-3 text-center text-4xl font-bold">Sign Up</h1>
        <p className="mb-3 text-center text-lg text-gray-600">
          Hi there, It's free please enter your details
        </p>
        <label className="mb-2 block text-xl" htmlFor="name">
          Full Name
        </label>
        <input
          type="text"
          name="name"
          className="mb-2 w-full border px-2 py-1 text-xl focus:outline-none"
          placeholder="Enter Full Name"
        />
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
        <label className="mb-2 block text-xl" htmlFor="confirm">
          Confirm Password
        </label>
        <input
          type={showPassword ? "text" : "password"}
          name="confirm"
          className="mb-4 w-full border px-2 py-1 text-xl focus:outline-none"
          placeholder="Confirm Password"
        />
        <input
          onChange={showPasswordHandle}
          checked={showPassword}
          type="checkbox"
          className="mb-4 mr-2"
        />
        <span className="mb-4 text-base">
          {showPassword ? "Hide Password" : "Show Password"}
        </span>
        <label className="mb-2 block text-xl" htmlFor="photo_url">
          Photo Url
        </label>
        <input
          type="url"
          name="photo_url"
          className="mb-2 w-full border px-2 py-1 text-xl focus:outline-none"
          placeholder="Enter Photo URL"
        />
        <button
          type="submit"
          className="mt-4 w-full rounded-xl border-2 border-accent bg-accent px-5 py-2 text-xl font-bold text-white hover:bg-transparent hover:text-accent"
        >
          Sign Up
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
        <Link to="/login" className="block text-center text-gray-400">
          Already have an account?
          <span className="ml-1 font-bold text-black">Login now</span>
        </Link>
      </div>
    </form>
  );
};

export default Register;
