import { useEffect } from "react";
import { useState } from "react";
import Blog from "../../components/blog/Blog";
import FeaturedToy from "../../components/featured-toy/FeaturedToy";
import Gallery from "../../components/gallery/Gallery";
import Toys from "../../components/toys/Toys";

const Home = () => {
  const [toys, setToys] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/toys")
      .then((response) => response.json())
      .then((data) => setToys(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <>
      <div
        className="hero mb-8 h-96 overflow-hidden md:h-[500px]"
        style={{
          backgroundImage: `url("https://babystreet.althemist.com/wp-content/uploads/2019/02/test-baby-hero2.jpg")`,
        }}
      >
        <div className="hero-overlay bg-accent bg-opacity-60"></div>
        <div className="hero-content text-center text-secondary-content">
          <div className="max-w-lg">
            <h1 className="mb-5 text-4xl font-bold sm:mb-7 sm:text-5xl">
              Shine Bright
            </h1>
            <p className="mb-5 sm:mb-7 sm:text-lg">Like a Superstar</p>
            <button className="btn-warning btn sm:btn-wide">Shop Now</button>
          </div>
        </div>
      </div>
      <h1 className="mb-8 text-center text-5xl font-extrabold">
        Car Toy Collection
      </h1>
      <Gallery />
      <h1 className="mb-8 mt-4 text-center text-5xl font-extrabold">
        Shop by Category
      </h1>
      <Toys toys={toys} />
      <h1 className="mb-8 text-center text-5xl font-extrabold">
        From The Blog
      </h1>
      <Blog />
      <h1 className="mb-8 text-center text-5xl font-extrabold">
        Toys of the Month
      </h1>
      <FeaturedToy />
    </>
  );
};

export default Home;
