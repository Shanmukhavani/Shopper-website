import './App.css';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Product from './Pages/Product';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Footer from './components/Footer/Footer';
import { NavBar } from './components/NavBar/NavBar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import men_bannner from './components/Assets/banner_mens.png';
import women_banner from './components/Assets/banner_women.png';
import kids_banner from './components/Assets/banner_kids.png';
function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/men' element={<ShopCategory banner={men_bannner} category="men" />}/>
        <Route path='/women' element={<ShopCategory banner={women_banner} category="women"/>}/>
        <Route path='/kids' element={<ShopCategory banner={kids_banner} category="kid"/>}/>
        <Route path="/product" element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>

          </Route>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
