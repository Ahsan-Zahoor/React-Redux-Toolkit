import {
  DELETE_USER,
  FETCH_USERS,
  FETCH_USERS_FAILURE,
  FETCH_PRODUCTS,
  ADD_TO_CART,
  SET_CART_PRODUCTS,
} from "./UserType";

const inititalState = {
  numOfUsers: 7,
  products: [],
  error: "",
  cartCount: 0,
  cartProducts: [],
};

const userReducer = (state = inititalState, action) => {
  switch (action.type) {
    case DELETE_USER:
      return {
        ...state,
        numOfUsers: state.numOfUsers - 1,
      };

    case SET_CART_PRODUCTS:
      return {
        ...state,
        cartProducts: action.payload,
      };

    case FETCH_USERS:
      return {
        ...state,
        numOfUsers: action.payload,
        error: "",
      };

    case FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        error: "",
      };

    case FETCH_USERS_FAILURE:
      return {
        ...state,
        numOfUsers: 0,
        error: action.payload,
      };

    case ADD_TO_CART:
      return {
        ...state,
        cartCount: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
