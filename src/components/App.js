import { useState } from "react";
import FoodList from "./FoodList";
import items from "../mock.json";

function App() {
  const [order, setOrder] = useState("createdAt");
  const handleNewestClick = () => setOrder("createdAt");
  const handleCalorieClick = () => setOrder("calorie");
  const sortedItems = items.sort((a, b) => b[order] - a[order]);
  return (
    <div>
      <button onClick={handleNewestClick}>최신순</button>
      <button onClick={handleCalorieClick}>칼로리순</button>
      <FoodList items={sortedItems} />
    </div>
  );
}

export default App;
