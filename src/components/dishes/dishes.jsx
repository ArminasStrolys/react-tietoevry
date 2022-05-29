import React, { useState, useEffect } from "react";
import Dish from "../dish/dish";
import data from "../../data/data.json";

const Dishes = () => {

  return (
    <div>
      {data.map((item) => (
        <Dish 
        serving={item.servingSize}
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
