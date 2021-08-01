import React, { useEffect } from "react";
import Product from "./Product";
import { useDispatch, useSelector } from "react-redux";
import { getTotals } from "../../store/slices/productsSlice";

import "./Products.css";

const ListProducts = () => {
  const products = useSelector((state) => state.products.productItems);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [products, dispatch]);

  return (
    <>
      <div className="products-container">
        <h2 className="products-new-arrival">New Arrivals</h2>
        <div className="products-grid">
          {products &&
            products.map((product) => (
              <Product key={product._id} product={product} />
            ))}
        </div>
        <h2 className="products-special-offer">Special Offer</h2>
        <div className="products-grid">
          {products &&
            products.map((product) => (
              <Product key={product._id} product={product} />
            ))}
        </div>
      </div>
    </>
  );
};

export default ListProducts;
