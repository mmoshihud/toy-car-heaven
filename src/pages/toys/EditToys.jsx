import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const EditToys = () => {
  const id = useParams();
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/toys/" + id.id)
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => console.error(error));
  }, [id.id]);

  return (
    <form>
      <label htmlFor="name">Toy Name:</label>
      <input type="text" name="name" defaultValue={user.name} />
      <label htmlFor="sub_category">Sub Category</label>
      <input type="text" name="sub_category" defaultValue={user.subCategory} />
      <label htmlFor="quantity">Quantity</label>
      <input type="text" name="quantity" defaultValue={user.quantity} />
      <label htmlFor="price">Price</label>
      <input type="text" name="price" defaultValue={user.price} />
      <label htmlFor="photo_url">Photo Url</label>
      <input type="text" name="photo_url" defaultValue={user.photoURL} />
      <button type="submit">Save</button>
    </form>
  );
};

export default EditToys;
