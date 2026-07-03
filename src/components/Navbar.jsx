import React from "react";
import { Zap, Search } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbar = ({ handleSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      navigate(`search/${searchQuery}`);
      handleSearch(searchQuery);
    }
    setSearchQuery("");
  };

  return (
    <>
      <nav className="sticky top-0 z-50 bg-gray-950/90 backdrop-blur-md shadow-2xl shadow-black/50 border-b border-blue-900/50">
        <div className="flex justify-between items-center max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link
              to="/"
              className="flex items-center text-2xl font-black text-white hover:text-blue-400 transition duration-300 tracking-widest"
            >
              <Zap className=" w-7 h-7 mr-2 text-yellow-400 " />
              <span className="text-blue-400">Pro</span> Chef
            </Link>
          </div>
          <div className="">
            <form
              onSubmit={handleInputChange}
              className="flex-1 max-w-lg mx-4 hidden sm:flex "
            >
              <input
                onChange={(e) => setSearchQuery(e.target.value)}
                value={searchQuery}
                className="w-full px-5 py-2 border border-gray-700 bg-gray-900 text-gray-50 rounded-l-full
                 focus:outline-none focus:ring-4 focus:ring-blue-600/50 transition placeholder-gray-500 shadow-inner
                  shadow-black/50"
              />

              <button
                className="bg-linear-to-r from-blue-600 to-cyan-500 text-white p-2.5 rounded-r-full
                 hover:from-blue-700 hover:to-cyan-600 transition duration-300
           shadow-lg shadow-blue-800/50 hover:shadow-xl hover:shadow-blue-800/90"
              >
                {<Search />}
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
