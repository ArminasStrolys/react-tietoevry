import React, { useState } from 'react';

export default function Search() {
    const [calories, setCalories] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(calories)
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter calorie count to get dishes that have equal or more calories
        </label>
        <br />
        <input type="text" value={calories} placeholder="Calories" onChange={(e) => setCalories(e.target.value)} />
        {calories}
      </form>
    </div>
  );
}
