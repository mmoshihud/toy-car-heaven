const Toys = () => {
  return (
    <div className="container mx-auto grid grid-cols-3 gap-2">
      <div className="rounded-xl shadow-lg">
        <img
          className="w-full rounded-xl"
          src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
          alt="Product Image"
        />
        <div className="px-6 py-4">
          <div className="mb-2 text-xl font-bold">Product Name</div>
          <p className="text-base text-gray-700">$99.99</p>
          <div className="mt-2 flex items-center">
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
        </div>
        <div className="px-6 py-4">
          <button className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Toys;