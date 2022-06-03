import React, { useState } from "react";
import data from "../../data/data.json";
import Dish from "../dish/dish";

export default function MonthlyPlan() {
  function rndNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  const [visible, setVisible] = useState(false);
  const plan = [];
  const lan = [];
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
  // lan.push(Object.entries(data)[1][1])
  // console.log(lan)
  console.log(plan);

  // for (let i = 1; i <= week; i++) {
  //   while (true) {
  //     let x = rndNum(0, data.length - 1);
  //     if (Object.values(data[x])[4] === true) {
  //       lan.push(Object.entries(data[x]));
  //       break;
  //     } else {
  //       continue;
  //     }
  //   }
  // }

  return (
    <div>
      <br />
      <form onSubmit={(e) => e.preventDefault()}>
        <button className="plan-gen-btn"
          onClick={(e) =>
            visible === false ? setVisible(true) : setVisible(false)
          }
        >
          Generate plan
        </button>
      </form>

      <div className={visible === false ? "invisible" : "visible"}>
        <div className="mo">Monday</div>
        <div className="tu">Tuesday</div>
        <div className="we">Wednesday</div>
        <div className="th">Thursday</div>
        <div className="fr">Friday</div>
        <div className="sa">Saturday</div>
        <div className="su">Sunday</div>
        {plan.map((item) => (
          <Dish
            serving={item[2]}
            title={item[1]}
            // key={item[0]}
            calories={item[3].calories}
            fats={item[3].fats}
            carbs={item[3].carbs}
            protein={item[3].protein}
            breakfast={item[4]}
            dinner={item[5]}
            supper={item[6]}
            snack={item[7]}
          />
        ))}
      </div>
    </div>
  );
}
