import { AuthContext } from "../../provider/AuthProvider";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { useState } from "react";
import app from "../../utilities/firebase.config";
import useTitle from "../../hooks/useTitle";

const Register = () => {
  useTitle("Sign Up");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [warning, setWarning] = useState("");
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const from = location.state?.form?.pathname || "/";

  const handleLoginForm = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirm.value;
    const photoUrl = event.target.photo_url.value;

    if (email.length < 1) {
      setWarning("Warning: Invalid email address!");
      setError("");
      return;
    }
    if (password.length < 6) {
      setWarning("");
      setError("The Password is less than 6 characters");
      return;
    }
    if (password !== confirmPassword) {
      setWarning("");
      setError("The Password didn't match");
      return;
    }
    createUser(email, password)
      .then((userCredential) => {
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photoUrl,
        })
          .then(() => {
            setError("");
            setWarning("");
          })
          .catch((error) => {
            setWarning("");
            setError(error.message);
          });
        setError("");
        setWarning("");
        event.target.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setWarning("");
        setError(error.message);
      });
  };

  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then(() => navigate(from, { replace: true }))
      .catch((error) => console.log(error.message));
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
        {warning ? (
          <div className="alert alert-warning mb-4 shadow-lg">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 flex-shrink-0 stroke-current"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              <span>{warning}</span>
            </div>
          </div>
        ) : (
          ""
        )}
        {error ? (
          <div className="alert alert-error mb-4 shadow-lg">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 flex-shrink-0 stroke-current"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{error}</span>
            </div>
          </div>
        ) : (
          ""
        )}
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
          type="text"
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
          onClick={handleGoogleLogin}
          type="button"
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
