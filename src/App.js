import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import store from './components/redux/store';
import HooksUserContainer from './components/HooksUserContainer';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route exact path="/" element={<HooksUserContainer />} />
          <Route exact path="/:id" element={<ProductDetails />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
