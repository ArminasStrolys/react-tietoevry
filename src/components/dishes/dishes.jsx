import React, { useState } from "react";
import Search from "../search/Search";

const Dishes = () => {
  const [getCalories, setGetCalories] = useState("");
  const getCals = (data) => {
    setGetCalories(data);
  };

  return (
    <div>
      <Search getCals={getCals} />
      {getCalories > 0 ? console.log("not null") : console.log("null")}
    </div>
  );
};

export default Dishes;
