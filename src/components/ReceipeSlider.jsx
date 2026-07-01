import React from "react";
import useFetch from "./useFetch";
import RecipeCard from "./RecipeCard";
import Slider from "react-slick";



const ReceipeSlider = ({ title, fetchUrl }) => {
  const { data, loading, error } = useFetch(fetchUrl);
  console.log(data?.meals);
  const meals = data?.meals || [];

  var settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  

  return (
    <>
      <Slider {...settings}>
        {meals.map((meal) => (
          <div key={meal.idMeal} className="px-10 flex justify-center">
            {<RecipeCard meal={meal} />}
          </div>
        ))}
      </Slider>
    </>
  );
};

export default ReceipeSlider;
