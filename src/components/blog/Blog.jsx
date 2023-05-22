import { FaEye, FaComment, FaArrowRight } from "react-icons/fa";
const Blog = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap">
        <div className="p-4 md:w-1/3">
          <div className="h-full overflow-hidden rounded-lg border-2 border-gray-200 border-opacity-60">
            <img
              className="w-full object-cover object-center md:h-36 lg:h-48"
              src="https://babystreet.althemist.com/wp-content/uploads/2019/02/back-school-kids.jpg"
              alt="blog"
            />
            <div className="p-6">
              <h1 className="title-font mb-3 text-lg font-medium text-gray-900">
                Rev Up Your Collection
              </h1>
              <p className="mb-3 leading-relaxed">
                Exploring the Top 10 Toy Cars of 2023" - Get a glimpse of the
                latest and greatest toy cars for collectors.
              </p>
              <div className="flex flex-wrap items-center">
                <a className="inline-flex items-center text-indigo-500 md:mb-2 lg:mb-0">
                  Learn More
                  <span className="ml-2">
                    <FaArrowRight />
                  </span>
                </a>
                <span className="ml-auto mr-3 inline-flex items-center border-r-2 border-gray-200 py-1 pr-3 text-sm leading-none text-gray-400 md:ml-0 lg:ml-auto">
                  <span className="mr-2">
                    <FaEye />
                  </span>
                  19.99k
                </span>
                <span className="inline-flex items-center text-sm leading-none text-gray-400">
                  <span className="mr-2">
                    <FaComment />
                  </span>
                  5
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 md:w-1/3">
          <div className="h-full overflow-hidden rounded-lg border-2 border-gray-200 border-opacity-60">
            <img
              className="w-full object-cover object-center md:h-36 lg:h-48"
              src="https://babystreet.althemist.com/wp-content/uploads/2019/02/test-baby-hero2.jpg"
              alt="blog"
            />
            <div className="p-6">
              <h1 className="title-font mb-3 text-lg font-medium text-gray-900">
                Unleash Your Inner Speedster
              </h1>
              <p className="mb-3 leading-relaxed">
                The Ultimate Guide to Toy Car Racing" - Dive into the thrilling
                world of toy car racing and discover tips to enhance your racing
                experience
              </p>
              <div className="flex flex-wrap items-center">
                <a className="inline-flex items-center text-indigo-500 md:mb-2 lg:mb-0">
                  Learn More
                  <span className="ml-2">
                    <FaArrowRight />
                  </span>
                </a>
                <span className="ml-auto mr-3 inline-flex items-center border-r-2 border-gray-200 py-1 pr-3 text-sm leading-none text-gray-400 md:ml-0 lg:ml-auto">
                  <span className="mr-2">
                    <FaEye />
                  </span>
                  100k
                </span>
                <span className="inline-flex items-center text-sm leading-none text-gray-400">
                  <span className="mr-2">
                    <FaComment />
                  </span>
                  14
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 md:w-1/3">
          <div className="h-full overflow-hidden rounded-lg border-2 border-gray-200 border-opacity-60">
            <img
              className="w-full object-cover object-center md:h-36 lg:h-48"
              src="https://babystreet.althemist.com/wp-content/uploads/2018/06/bs-blog-1.jpg"
              alt="blog"
            />
            <div className="p-6">
              <h1 className="title-font mb-3 text-lg font-medium text-gray-900">
                From Classic to Modern
              </h1>
              <p className="mb-3 leading-relaxed">
                A Journey Through the Evolution of Toy Cars" - Take a nostalgic
                trip through time and explore the evolution of toy cars from
                vintage to contemporary models.
              </p>
              <div className="flex flex-wrap items-center">
                <a className="inline-flex items-center text-indigo-500 md:mb-2 lg:mb-0">
                  Learn More
                  <span className="ml-2">
                    <FaArrowRight />
                  </span>
                </a>
                <span className="ml-auto mr-3 inline-flex items-center border-r-2 border-gray-200 py-1 pr-3 text-sm leading-none text-gray-400 md:ml-0 lg:ml-auto">
                  <span className="mr-2">
                    <FaEye />
                  </span>
                  99k
                </span>
                <span className="inline-flex items-center text-sm leading-none text-gray-400">
                  <span className="mr-2">
                    <FaComment />
                  </span>
                  92
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
