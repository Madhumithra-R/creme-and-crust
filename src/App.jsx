import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Toast from './components/Toast';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import OrderSuccess from './pages/OrderSuccess';
import About from './pages/About';
import Contact from './pages/Contact';
import Button from './components/Button';
import { FaBreadSlice } from 'react-icons/fa';

// Elegant 404 Fallback component
const NotFoundPage = () => (
  <div className="max-w-3xl mx-auto px-4 py-24 text-center space-y-6">
    <div className="w-20 h-20 rounded-full bg-bakery-accent/15 flex items-center justify-center text-bakery-accent mx-auto text-3xl">
      <FaBreadSlice />
    </div>
    <span className="text-xs font-bold uppercase tracking-wider text-bakery-muted">
      Page Not Found
    </span>
    <h1 className="font-serif text-3xl sm:text-5xl font-bold text-bakery-primary">
      Oops! This Batch Is Missing
    </h1>
    <p className="text-bakery-muted text-sm sm:text-base max-w-md mx-auto">
      The page you're trying to visit doesn't exist or has been shifted to another counter in our bakery.
    </p>
    <div className="pt-2">
      <Link to="/">
        <Button variant="primary" size="lg">
          Return to Crème & Crust Home
        </Button>
      </Link>
    </div>
  </div>
);

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-bakery-bg text-bakery-primary font-sans antialiased">
      <ScrollToTop />
      <Navbar />
      
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order-success" element={<OrderSuccess />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      <Footer />
      <Toast />
    </div>
  );
}

export default App;
