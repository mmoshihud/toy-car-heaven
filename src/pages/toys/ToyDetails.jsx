import { useState } from "react";
import { useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Recipe from "../../components/recipe/Recipe";

const ToyDetails = () => {
  const { id } = useParams();
  const toyDetails = useLoaderData();
  const [recipe, setRecipe] = useState([]);
  useEffect(() => {
    fetch("https://chef-backend-eta.vercel.app/recipe/" + id)
      .then((response) => response.json())
      .then((data) => setRecipe(data));
  }, [toyDetails]);
  return (
    <>
      <div className="mb-4 flex flex-col items-center justify-center gap-4">
        <img
          src={toyDetails.imageURL}
          alt="Chef"
          className="h-80 w-80 rounded-full object-cover"
        />
        <h2 className="text-4xl font-bold">{toyDetails.name}</h2>
        <p className="w-2/3 text-center text-2xl">{toyDetails.bio}</p>
        <div className="text-lg font-bold">{toyDetails.likes} likes</div>
        <div className="text-lg font-bold">
          {toyDetails.num_recipes} recipes
        </div>
        <div className="text-lg font-bold">
          {toyDetails.experience_years} years of experience
        </div>
      </div>
      <Recipe recipes={recipe} />
    </>
  );
};

export default ToyDetails;
