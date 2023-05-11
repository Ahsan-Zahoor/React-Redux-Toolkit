import React from "react";
import { useDispatch } from "react-redux";
import { setCartProducts } from "./redux/UserActions";

function CartItemsDropdown({ cart, increment, decrement }) {
  const dispatch = useDispatch();

  return (
    <>
      {cart.map((i) => {
        return (
          <div>
            <h5 className="card-title">{i.title}</h5>
            <p>Price: {i.price}</p>
            <p>Count: {i.qty}</p>
            <span>
              <button onClick={() => increment(i)}>Increment</button>
              <button onClick={() => decrement(i)}>Decrement</button>
            </span>
            <button
              onClick={() =>
                dispatch(
                  setCartProducts(cart.filter((product) => product.id !== i.id))
                )
              }
            >
              Delete
            </button>
          </div>
        );
      })}
    </>
  );
}

export default CartItemsDropdown;
