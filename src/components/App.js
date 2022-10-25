import { getFoods } from "../api";
import { useEffect, useState } from "react";
import FoodList from "./FoodList";
// import mockitems from "../mock.json";

function App() {
  const [order, setOrder] = useState("createdAt");
  const [items, setItems] = useState([]);
  const handleNewestClick = () => setOrder("createdAt");
  const handleCalorieClick = () => setOrder("calorie");
  const handleDelete = (id) => {
    const nextItems = items.filter((item) => item.id !== id);
    setItems(nextItems);
  };
  const handleLoad = async () => {
    const { foods } = await getFoods();
    setItems(foods);
  };
  const sortedItems = items.sort((a, b) => b[order] - a[order]);

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <div>
      <button onClick={handleNewestClick}>최신순</button>
      <button onClick={handleCalorieClick}>칼로리순</button>
      <FoodList items={sortedItems} onDelete={handleDelete} />
    </div>
  );
}

export default App;
