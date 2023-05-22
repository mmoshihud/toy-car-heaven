import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

const AllToys = () => {
  useTitle("Toy Car Heaven All Toys");
  const [toys, setToys] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [limitedToys, setLimitedToys] = useState(1);

  useEffect(() => {
    fetch("http://localhost:5000/toys")
      .then((response) => response.json())
      .then((data) => setToys(data))
      .catch((error) => console.error(error));
  }, []);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredToys = toys.filter((toy) => {
    return toy.name.toLowerCase().includes(searchQuery.toLowerCase());
  });
  return (
    <div className="container mx-auto my-4 flex flex-col items-center">
      <input
        type="text"
        placeholder="Search by toy name"
        value={searchQuery}
        onChange={handleSearch}
        className="mb-8 rounded border px-6 py-2"
      />
      <div className="grid grid-cols-4 gap-4">
        {filteredToys.slice(0, limitedToys).map((toy) => (
          <div key={toy._id} className="mb-4 rounded-xl shadow-lg">
            <img
              className="w-full rounded-xl"
              src={toy.photoURL}
              alt="Product Image"
            />
            <div className="px-6 py-4">
              <div className="mb-2 text-xl font-bold">{toy.name}</div>
              <p className="text-base text-gray-700">${toy.price}</p>
              <div className="mb-4 mt-2 flex items-center">
                <svg
                  className="mr-1 h-4 w-4 fill-current text-yellow-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 12.585l-4.95 3.746 1.902-5.854-4.98-3.61h6.136l1.892-5.857 1.889 5.857h6.14l-4.981 3.61 1.903 5.854z" />
                </svg>
                <svg
                  className="mr-1 h-4 w-4 fill-current text-yellow-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 12.585l-4.95 3.746 1.902-5.854-4.98-3.61h6.136l1.892-5.857 1.889 5.857h6.14l-4.981 3.61 1.903 5.854z" />
                </svg>
                <svg
                  className="mr-1 h-4 w-4 fill-current text-yellow-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 12.585l-4.95 3.746 1.902-5.854-4.98-3.61h6.136l1.892-5.857 1.889 5.857h6.14l-4.981 3.61 1.903 5.854z" />
                </svg>
                <svg
                  className="mr-1 h-4 w-4 fill-current text-yellow-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 12.585l-4.95 3.746 1.902-5.854-4.98-3.61h6.136l1.892-5.857 1.889 5.857h6.14l-4.981 3.61 1.903 5.854z" />
                </svg>
                <svg
                  className="h-4 w-4 fill-current text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 12.585l-4.95 3.746 1.902-5.854-4.98-3.61h6.136l1.892-5.857 1.889 5.857h6.14l-4.981 3.61 1.903 5.854z" />
                </svg>
                <span className="ml-1 text-sm text-gray-700">(123)</span>
              </div>
              <div className="flex items-center">
                <div className="mr-4">
                  <img
                    src={toy.userPhoto}
                    alt="User Profile"
                    className="h-12 w-12 rounded-full"
                  />
                </div>
                <div>
                  <h2 className="font-bold">{toy.userName}</h2>
                </div>
              </div>
            </div>

            <div className="px-6 py-4">
              <Link
                to={"/toy/" + toy._id}
                className="rounded bg-accent px-4 py-2 font-bold text-white hover:bg-accent-focus"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
      {toys.length > limitedToys && (
        <button
          onClick={() => setLimitedToys(toys.length)}
          className="rounded bg-accent px-4 py-2 font-bold text-white hover:bg-accent-focus"
        >
          Show More
        </button>
      )}
    </div>
  );
};

export default AllToys;
