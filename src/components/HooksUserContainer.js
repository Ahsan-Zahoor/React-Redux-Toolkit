import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import CartItemsDropdown from "./CartItemsDropdown";
import { useGetProductQuery } from "./redux/UserReducer";
import {
  fetchProductsData,
  setCartProducts,
  addToCart,
  increment,
  decrement,
} from "./redux/UserReducer";

import "./style.scss";

const HooksUserContainer = () => {
  const dispatch = useDispatch();
  const cartCount = useSelector((state) => state.user?.cartCount);
  const cartProducts = useSelector((state) => state.user?.cartProducts);
  const [cartDropdown, setCartDropDown] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    dispatch(fetchProductsData())
      .unwrap()
      .then((res) => setProducts(res))
      .catch((err) => console.log(err));
  }, []);

  const addProductsToCart = (product) => {
    if (!cartProducts.some((cartProduct) => cartProduct.id === product.id)) {
      let temp = { ...product, qty: 1 };
      dispatch(setCartProducts(temp));
      dispatch(addToCart(cartProducts.length + 1));
    } else {
      dispatch(increment(product.id));
    }
  };

  const { data: getProductData } = useGetProductQuery(5);

  console.log("rtk query: ", getProductData);

  return (
    <>
      <div className="d-flex justify-content-around">
        <h2>Products</h2>
        <button onClick={() => setCartDropDown(!cartDropdown)}>
          Cart {cartCount}
        </button>
        {cartDropdown && (
          <CartItemsDropdown
            cart={cartProducts}
            increment={increment}
            decrement={decrement}
          />
        )}
      </div>

      <div className="products">
        {products?.map((product) => (
          <div className="card" key={product.id}>
            <img className="card-img-top" src={product.image} alt="Card cap" />
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">{product.description}</p>
              <p>Price: {product.price}</p>
            </div>
            <Link to={`${product.id}`}>Click To see details</Link>
            <button onClick={() => addProductsToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default HooksUserContainer;
