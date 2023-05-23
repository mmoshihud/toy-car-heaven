import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";
import { AuthContext } from "../../provider/AuthProvider";

const MyToys = () => {
  useTitle("My Toys | Toy Car Heaven");
  const [toys, setToys] = useState([]);
  const { user } = useContext(AuthContext);

  const [selectedToys, setSelectedToys] = useState(true);

  const handleOptionChange = (event) => {
    const boolValue = event.target.value === "true";
    setSelectedToys(boolValue);
  };

  useEffect(() => {
    const sortValue = selectedToys === true ? 1 : -1;
    fetch(`http://localhost:5000/toys?email=${user.email}&sort=${sortValue}`)
      .then((response) => response.json())
      .then((data) => setToys(data))
      .catch((error) => console.error(error));
  }, [selectedToys]);

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
        Swal.fire({
          title: "Confirmation!",
          text: "Toy Deleted Successfully!",
          icon: "success",
          confirmButtonText: "Okay!",
        });
      })
      .catch((error) =>
        Swal.fire({
          title: error,
          text: "Do you want to continue",
          icon: "error",
          confirmButtonText: "Okay!",
        })
      );
  };

  return (
    <>
      <div className="container mx-auto">
        <div className="mb-8 w-36">
          <select
            value={selectedToys}
            onChange={handleOptionChange}
            name="order"
            className="mt-2 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-lg font-semibold shadow-sm focus:border-accent focus:outline-none focus:ring-accent"
          >
            <option value="true">Ascending</option>
            <option value="false">Descending</option>
          </select>
        </div>

        <div className="w-full">
          <table className="min-w-full border border-gray-950 bg-white text-center">
            <thead>
              <tr className="bg-gray-200">
                <th className="border-b border-gray-950 px-4 py-2">Toy Name</th>
                <th className="border-b border-gray-950 px-4 py-2">Category</th>
                <th className="border-b border-gray-950 px-4 py-2">
                  Uploaded By
                </th>
                <th className="border-b border-gray-950 px-4 py-2">Email</th>
                <th className="border-b border-gray-950 px-4 py-2">Price</th>
                <th className="border-b border-gray-950 px-4 py-2">Quantity</th>
                <th className="border-b border-gray-950 px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {toys.map((toy) => (
                <tr key={toy._id} className="border border-gray-950">
                  <td className="px-4 py-2">{toy.name}</td>
                  <td className="px-4 py-2">{toy.subCategory}</td>
                  <td className="px-4 py-2">{toy.userName}</td>
                  <td className="px-4 py-2">{toy.userEmail}</td>
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
