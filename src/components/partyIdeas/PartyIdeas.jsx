import React from "react";
import data from "../../data/data.json";
import Dish from "../dish/dish";

export default function PartyIdeas() {
  return (
    <div>
     <h2>Snack ideas for a party</h2>
     {/* filtered from all dishes */}
      {data.map(
        (item) =>
          item.isSnack === true && (
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
          )
      )}
    </div>
  );
}
