import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

const EditToys = () => {
  useTitle("Edit | Toy Car Heaven");
  const id = useParams();
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/toys/" + id.id)
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
    const photoUrl = event.target.photo_url.value;
    const rating = event.target.rating.value;
    const description = event.target.description.value;

    fetch("http://localhost:5000/toys/" + id.id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        description: description,
        subCategory: subCategory,
        quantity: quantity,
        price: price,
        rating: rating,
        photoURL: photoUrl,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  return (
    <form onSubmit={handleEditSubmit} className="container mx-auto mb-4">
      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="col-span-full">
          <label
            htmlFor="name"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Toy Name:
          </label>
          <div className="mt-2">
            <input
              defaultValue={toys.name}
              type="text"
              name="name"
              className="block w-full rounded-md border-0 p-4 py-1.5 text-lg font-bold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="col-span-full">
          <label
            htmlFor="about"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Description
          </label>
          <div className="mt-2">
            <textarea
              defaultValue={toys.description}
              name="description"
              rows="5"
              className="block w-full rounded-md border-0 p-2 text-lg font-bold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            ></textarea>
          </div>
        </div>

        <div className="col-span-full">
          <label
            htmlFor="sub_category"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Sub Category Name:
          </label>
          <div className="mt-2">
            <input
              defaultValue={toys.subCategory}
              type="text"
              name="sub_category"
              className="block w-full rounded-md border-0 p-4 py-1.5 text-lg font-bold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="col-span-full">
          <label
            htmlFor="quantity"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Quantity:
          </label>
          <div className="mt-2">
            <input
              defaultValue={toys.quantity}
              type="number"
              name="quantity"
              className="block w-full rounded-md border-0 p-4 py-1.5 text-lg font-bold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="col-span-full">
          <label
            htmlFor="photo_url"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Toy Photo URL:
          </label>
          <div className="mt-2">
            <input
              defaultValue={toys.photoURL}
              type="text"
              name="photo_url"
              className="block w-full rounded-md border-0 p-4 py-1.5 text-lg font-bold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="col-span-full">
          <label
            htmlFor="number"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Price:
          </label>
          <div className="mt-2">
            <input
              defaultValue={toys.price}
              type="number"
              step="0.01"
              name="price"
              className="block w-full rounded-md border-0 p-4 py-1.5 text-lg font-bold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="col-span-full">
          <label
            htmlFor="rating"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Rating:
          </label>
          <div className="mt-2">
            <input
              defaultValue={toys.rating}
              type="number"
              step="0.01"
              name="rating"
              className="block w-full rounded-md border-0 p-4 py-1.5 text-lg font-bold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default EditToys;
