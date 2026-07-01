import React from 'react'

const GlobalCuisine = () => {
  const areas = [
    "American",
    "British",
    "Canadian",
    "Chinese",
    "Indian",
    "Italian",
    "Mexican",
    "Russian",
    "Thai"
  ]

  return (
   <>
   <div className="bg-gray-900/80 border-b border-y-gray-800 shadow-inner shadow-black/20">
    <div className="max-w-8xl mx-auto px-4 lg:px-8 overflow-x-auto scrollbar-hide">
      <div className="flex space-x-4 py-3 item-center">
        
      <div className="text-white font-semibold">Global Cuisine:</div>  
        {areas.map((area) => (
            <button className="cursor-pointer py-1.5 px-4 rounded-full bg-gray border-gray-200 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-800/150 trasition hover:scale-1.05">{area}</button>
        ))}
      </div>
    </div>
   </div>

   </>
  )
}

export default GlobalCuisine
