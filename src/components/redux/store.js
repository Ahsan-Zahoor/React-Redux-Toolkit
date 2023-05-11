import { createStore, applyMiddleware } from "redux";
// import { composeWithDevTools } from "@redux-devtools/extension";
// import logger from "redux-logger";
import thunk from "redux-thunk";
import userReducer from "./UserReducer";

// const persistedState = localStorage.getItem('reduxState')
//   ? JSON.parse(localStorage.getItem('reduxState'))
//   : {
//     numOfUsers: 7,
//     products: [],
//     error: '',
//     cartCount: 0,
//     cartProducts: []
//   };

const store = createStore(userReducer, applyMiddleware(thunk));

store.subscribe(() => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});

export default store;
