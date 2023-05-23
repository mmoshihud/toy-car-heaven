import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

const MyToys = () => {
  useTitle("My Toys | Toy Car Heaven");
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/toys")
      .then((response) => response.json())
      .then((data) => setToys(data))
      .catch((error) => console.error(error));
  }, []);

  const handleDelete = (_id) => {
    fetch("http://localhost:5000/toys/" + _id, {
      method: "Delete",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then(() => {
        const remaining = toys.filter((toy) => toy._id !== _id);
        setToys(remaining);
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      <div className="container mx-auto">
        <div className="w-full">
          <table className="min-w-full border border-gray-300 bg-white text-center">
            <thead>
              <tr className="bg-gray-200">
                <th className="border-b border-gray-300 px-4 py-2">Toy Name</th>
                <th className="border-b border-gray-300 px-4 py-2">Category</th>
                <th className="border-b border-gray-300 px-4 py-2">
                  Uploaded By
                </th>
                <th className="border-b border-gray-300 px-4 py-2">Price</th>
                <th className="border-b border-gray-300 px-4 py-2">Quantity</th>
                <th className="border-b border-gray-300 px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {toys.map((toy) => (
                <tr key={toy._id} className="border-b border-gray-300">
                  <td className="px-4 py-2">{toy.name}</td>
                  <td className="px-4 py-2">{toy.subCategory}</td>
                  <td className="px-4 py-2">{toy.userName}</td>
                  <td className="px-4 py-2">${toy.price}</td>
                  <td className="px-4 py-2">{toy.quantity}</td>
                  <td className="px-4 py-2">
                    <Link
                      to={"/toys/edit/" + toy._id}
                      className="text-blue-500 underline"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(toy._id)}
                      className="ml-2 text-red-500"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default MyToys;
