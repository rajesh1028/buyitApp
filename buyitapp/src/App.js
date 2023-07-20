import './App.css';
import Header from './components/Header';
import Footer from './components/Footer'
import Home from './components/Home';
import About from './components/About'
import Product from './components/Product'
import Contact from './components/Contact'
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Login from './components/Login';
import Signup from './components/Signup';
import NotFound from './components/NotFound';
import { Route, Routes } from 'react-router';
import PrivateRoute from './components/PrivateRoute';

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={
          <PrivateRoute>
            <Product />
          </PrivateRoute>
        } />
        <Route path="/products/:id" element={
          <PrivateRoute>
            <ProductDetail />
          </PrivateRoute>
        } />
        <Route path="/cart" element={
          <PrivateRoute>
            <Cart />
          </PrivateRoute>} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
