import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  numOfUsers: 7,
  products: [],
  error: "",
  cartCount: 0,
  cartProducts: [],
};

export const fetchProductsData = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    increment(state, action) {
      state.cartProducts.find((item) => item.id === action.payload).qty += 1;
    },
    decrement(state, action) {
      let existingProduct = state.cartProducts.find(
        (i) => i.id === parseInt(action.payload)
      );

      if (existingProduct.qty === 1) {
        state.cartProducts = state.cartProducts.filter(
          (product) => product.id !== parseInt(action.payload)
        );
        state.cartCount = state.cartProducts.length;
      } else {
        existingProduct.qty -= 1;
      }
    },
    deleteProduct(state, action) {
      state.cartProducts = state.cartProducts.filter(
        (product) => product.id !== parseInt(action.payload)
      );
      state.cartCount = state.cartProducts.length;
    },
    setCartProducts(state, action) {
      state.cartProducts.push(action.payload);
    },
    addToCart(state, action) {
      state.cartCount = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProductsData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProductsData.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    });
    builder.addCase(fetchProductsData.rejected, (state, action) => {
      state.loading = false;
      state.products = [];
      state.error = action.error.message;
    });
  },
});

export const {
  setCartProducts,
  addToCart,
  increment,
  decrement,
  deleteProduct,
} = userSlice.actions;
export default userSlice.reducer;
