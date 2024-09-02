import React from "react";
import Product from "../components/Product";
import { useSelector } from "react-redux";

const Home = () => {
  const productList = useSelector((state) => state.products);
  //   console.log(productList);

  

  return (
    <div className="products-container">
      {productList.map(({ id, title, rating, price, image }) => (
        <Product
          key={id}
          productId={id}
          title={title}
          rating={rating.rate}
          price={price}
          imageUrl={image}
        />
      ))}
    </div>
  );
};

export default Home;
