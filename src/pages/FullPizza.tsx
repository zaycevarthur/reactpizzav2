import axios from "axios";
import React, { ReactElement, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


const FullPizza: React.FC = () => {
  const [pizza, setPizza] = useState<{
    title: string,
    price: number
  }>();

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          `https://646c8c187b42c06c3b2b7bcd.mockapi.io/items/${id}`
        );

        setPizza(data);
      } catch (error) {
        alert("Pizza wasn't fetched");

        navigate("/");
      }
    }

    fetchPizza();
  });

  if (!pizza) return <>"Loading..."</>;

  return (
    <div className="container">
      {/* <img src={pizza.imageUrl} alt="pizza" /> */}
      <h2>{pizza.title}</h2>
      <h2>{pizza.price}</h2>
    </div>
  );
}

export default FullPizza



