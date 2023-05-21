import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const ToyDetails = () => {
  const { id } = useParams();
  const [toyDetails, setToyDetails] = useState([]);
  useEffect(() => {
    fetch(
      "https://b7a11-toy-marketplace-server-side-mmoshihud.vercel.app/toys/" +
        id
    )
      .then((response) => response.json())
      .then((data) => setToyDetails(data));
  }, [toyDetails]);
  return (
    <>
      <div className="mb-4 flex flex-col items-center justify-center gap-4">
        <img
          src={toyDetails.photoURL}
          alt="Chef"
          className="h-80 w-80 rounded-full object-cover"
        />
        <h2 className="text-4xl font-bold">{toyDetails.name}</h2>
      </div>
    </>
  );
};

export default ToyDetails;
