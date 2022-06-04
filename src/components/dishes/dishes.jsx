import React, { useState } from "react";
import Search from "../search/Search";
import data from "../../data/data.json";
import Dish from "../dish/dish";

const Dishes = () => {
  const [getCalories, setGetCalories] = useState("");
  const getCals = (data) => {
    setGetCalories(data);
  };

  return (
    <div>
      <Search getCals={getCals} />
      {getCalories > 0 ? (
        data.map(
          (item) =>
            item.nutrition.calories > getCalories && (
              <Dish
                serving={item.servingSize}
                title={item.title}
                key={item.id}
                calories={item.nutrition.calories}
                fats={item.nutrition.fats}
                carbs={item.nutrition.carbs}
                protein={item.nutrition.protein}
                // breakfast={item.breakfast}
                // dinner={item.dinner}
                // supper={item.supper}
                // snack={item.snack}
              />
            )
        )
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Dishes;
