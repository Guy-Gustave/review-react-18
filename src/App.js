import { Routes, Route, BrowserRouter } from "react-router-dom";
import './App.css';
import Header from './containers/Header';
import ProductDetails from './containers/ProductDetails';
import ProductList from './containers/ProductList';

function App() {
  return (
    <div className="App">
    <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element= < ProductList/> />
          <Route path='/product/:productId' element= < ProductDetails/> />
          <Route>404 not found  </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
