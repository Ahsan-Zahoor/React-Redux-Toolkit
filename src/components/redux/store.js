import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserReducer";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistStore } from "redux-persist";
import { productsApi } from "./UserReducer";

const persistConfig = {
  key: "reduxState",
  storage,
};

const rootReducer = combineReducers({
  user: userReducer,
  [productsApi.reducerPath]: productsApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

const persistor = persistStore(store);

export { store, persistor };
