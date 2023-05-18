const Home = () => {
  return (
    <>
      <section>
        <div className="container mx-auto">
          <div
            className="hero rounded-box h-96 overflow-hidden md:h-[500px]"
            style={{
              backgroundImage: `url("https://babystreet.althemist.com/wp-content/uploads/2019/02/test-baby-hero2.jpg")`,
            }}
          >
            <div className="hero-overlay bg-secondary bg-opacity-60"></div>
            <div className="hero-content text-center text-secondary-content">
              <div className="max-w-lg">
                <h1 className="mb-5 text-4xl font-bold sm:mb-7 sm:text-5xl">
                  Shine Bright
                </h1>
                <p className="mb-5 sm:mb-7 sm:text-lg">Like a Superstar</p>
                <button className="btn-warning btn sm:btn-wide">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
