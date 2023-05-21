import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const MyToys = () => {
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
        <div class="w-full">
          <table class="min-w-full border border-gray-300 bg-white text-center">
            <thead>
              <tr class="bg-gray-200">
                <th class="border-b border-gray-300 px-4 py-2">Toy Name</th>
                <th class="border-b border-gray-300 px-4 py-2">Email</th>
                <th class="border-b border-gray-300 px-4 py-2">Uploaded By</th>
                <th class="border-b border-gray-300 px-4 py-2">Price</th>
                <th class="border-b border-gray-300 px-4 py-2">Quantity</th>
                <th class="border-b border-gray-300 px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {toys.map((toy) => (
                <tr key={toy._id} class="border-b border-gray-300">
                  <td class="px-4 py-2">{toy.name}</td>
                  <td class="px-4 py-2">{toy.subCategory}</td>
                  <td class="px-4 py-2">{toy.userName}</td>
                  <td class="px-4 py-2">{toy.price}</td>
                  <td class="px-4 py-2">{toy.quantity}</td>
                  <td class="px-4 py-2">
                    <a
                      href={"/toys/edit/" + toy._id}
                      class="text-blue-500 underline"
                    >
                      Edit
                    </a>
                    <button
                      onClick={() => handleDelete(toy._id)}
                      class="ml-2 text-red-500"
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
