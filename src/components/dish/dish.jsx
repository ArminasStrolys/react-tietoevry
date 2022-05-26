import React from "react";

const Dish = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <div className="info-card">
      <p>Serving portion: {props.serving}g</p>
      <p>Calories: {props.calories}g</p>
      <p>Carbohydrates: {props.carbs}g</p>
      <p>Fats: {props.fats}g</p>
      <p>Protein: {props.protein}g</p>
      </div>
    </div>
  );
};

export default Dish;
