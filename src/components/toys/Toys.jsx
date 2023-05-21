const Toys = (props) => {
  return (
    <div className="container mx-auto grid grid-cols-3 gap-2">
      {props.toys.map((toy) => (
        <div key={toy._id} className="rounded-xl shadow-lg">
          <img
            className="w-full rounded-xl"
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
            alt="Product Image"
          />
          <div className="px-6 py-4">
            <div className="mb-2 text-xl font-bold">{toy.name}</div>
            <p className="text-base text-gray-700">${toy.price}</p>
          </div>
          <div className="px-6 py-4">
            <button className="rounded bg-accent px-4 py-2 font-bold text-white hover:bg-accent-focus">
              View Details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Toys;
