import React from "react";
import data from "../../data/data.json";
import Dish from "../dish/dish";

export default function PartyIdeas() {
  return (
    <div>
      <h1 className="party-title">Snack ideas for a party</h1>
      {/* filtered from all dishes */}
      {data.map(
        (item) =>
          item.partyFood === true && (
            <Dish
              serving={item.servingSize}
              title={item.title}
              key={item.id}
              calories={item.nutrition.calories}
              fats={item.nutrition.fats}
              carbs={item.nutrition.carbs}
              protein={item.nutrition.protein}
            />
          )
      )}
    </div>
  );
}
