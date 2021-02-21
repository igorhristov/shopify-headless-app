import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import { ShopContext } from "../context/shopContext";

const Home = () => {
  const { fetchAllProducts, products } = useContext(ShopContext);

  useEffect(() => {
    fetchAllProducts();
  }, [fetchAllProducts]);

  if (!products) return <div>Loading...</div>;

  return (
    <div>
      {products.map((product) => (
        <h1>
          <Link to={`/products/${product.handle}`}>{product.title}</Link>
        </h1>
      ))}
    </div>
  );
};

export default Home;
