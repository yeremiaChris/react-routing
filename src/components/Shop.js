import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Shop() {
  useEffect(() => {
    fetchItems();
  }, []);

  // itu ada async karena ini datang dari database
  const fetchItems = async () => {
    const data = await fetch(
      "https://fortnite-public-api.theapinetwork.com/prod09/upcoming/get"
    );
    const items = await data.json();
    console.log(items);
  };

  return (
    <div>
      <h2>Shop</h2>
    </div>
  );
}

export default Shop;
