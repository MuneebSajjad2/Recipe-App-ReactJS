import React from "react";
import { Zap, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
    const [searchQuery, setSearchQuery] =useState("");
    const handleSearch = (e) => {
        e.preventDefault();
        setSearchQuery("");
        console.log(searchQuery);
        
    }

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
            <form onSubmit={handleSearch} className="flex-1 max-w-lg mx-4 hidden sm:flex">
              <input onChange={(e)=> setSearchQuery(e.target.value)} value={searchQuery} className="w-full px-5 py-2 border border-gray-200 bg-gray-900 rounded-l-full focus:outline-none focus-ring-blue-600/50 transition placeholder:gray-500 shadow-inner shadow-blue-400 focus-ring-4" />
              <button className="w-5 h-5 bg-linear-to-r from-blue-600-to-cyan-500 text-white p-2.5 rounded-2xl" >{<Search  />}</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
