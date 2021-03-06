import React, { useState } from "react";

export default function Search(props) {
  const [calories, setCalories] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    props.getCals(calories);
    console.log(calories);
  };
  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <label className="search-label">
          Enter calorie count to get dishes that have equal or more calories
        </label>
        <br />
        <input
          type="number"
          value={calories}
          placeholder="Calories"
          onChange={(e) => setCalories(e.target.value)}
        />
        <button type="submit" onSubmit={handleSubmit}>Generate</button>
      </form>
      <p>{props.calories}</p>
    </div>
  );
}
