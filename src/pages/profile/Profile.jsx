import { getAuth, updatePassword, updateProfile } from "firebase/auth";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import app from "../../utilities/firebase.config";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const auth = getAuth(app);

  const handleUpdatePassword = (newPassword) => {
    const users = auth.currentUser;

    if (users) {
      updatePassword(users, newPassword)
        .then(() => {
          console.log("Password updated successfully!");
        })
        .catch((error) => {
          console.error("Error updating password:", error);
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
    if (password) {
      handleUpdatePassword(password);
    }
    updateProfile(auth.currentUser, {
      displayName: name,
      email: email,
      photoURL: photoUrl,
    })
      .then(() => {
        console.log("profile updated");
        event.target.reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form onSubmit={handleEditForm}>
      <label htmlFor="name">Name: </label>
      <input
        type="text"
        name="name"
        defaultValue={user ? user.displayName : ""}
      />
      <label htmlFor="email">Email: </label>
      <input type="text" name="email" defaultValue={user ? user.email : ""} />
      <label htmlFor="photo_url">Photo URL: </label>
      <input
        type="text"
        name="photo_url"
        defaultValue={user ? user.photoURL : ""}
      />
      <label htmlFor="password">Password</label>
      <input type="password" name="password" placeholder="Enter Password" />

      <button type="submit">Update</button>
    </form>
  );
};

export default Profile;
