import React, { useState } from "react";

function Categories({ value, onClickCategory }) {
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианские",
    "Гриль",
    "Острые",
    "Закрытые",
  ];
  // const [activeIndex, setActive] = useState(0);

  return (
    <div className="categories">
      <ul>
        {categories.map((catigory, i) => (
          <li
            key={i}
            onClick={() => onClickCategory(i)}
            className={value === i ? "active" : ""}
          >
            {catigory}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
