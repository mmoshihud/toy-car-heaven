import { getAuth, updatePassword, updateProfile } from "firebase/auth";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";
import app from "../../utilities/firebase.config";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const auth = getAuth(app);
  const navigate = useNavigate();

  const handleUpdatePassword = (newPassword) => {
    const users = auth.currentUser;

    if (users) {
      updatePassword(users, newPassword)
        .then(() => {
          console.log("Password updated successfully!");
          Swal.fire({
            title: "Confirmation!",
            text: "Only Password Updated. don't type password to update profile!",
            icon: "success",
            confirmButtonText: "Okay!",
          });
          navigate("/user-profile");
        })
        .catch((error) => {
          Swal.fire({
            title: error,
            text: "Do you want to continue",
            icon: "error",
            confirmButtonText: "Okay!",
          });
        });
    } else {
      console.error("No user is currently signed in.");
    }
  };

  const handleEditForm = (event) => {
    event.preventDefault();
    const password = event.target.password.value;
    const name = event.target.name.value;
    const email = event.target.email.value;
    const photoUrl = event.target.photo_url.value;

    try {
      if (password) {
        handleUpdatePassword(password);
        return;
      }
      updateProfile(auth.currentUser, {
        displayName: name,
        email: email,
        photoURL: photoUrl,
      })
        .then(() => {
          console.log("profile updated");
          Swal.fire({
            title: "Confirmation!",
            text: "Profile updated successfully!",
            icon: "success",
            confirmButtonText: "Okay!",
          });
          navigate("/user-profile");
          event.target.reset();
        })
        .catch((error) => {
          Swal.fire({
            title: error,
            text: "Do you want to continue",
            icon: "error",
            confirmButtonText: "Okay!",
          });
        });
    } catch (error) {}
  };

  if (user && user.providerData[0].providerId === "google.com") {
    return (
      <div className="mb-8 p-8 text-center text-4xl font-bold">
        You are singed with Google You cant change user profile Information
      </div>
    );
  } else if (user) {
    return (
      <>
        <form onSubmit={handleEditForm} className="container mx-auto mb-4">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="col-span-full">
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Name:
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="name"
                  defaultValue={user ? user.displayName : ""}
                  className="block w-full rounded-md border-0 p-4 py-1.5 text-lg font-bold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="col-span-full">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email:
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="email"
                  defaultValue={user ? user.email : ""}
                  className="block w-full rounded-md border-0 p-4 py-1.5 text-lg font-bold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="col-span-full">
              <label
                htmlFor="photo_url"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email:
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="photo_url"
                  defaultValue={user ? user.photoURL : ""}
                  className="block w-full rounded-md border-0 p-4 py-1.5 text-lg font-bold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="col-span-full">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email:
              </label>
              <div className="mt-2">
                <input
                  type="password"
                  name="password"
                  placeholder="Enter Password to Change Current Password"
                  className="block w-full rounded-md border-0 p-4 py-1.5 text-lg font-bold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <button
              className="rounded-md bg-accent px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-accent-focus"
              type="submit"
            >
              Update
            </button>
          </div>
        </form>
      </>
    );
  } else {
    return <div>Loading....</div>;
  }
};

export default Profile;
