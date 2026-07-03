import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Globe } from 'lucide-react'

const GlobalCuisine = ({ handleAreaSearch }) => {
  const areas = [
    "American", "British", "Canadian", "Chinese", 
    "Indian", "Italian", "Mexican", "Russian", "Thai"
  ]
  
  const navigate = useNavigate();

  const handleButtonClick = (area) => {
    // Navigate and search immediately using the direct value
    navigate(`search/${area}`);
    handleAreaSearch(area);
  }

  return (
    <>
     <div className="bg-gray-900/80 border-b border-y-gray-800 shadow-inner shadow-black/20">
        <div className="max-w-8xl mx-auto px-4 lg:px-8 overflow-x-auto scrollbar-hide">
          <div className="flex space-x-4 py-3 items-center">
            <div className="flex items-center text-lg font-bold text-yellow-400 pr-3 whitespace-nowrap">
              <Globe className="w-5 h-5 mr-2" /> Global Cuisine:
              </div>
            {areas.map((area, index) => (
              <button 
                key={index} 
                className="cursor-pointer py-1.5 px-4 rounded-full bg-gray border-gray-200 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-800/150 transition hover:scale-1.05" 
                onClick={() => handleButtonClick(area)}
              >
                {area}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default GlobalCuisine
