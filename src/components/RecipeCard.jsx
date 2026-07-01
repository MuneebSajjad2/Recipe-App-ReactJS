import React from 'react'

const RecipeCard = ({meal}) => {
  return (
    <div className="relative bg-gray-900 rounded-xl transition duration-500 hover:shadow-blue-600/50 border border-gray-600">
        <div className="absulute inset-0 rouded-xl border-2 group:hover:border-blue-500 transition duration-500">
            <div className="flex flex-col items-center justify-center p-5">
                <img className="w-60 h-60 rounded-xl boarder boarder-yellow-400 group:hover:scale-105" src={meal.strMealThumb} alt={meal.strMeal} />
                <h3 className="text-lx pb-3 font-bold text-gray-100 mb-1 group:hover:text-blue-400 transition duration-300 ">{meal.strMeal}</h3>                

            </div>

        </div>
      
    </div>
  )
}

export default RecipeCard
