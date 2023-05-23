import { useState } from "react";
import { useEffect } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Toys = () => {
  const [toys, setToys] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    categoryToys("Sports");
  }, []);

  const categoryToys = (category) => {
    setLoading(true);
    fetch(`http://localhost:5000/toys?category=${category}`)
      .then((response) => response.json())
      .then((data) => {
        setToys(data);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      <div className="container mx-auto">
        <Tabs>
          <TabList className="mb-8 flex justify-center">
            <Tab onClick={() => categoryToys("Sports")}>Sports</Tab>
            <Tab onClick={() => categoryToys("Wagon")}>Wagon Car</Tab>
            <Tab onClick={() => categoryToys("Stylish")}>Stylish Car</Tab>
          </TabList>

          <TabPanel>
            {loading ? (
              <div className="container mx-auto h-96">Loading ...</div>
            ) : (
              <div className="container mx-auto grid grid-cols-3 gap-2">
                {toys.map((toy) => (
                  <div key={toy._id} className="rounded-xl shadow-lg">
                    <img
                      className="w-full rounded-xl"
                      src={toy.photoURL}
                      alt="Product Image"
                    />
                    <div className="px-6 py-4">
                      <div className="mb-2 text-xl font-bold">{toy.name}</div>
                      <div className="mb-4 flex items-center">
                        <span className="mr-2 font-bold text-gray-700">
                          Price:
                        </span>
                        <span className="font-bold text-accent">
                          ${toy.price}
                        </span>
                      </div>

                      <Rating
                        placeholderRating={toy.rating}
                        emptySymbol={<FaRegStar className="text-warning" />}
                        placeholderSymbol={<FaStar className="text-warning" />}
                        fullSymbol={<FaStar />}
                        readonly
                      />
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
            )}
          </TabPanel>
          <TabPanel>
            {loading ? (
              <div className="container mx-auto h-96">Loading ...</div>
            ) : (
              <div className="container mx-auto grid grid-cols-3 gap-2">
                {toys.map((toy) => (
                  <div key={toy._id} className="rounded-xl shadow-lg">
                    <img
                      className="w-full rounded-xl"
                      src={toy.photoURL}
                      alt="Product Image"
                    />
                    <div className="px-6 py-4">
                      <div className="mb-2 text-xl font-bold">{toy.name}</div>
                      <div className="mb-4 flex items-center">
                        <span className="mr-2 font-bold text-gray-700">
                          Price:
                        </span>
                        <span className="font-bold text-accent">
                          ${toy.price}
                        </span>
                      </div>

                      <Rating
                        placeholderRating={toy.rating}
                        emptySymbol={<FaRegStar className="text-warning" />}
                        placeholderSymbol={<FaStar className="text-warning" />}
                        fullSymbol={<FaStar />}
                        readonly
                      />
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
            )}
          </TabPanel>
          <TabPanel>
            {loading ? (
              <div className="container mx-auto h-96">Loading ...</div>
            ) : (
              <div className="container mx-auto grid grid-cols-3 gap-2">
                {toys.map((toy) => (
                  <div key={toy._id} className="rounded-xl shadow-lg">
                    <img
                      className="w-full rounded-xl"
                      src={toy.photoURL}
                      alt="Product Image"
                    />
                    <div className="px-6 py-4">
                      <div className="mb-2 text-xl font-bold">{toy.name}</div>
                      <div className="mb-4 flex items-center">
                        <span className="mr-2 font-bold text-gray-700">
                          Price:
                        </span>
                        <span className="font-bold text-accent">
                          ${toy.price}
                        </span>
                      </div>

                      <Rating
                        placeholderRating={toy.rating}
                        emptySymbol={<FaRegStar className="text-warning" />}
                        placeholderSymbol={<FaStar className="text-warning" />}
                        fullSymbol={<FaStar />}
                        readonly
                      />
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
            )}
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
};

export default Toys;
