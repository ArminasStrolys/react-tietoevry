import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MealPlan from "../mealPlan/MealPlan";
import PartyIdeas from "../partyIdeas/PartyIdeas";
import Dishes from "../dishes/dishes";

function App() {
  return (
    <div className="App">
      <ul className="nav-bar">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/monthly-plan">Meal plan</a>
        </li>
        <li>
          <a href="/party-ideas">Party snack ideas</a>
        </li>
      </ul>

      <Router>
        <Routes>
          <Route path="/" element={<Dishes />} />
          <Route path="/monthly-plan" element={<MealPlan />} />
          <Route path="/party-ideas" element={<PartyIdeas />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
