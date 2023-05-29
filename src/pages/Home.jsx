import React, { useState, useEffect, useContext } from "react";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";
import Pagination from "../components/Pagination";
import { SearchContext } from "../App";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryId } from "../redux/slices/filterSlice";

function Home() {
  const dispatch = useDispatch();
  const { categoryId, store } = useSelector((state) => state.filter);

  const { searchValue } = useContext(SearchContext);
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [currentPape, setCurrentPape] = useState(1);

  const sortBy = store.sortProperty.replace("-", "");
  const orderBy = store.sortProperty.includes("-") ? "asc" : "desc";
  const category = categoryId > 0 ? `category=${categoryId}` : "";

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://646c8c187b42c06c3b2b7bcd.mockapi.io/items?limit=4&page=${currentPape}${category}&sortby=${sortBy}&order=${orderBy}`
    )
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, store.sortProperty, currentPape]);

  const skeletons = [...new Array(6)].map((_, i) => <Skeleton key={i} />);
  const pizzasBlocks = items
    .filter((obj) => {
      if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
        return true;
      }
      return false;
    })
    .map((obj) => <PizzaBlock key={obj.id} {...obj} />);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          value={categoryId}
          onClickCategory={(id) => dispatch(setCategoryId(id))}
        />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading ? skeletons : pizzasBlocks}
      </div>
      <Pagination onChangePage={(number) => setCurrentPape(number)} />
    </div>
  );
}

export default Home;
