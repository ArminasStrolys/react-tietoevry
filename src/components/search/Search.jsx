import React from "react";

export default function Search() {
  return (
    <div>
      <form>
        <label>
          Enter calorie count to get dishes that have equal or more calories
        </label>
        <br />
        <input type="text" placeholder="Calories" />
      </form>
    </div>
  );
}
