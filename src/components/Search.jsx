import React from "react";
import {Link} from "react-router-dom"
import {Utensils,ChevronLeft } from 'lucide-react'

const Search = ({ meal, loading }) => {
  return (
    <>
      <Link
        to={"/"}
        className="text-yellow-400 mt-5 hover:text-yellow-300 flex items-center mb-6 font-medium transition text-lg group"
      >
        <ChevronLeft className="w-6 h-6 mr-1 transition" />
        Back to Dashboard
      </Link>
      {loading && (
        <div className="text-center text-2xl font-bold mt-10">Loading...</div>
      )}
      {!loading && meal.length === 0 && (
        <div className="text-center text-2xl font-bold mt-10">
          No results found.
        </div>
      )}
      {!loading && meal.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          {meal.map((item) => (
            <div
              key={item.id}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={item.strMealThumb}
                alt={item.strMeal}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{item.strMeal}</h3>
                <p className="text-gray-400">
                  {item.strInstructions?.substring(0, 100)}...
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Search;
