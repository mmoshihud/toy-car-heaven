import { Link } from "react-router-dom";

const Toys = (props) => {
  return (
    <div className="container mx-auto grid grid-cols-3 gap-2">
      {props.toys.map((toy) => (
        <div key={toy._id} className="rounded-xl shadow-lg">
          <img
            className="w-full rounded-xl"
            src={toy.photoURL}
            alt="Product Image"
          />
          <div className="px-6 py-4">
            <div className="mb-2 text-xl font-bold">{toy.name}</div>
            <p className="text-base text-gray-700">${toy.price}</p>
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
  );
};

export default Toys;
