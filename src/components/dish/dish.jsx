import React from "react";

const Dish = (props) => {
  return (
    <div className="food-card">
      <h2 className="capitalize">{props.title}</h2>
      <div className="info-card">
        <p>
          Serving portion: <b>{props.serving}g</b>
        </p>
        <p>
          Calories: <b>{props.calories}g</b>
        </p>
        <p>
          Carbohydrates: <b>{props.carbs}g</b>
        </p>
        <p>
          Fats: <b>{props.fats}g</b>
        </p>
        <p>
          Protein: <b>{props.protein}g</b>
        </p>

        <p className="food-type">
          {props.breakfast === true ? (
            <b>breakfast</b>
          ) : props.dinner === true ? (
            <b>dinner</b>
          ) : props.supper === true ? (
            <b>supper</b>
          ) : props.snack === true ? (
            <b>snack</b>
          ) : (
            ""
          )}
        </p>
      </div>
    </div>
  );
};

export default Dish;
