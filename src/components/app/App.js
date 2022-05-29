import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MonthlyPlan from "../monthlyPlan/MonthlyPlan";
import PartyIdeas from "../partyIdeas/PartyIdeas";
import Dishes from "../dishes/dishes";

function App() {
  return (
    <div className="App">
      <h1>Food for the people</h1>
      <ul>
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
          <Route path="/monthly-plan" element={<MonthlyPlan />} />
          <Route path="/party-ideas" element={<PartyIdeas />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
