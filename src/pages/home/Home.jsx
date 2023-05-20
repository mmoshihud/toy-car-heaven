import Gallery from "../../components/gallery/Gallery";

const Home = () => {
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
    </>
  );
};

export default Home;
