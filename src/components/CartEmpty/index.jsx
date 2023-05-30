import React from "react";
import { Link } from "react-router-dom";

function CartEmpty() {
  return (
    <div class="container container--cart">
      <div class="cart cart--empty">
        <h2>Корзина пустая</h2>
        <p>
          Вероятней всего, вы не заказывали ещё пиццу.
          <br />
          Для того, чтобы заказать пиццу, перейди на главную страницу.
        </p>

        <Link to="/" class="button button--black">
          <span>Вернуться назад</span>
        </Link>
      </div>
    </div>
  );
}

export default CartEmpty;
