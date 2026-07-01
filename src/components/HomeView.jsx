import React from 'react'
import TrendingSlider from './TrendingSlider'
import ReceipeSlider from './ReceipeSlider'
import { API_URL } from './useFetch'


const HomeView = () => {
  return (
  <>
  <main className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-4 ">
    <ReceipeSlider title="Staff Curated Picks"  fetchUrl={`${API_URL}search.php?f=c`} />
    <TrendingSlider />
  </main>
  </>
  )
}

export default HomeView
