import { useState } from "react";

function FoodForm() {
  const [title, setTitle] = useState("");
  const [calorie, setCalorie] = useState(0);
  const [content, setContent] = useState("");

  const handleTitleChange = (e) => setTitle(e.target.value);

  const handleCalorieChange = (e) => {
    const nextCalorie = Number(e.target.value) || 0;
    setCalorie(nextCalorie);
  };

  const handleContentChange = (e) => setContent(e.target.value);

  return (
    <form>
      <input name="title" value={title} onChange={handleTitleChange} />
      <input
        type="number"
        name="calorie"
        value={calorie}
        onChange={handleCalorieChange}
      />
      <input name="content" value={content} onChange={handleContentChange} />
    </form>
  );
}

export default FoodForm;
