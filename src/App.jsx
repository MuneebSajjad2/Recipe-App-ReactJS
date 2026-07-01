import React from 'react'
import Navbar from './components/Navbar'
import HomeView from './components/HomeView'
import GlobalCuisine from './components/GlobalCuisine'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

const App = () => {
  return (
    <>
      <Router>

        <div className='min-h-screen bg-gray-950 font-sans text-gray-100'>
          <Navbar />
          <GlobalCuisine />
          <Routes>
            <Route path="/" element={<HomeView />} />
          </Routes>
        </div>
      </Router>
      
    </>
  )
}

export default App
