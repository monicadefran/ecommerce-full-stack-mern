import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Products from './Pages/Products';
import Details from './Pages/Details';
import NoPage from './Pages/NoPage';
import Cart from './Pages/Cart.jsx';


function App() {
  return (
    
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} /> 
          <Route path="/" element={<Home />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Details/:id" element={<Details />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>

  );
}

export default App;