import React, { useState } from "react";

function Categories() {
  const categories = ["Все", "Мясные", "Вегетарианские"];
  const [activeIndex, setActive] = useState(0);
  const onClickCatigory = (index) => {
    setActive(index);
  };
  return (
    <div className="categories">
      <ul>
        {categories.map((catigory, i) => (
          <li
            onClick={() => onClickCatigory(i)}
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
