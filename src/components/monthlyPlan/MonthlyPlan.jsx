import React, { useState } from "react";
import Search from "../search/Search";
import data from "../../data/data.json";

export default function MonthlyPlan() {
  // const [getCalories, setGetCalories] = useState("");
  // const getCals = (data) => {
  //   setGetCalories(data);
  // };

  function rndNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  // let sum = 0;
  // const weeklyPlan = [];
  // const ids = []

  // rndNum(0,data.length)
  // console.log(data[0].nutrition.calories)
  // while (sum >= getCalories){
  //   weeklyPlan.push(10)
  //   sum = weeklyPlan.reduce((a,b)=>a+b)
  //   console.log(weeklyPlan)
  // }

  // while (getCalories > sum) {
  //   let x = rndNum(0, data.length - 1)
  //   weeklyPlan.push(data[x].nutrition.calories);
  //   ids.push(x)
  //   sum = Math.round(weeklyPlan.reduce((a, b) => a + b));
  //   console.log(weeklyPlan);
  //   console.log('sum',sum);
  // }


  const plan = [];
  const week = 7;
  for (let i = 1; i <= week; i++) {
    while (true) {
      let x = rndNum(0, data.length - 1);
      if (Object.values(data[x])[4] === true) {
        plan.push(Object.values(data[x]));
        break;
      } else {
        continue;
      }
    }
    while (true) {
      let x = rndNum(0, data.length - 1);
      if (Object.values(data[x])[7] === true) {
        plan.push(Object.values(data[x]));
        break;
      } else {
        continue;
      }
    }
    while (true) {
      let x = rndNum(0, data.length - 1);
      if (Object.values(data[x])[5] === true) {
        plan.push(Object.values(data[x]));
        break;
      } else {
        continue;
      }
    }
    while (true) {
      let x = rndNum(0, data.length - 1);
      if (Object.values(data[x])[6] === true) {
        plan.push(Object.values(data[x]));
        break;
      } else {
        continue;
      }
    }
  }

  console.log(plan);

  return (
    <div>
      {/* <Search getCals={getCals} /> */}
      <Search />
      Generate a meal plan for 1 week
      <div>{}</div>
    </div>
  );
}

//4 breakfast
//5 dinner
//6 supper
