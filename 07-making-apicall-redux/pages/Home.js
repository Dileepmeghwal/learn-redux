import React from "react";
import Product from "../components/Product";
import { useSelector } from "react-redux";
import {
  getAllProductList,
  getError,
  getloading,
  getProductList,
} from "../store/slices/productsSlice";

const Home = () => {
  const loading = useSelector(getloading);
  const error = useSelector(getError);
  const productlist = useSelector(getProductList);
  console.log(productlist);

  return (
    <>
      {loading ? (
        <h4 style={{ textAlign: "center" }}>Loading....</h4>
      ) : (
        <>
          {error ? (
            <h4 style={{ textAlign: "center" }}>{error}</h4>
          ) : (
            <div className="products-container">
              {productlist?.map(({ id, title, rating, price, image }) => (
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
          )}
        </>
      )}
    </>
  );
};

export default Home;
