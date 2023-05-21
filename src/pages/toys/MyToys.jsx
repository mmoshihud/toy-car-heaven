import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const MyToys = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/toys")
      .then((response) => response.json())
      .then((data) => setToys(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {toys.map((toy) => (
            <tr key={toy._id}>
              <td>{toy.name}</td>
              <td>{toy.subCategory}</td>
              <td>
                <Link to={"/toys/edit/" + toy._id}>Edit</Link>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default MyToys;
