import React from "react";
import { useDispatch } from "react-redux";
import { deleteProduct } from "./redux/UserReducer";

function CartItemsDropdown({ cart, increment, decrement }) {
  const dispatch = useDispatch();

  return (
    <>
      {cart.map((i) => {
        return (
          <div key={i.id}>
            <h5 className="card-title">{i.title}</h5>
            <p>Price: {i.price}</p>
            <p>Count: {i.qty}</p>
            <span>
              <button onClick={() => dispatch(increment(i.id))}>+</button>
              <button onClick={() => dispatch(decrement(i.id))}>-</button>
            </span>
            <button onClick={() => dispatch(deleteProduct(i.id))}>
              Delete
            </button>
          </div>
        );
      })}
    </>
  );
}

export default CartItemsDropdown;
