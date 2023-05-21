import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const EditToys = () => {
  const id = useParams();
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch(
      "https://b7a11-toy-marketplace-server-side-mmoshihud.vercel.app/toys/" +
        id.id
    )
      .then((response) => response.json())
      .then((data) => setToys(data))
      .catch((error) => console.error(error));
  }, [id.id]);

  const handleEditSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const subCategory = event.target.sub_category.value;
    const quantity = event.target.quantity.value;
    const price = event.target.price.value;
    const photo_url = event.target.photo_url.value;

    fetch(
      "https://b7a11-toy-marketplace-server-side-mmoshihud.vercel.app/toys/" +
        id.id,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          subCategory: subCategory,
          quantity: quantity,
          price: price,
          photoURL: photo_url,
        }),
      }
    )
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  return (
    <form onSubmit={handleEditSubmit}>
      <label htmlFor="name">Toy Name:</label>
      <input type="text" name="name" defaultValue={toys.name} />
      <label htmlFor="sub_category">Sub Category</label>
      <input type="text" name="sub_category" defaultValue={toys.subCategory} />
      <label htmlFor="quantity">Quantity</label>
      <input type="text" name="quantity" defaultValue={toys.quantity} />
      <label htmlFor="price">Price</label>
      <input type="text" name="price" defaultValue={toys.price} />
      <label htmlFor="photo_url">Photo Url</label>
      <input type="text" name="photo_url" defaultValue={toys.photoURL} />
      <button type="submit">Save</button>
    </form>
  );
};

export default EditToys;
