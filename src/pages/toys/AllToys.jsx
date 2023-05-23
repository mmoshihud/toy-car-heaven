import { useEffect } from "react";
import { useState } from "react";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import { FaRegStar, FaStar } from "react-icons/fa";

const AllToys = () => {
  useTitle("All Toys | Toy Car Heaven");
  const [toys, setToys] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [limitedToys, setLimitedToys] = useState(4);

  useEffect(() => {
    fetch("https://b7a11-toy-marketplace-server-side-mmoshihud.vercel.app/toys")
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
                <Rating
                  placeholderRating={toy.rating}
                  emptySymbol={<FaRegStar />}
                  placeholderSymbol={<FaStar className="text-warning" />}
                  fullSymbol={<FaStar />}
                  readonly
                />
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
