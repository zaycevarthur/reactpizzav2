import React, { useState } from "react";

function Categories() {
  const categories = ["Все", "Мясные", "Вегетарианские"];
  const [activeIndex, setActive] = useState(0);

  return (
    <div className="categories">
      <ul>
        {categories.map((catigory, i) => (
          <li
            key={i}
            onClick={() => setActive(i)}
            className={activeIndex === i ? "active" : ""}
          >
            {catigory}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
