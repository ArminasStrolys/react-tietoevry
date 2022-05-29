import React, { useState } from 'react';
import Dish from "../dish/dish";
import data from "../../data/data.json";
import Search from "../search/Search";

const Dishes = () => {

const [getCalories, setGetCalories] = useState('')
const getCals = (data) => {
    setGetCalories(data)
}

  return (
    <div>
    <Search getCals={getCals}/>
    {getCalories > 0 ? 
      (data.map((item) => (
        <Dish 
        serving={item.servingSize}
        title={item.title}
        key={item.id}
        calories={item.nutrition.calories}
        fats={item.nutrition.fats}
        carbs={item.nutrition.carbs}
        protein={item.nutrition.protein}
        breakfast={item.isBreakfast}
        dinner={item.isDinner}
        supper={item.isSupper}
        snack={item.isSnack}
        />
      )))
      : console.log('no Calories set') 
      }
    </div>
  );
};

export default Dishes;
