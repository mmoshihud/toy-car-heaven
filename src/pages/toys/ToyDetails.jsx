import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const ToyDetails = () => {
  const { id } = useParams();
  const [toyDetails, setToyDetails] = useState([]);
  const url = "http://localhost:5000/toys/" + id;
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setToyDetails(data));
  }, [url]);
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="rounded-lg bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-6">
              <img
                src={toyDetails.photoURL}
                alt="Toy Image"
                className="w-full"
              />
            </div>
            <div className="p-6">
              <h1 className="mb-2 text-3xl font-bold">{toyDetails.name}</h1>
              <p className="mb-4 text-gray-600">
                Category: {toyDetails.subCategory}
              </p>
              <div className="mb-4 flex items-center">
                <span className="mr-2 font-bold text-gray-700">Price:</span>
                <span className="font-bold text-accent">
                  ${toyDetails.price}
                </span>
              </div>
              <div className="mb-4 flex items-center">
                <div className="mr-4">
                  <img
                    src={toyDetails.userPhoto}
                    alt="User Profile"
                    className="h-12 w-12 rounded-full"
                  />
                </div>
                <div>
                  <h2 className="text-xl font-bold">
                    Posted by {toyDetails.userName}
                  </h2>
                  <p className="text-gray-600">
                    Date: {formatDate(toyDetails.createdAt)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToyDetails;
