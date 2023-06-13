import "./App.css";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { ApiProvider } from "@reduxjs/toolkit/query/react";

import { store, persistor } from "./components/redux/store";
import HooksUserContainer from "./components/HooksUserContainer";
import ProductDetails from "./components/ProductDetails";
import { productsApi } from "./components/redux/UserReducer";

function App() {
  return (
    <Provider store={store}>
      {/* <ApiProvider api={productsApi}> */}
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Routes>
            <Route exact path="/" element={<HooksUserContainer />} />
            <Route exact path="/:id" element={<ProductDetails />} />
          </Routes>
        </Router>
      </PersistGate>
      {/* </ApiProvider> */}
    </Provider>
  );
}

export default App;
