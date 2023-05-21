import { FaEye, FaComment, FaArrowRight } from "react-icons/fa";
const Blog = () => {
  return (
    <div class="container mx-auto">
      <div class="flex flex-wrap">
        <div class="p-4 md:w-1/3">
          <div class="h-full overflow-hidden rounded-lg border-2 border-gray-200 border-opacity-60">
            <img
              class="w-full object-cover object-center md:h-36 lg:h-48"
              src="https://dummyimage.com/720x400"
              alt="blog"
            />
            <div class="p-6">
              <h1 class="title-font mb-3 text-lg font-medium text-gray-900">
                Heaven Toys
              </h1>
              <p class="mb-3 leading-relaxed">
                From the Kid heart to there parents Heart. What a transformation
              </p>
              <div class="flex flex-wrap items-center">
                <a class="inline-flex items-center text-indigo-500 md:mb-2 lg:mb-0">
                  Learn More
                  <span className="ml-2">
                    <FaArrowRight />
                  </span>
                </a>
                <span class="ml-auto mr-3 inline-flex items-center border-r-2 border-gray-200 py-1 pr-3 text-sm leading-none text-gray-400 md:ml-0 lg:ml-auto">
                  <span className="mr-2">
                    <FaEye />
                  </span>
                  9.99k
                </span>
                <span class="inline-flex items-center text-sm leading-none text-gray-400">
                  <span className="mr-2">
                    <FaComment />
                  </span>
                  5
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="p-4 md:w-1/3">
          <div class="h-full overflow-hidden rounded-lg border-2 border-gray-200 border-opacity-60">
            <img
              class="w-full object-cover object-center md:h-36 lg:h-48"
              src="https://dummyimage.com/720x400"
              alt="blog"
            />
            <div class="p-6">
              <h1 class="title-font mb-3 text-lg font-medium text-gray-900">
                Heaven Toys
              </h1>
              <p class="mb-3 leading-relaxed">
                From the Kid heart to there parents Heart. What a transformation
              </p>
              <div class="flex flex-wrap items-center">
                <a class="inline-flex items-center text-indigo-500 md:mb-2 lg:mb-0">
                  Learn More
                  <span className="ml-2">
                    <FaArrowRight />
                  </span>
                </a>
                <span class="ml-auto mr-3 inline-flex items-center border-r-2 border-gray-200 py-1 pr-3 text-sm leading-none text-gray-400 md:ml-0 lg:ml-auto">
                  <span className="mr-2">
                    <FaEye />
                  </span>
                  9.99k
                </span>
                <span class="inline-flex items-center text-sm leading-none text-gray-400">
                  <span className="mr-2">
                    <FaComment />
                  </span>
                  14
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="p-4 md:w-1/3">
          <div class="h-full overflow-hidden rounded-lg border-2 border-gray-200 border-opacity-60">
            <img
              class="w-full object-cover object-center md:h-36 lg:h-48"
              src="https://dummyimage.com/720x400"
              alt="blog"
            />
            <div class="p-6">
              <h1 class="title-font mb-3 text-lg font-medium text-gray-900">
                Heaven Toys
              </h1>
              <p class="mb-3 leading-relaxed">
                From the Kid heart to there parents Heart. What a transformation
              </p>
              <div class="flex flex-wrap items-center">
                <a class="inline-flex items-center text-indigo-500 md:mb-2 lg:mb-0">
                  Learn More
                  <span className="ml-2">
                    <FaArrowRight />
                  </span>
                </a>
                <span class="ml-auto mr-3 inline-flex items-center border-r-2 border-gray-200 py-1 pr-3 text-sm leading-none text-gray-400 md:ml-0 lg:ml-auto">
                  <span className="mr-2">
                    <FaEye />
                  </span>
                  9.99k
                </span>
                <span class="inline-flex items-center text-sm leading-none text-gray-400">
                  <span className="mr-2">
                    <FaComment />
                  </span>
                  56
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
