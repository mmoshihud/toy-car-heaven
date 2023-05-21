const AddToys = () => {
  const handleToyForm = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const subCategory = event.target.sub_category.value;
    const quantity = event.target.quantity.value;
    const price = event.target.price.value;
    const photo_url = event.target.photo_url.value;

    fetch("http://localhost:5000/toys/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        subCategory: subCategory,
        quantity: quantity,
        price: price,
        photoURL: photo_url,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };
  return (
    <form onSubmit={handleToyForm} className="flex flex-col">
      <label htmlFor="name">Toy Name:</label>
      <input type="text" name="name" />
      <label htmlFor="sub_category">Sub Category</label>
      <input type="text" name="sub_category" />
      <label htmlFor="quantity">Quantity</label>
      <input type="text" name="quantity" />
      <label htmlFor="price">Price</label>
      <input type="text" name="price" />
      <label htmlFor="photo_url">Photo Url</label>
      <input type="text" name="photo_url" />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddToys;
