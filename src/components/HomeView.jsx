import React from "react";
import TrendingSlider from "./TrendingSlider";
import ReceipeSlider from "./ReceipeSlider";
import { API_URL } from "./useFetch";
import QuickFilter from "./QuickFilter";

const HomeView = ({handleSearchIngredient}) => {
  return (
    <>
      <main className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-4 ">
        <ReceipeSlider
          title="Staff Curated Picks"
          fetchUrl={`${API_URL}search.php?f=c`}
        />
        <TrendingSlider
          title="Quick & Easy Meals"
          fetchUrl={`${API_URL}search.php?f=c`}
        />
        <QuickFilter
          title="Quick Filter by Primary Ingredients"
          fetchUrl={`${API_URL}filter.php?i=`}
          handleSearchIngredient={handleSearchIngredient}
        />
      </main>
    </>
  );
};

export default HomeView;
