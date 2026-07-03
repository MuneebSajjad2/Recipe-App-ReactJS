import React from 'react'
import {API_URL} from './components/useFetch'
import { useState, useCallback } from 'react'
import Navbar from './components/Navbar'
import HomeView from './components/HomeView'
import GlobalCuisine from './components/GlobalCuisine'
import ReceipeDetails from './components/ReceipeDetails'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Search from './components/Search'
import QuickFilter from './components/QuickFilter'

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchLoading, setSearchLoading] = useState(false);

  const handleSearch =  useCallback(async (query) => {
    setSearchResults([]);
    setSearchLoading(true);
    try {
      const res = await fetch(`${API_URL}search.php?s=${query}`);
      if(!res.ok){throw new Error(`Enter: ${res.status}`)}

      const result = await res.json();
      setSearchResults(result?.meals || []);
    } catch (error) {
      console.error("Error fetching search results:", error);
    } finally {
      setSearchLoading(false);
    }
  }, [setSearchResults, setSearchLoading]);

const handleAreaSearch = useCallback(async (area) => {
    setSearchResults([]);
    setSearchLoading(true);
    try {
      const res = await fetch(`${API_URL}filter.php?a=${area}`);
      if(!res.ok){throw new Error(`Enter: ${res.status}`)}

      const result = await res.json();
      setSearchResults(result?.meals || []);
    } catch (error) {
      console.error("Error fetching area search results:", error);
    } finally {
      setSearchLoading(false);
    }
  }, [setSearchResults, setSearchLoading]); 

const handleSearchIngredient = useCallback(async (ingredient) => {
    setSearchResults([]);
    setSearchLoading(true);
    try {
      const res = await fetch(`${API_URL}filter.php?i=${ingredient}`);
      if(!res.ok){throw new Error(`Enter: ${res.status}`)}

      const result = await res.json();
      setSearchResults(result?.meals || []);
    } catch (error) {
      console.error("Error fetching ingredient search results:", error);
    } finally {
      setSearchLoading(false);
    }
}, [setSearchResults, setSearchLoading]);
  

  return (
    <>
      <Router>

        <div className='min-h-screen bg-gray-950 font-sans text-gray-100'>
          <Navbar handleSearch={handleSearch} />
          <GlobalCuisine handleAreaSearch={handleAreaSearch} />
          <Routes>
            <Route path="/" element={<HomeView handleSearchIngredient={handleSearchIngredient} />} />
            <Route path="/recipe/:id" element={<ReceipeDetails />} />
            <Route path="/search/:query" element={<Search meal={searchResults} loading={searchLoading} />} />  
            {/* <Route path="/search/:query" element={<Search meal={searchResults} loading={searchLoading} />} />   */}
            {/* <Route path="/area/:area" element={<Search meal={searchResults} loading={searchLoading} />} />   */}
          </Routes>
          
        </div>
      </Router>
      
    </>
  )
}

export default App
