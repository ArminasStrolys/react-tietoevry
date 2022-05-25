import React, { useState, useEffect } from "react";
import Dish from "../dish/dish";
import data from "../../data/data.json";

const Dishes = () => {
  //   const [dishes, setDishes] = useState([]);

  //   useEffect(() => {
  //     fetch("https://api.calorieninjas.com/v1/nutrition?query=")
  //       .then((res) => res.json())
  //       .then((data) => setDishes(data))
  //       .catch((error) => console.log(error));
  //   }, []);
  //   console.log(dishes);
  console.log(data)
  return (
    <div>
      {data.map((item) => (
        <Dish 
        title={item.title}
        key={item.id}
        calories={item.nutrition.calories}
        fats={item.nutrition.fats}
        carbs={item.nutrition.carbs}
        protein={item.nutrition.protein}
        />
      ))}

    </div>
  );
};

export default Dishes;
