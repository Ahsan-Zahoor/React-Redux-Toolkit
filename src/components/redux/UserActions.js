import {
  DELETE_USER,
  FETCH_USERS,
  FETCH_USERS_FAILURE,
  FETCH_PRODUCTS,
  ADD_TO_CART,
  SET_CART_PRODUCTS,
} from "./UserType";
import axios from "axios";

const deleteUser = () => {
  return {
    type: DELETE_USER,
  };
};

const fetchUsers = (users) => {
  return {
    type: FETCH_USERS,
    payload: users,
  };
};

const setCartProducts = (products) => {
  return {
    type: SET_CART_PRODUCTS,
    payload: products,
  };
};

const setProducts = (products) => {
  return {
    type: FETCH_PRODUCTS,
    payload: products,
  };
};

const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};

const addToCart = (count) => {
  return {
    type: ADD_TO_CART,
    payload: count,
  };
};

const fetchUsersData = () => {
  return async (dispatch) => {
    await axios
      .get("https://fakestoreapi.com/users")
      .then((response) => {
        const users = response.data.map((user) => user.id).length;
        console.log("users ", users);
        dispatch(fetchUsers(users));
      })
      .catch((error) => {
        console.log("error ", error);
        dispatch(fetchUsersFailure(error.message));
      });
  };
};

const fetchProductsData = () => {
  return async (dispatch) => {
    await axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        const products = response.data;
        dispatch(setProducts(products));
      })
      .catch((error) => {
        console.log("error ", error);
        dispatch(fetchUsersFailure(error.message));
      });
  };
};

export {
  deleteUser,
  fetchUsers,
  fetchUsersFailure,
  fetchUsersData,
  fetchProductsData,
  addToCart,
  setProducts,
  setCartProducts,
};
