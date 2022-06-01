import React, { useState } from 'react';
import Search from "../search/Search";
import data from "../../data/data.json";

export default function MonthlyPlan() {

  const [getCalories, setGetCalories] = useState(300);

  function rndNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }


  let sum = 0
const weeklyPlan = []
// weeklyPlan.length > 0 ? sum += weeklyPlan.reduce((a,b)=>a+b) : console.log('non')


// rndNum(0,data.length)
// console.log(data[0].nutrition.calories)
// while (sum >= getCalories){
//   weeklyPlan.push(10)
//   sum = weeklyPlan.reduce((a,b)=>a+b)
//   console.log(weeklyPlan)
// }

while (getCalories > sum){

  weeklyPlan.push(data[rndNum(0,data.length-1)].nutrition.calories)
  sum = weeklyPlan.reduce((a,b)=>a+b)
  console.log(weeklyPlan)
  console.log(sum)
}

console.log(getCalories)


  return (
    <div>
    <Search />
    Generate a meal plan for 1 week

<form>
  <button>Generate</button>
</form>
    </div>
  )
}
