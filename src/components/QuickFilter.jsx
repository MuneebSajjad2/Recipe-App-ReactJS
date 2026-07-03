import React from "react";
import { useNavigate } from "react-router-dom";
import { Utensils } from "lucide-react";

const QuickFilter = ({ title, fetchUrl, handleSearchIngredient }) => {
  const ingredients = [
    "Chicken",
    "Beef",
    "Fish",
    "Goat",
    "Potato",
    "Pasta",
   
  ];
  const navigate = useNavigate();

  const handleButtonClick = (ingredient) => {
    // Navigate and search immediately using the direct value
    navigate(`search/${ingredient}`);
    handleSearchIngredient(ingredient);
  };

  return (
    <section className="mt-20">
      

      <h2 className="text-3xl font-extrabold text-gray-100 mb-6 tracking-tight border-1-4 border-yellow-400 pl-4 flex items-center">
        <Utensils className="w-6 h-6 mr-3 text-blue-500" />
        Quick Filter by Primary Ingredient
      </h2>

      <div className="">
        {ingredients.map((ingredient) => (
          // <div
          //   key={ingredient}
          //   className="bg-gray-800 rounded-lg shadow-lg overflow-hidden"
          // >
            <button
              // className="w-full h-48 flex items-center justify-center text-xl font-bold text-gray-100 hover:bg-gray-700 transition duration-300"
              onClick={() => handleButtonClick(ingredient)}
              className=" bg-gray-800 p-5 sm:p-5 rounded-xl shadow-xl shadow-black/50 transition duration-300 text-center font-semibold text-gray-100 border border-gray-700 hover:border-blue-500 hover:text-blue-400 transform hover:scale-[1.05] hover:bg-gray-700/50 mx-5 mt-3"
            >
              {ingredient}
            </button>
          // </div>
        ))}
      </div>
    </section>
  );
};

export default QuickFilter;
