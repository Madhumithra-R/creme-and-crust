import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { categories } from '../data/products';
import { 
  FaShoppingBag, 
  FaBars, 
  FaTimes, 
  FaChevronDown,
  FaBreadSlice
} from 'react-icons/fa';

const Navbar = () => {
  const { cartCount } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoriesDropdownOpen, setCategoriesDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setCategoriesDropdownOpen(false);
  }, [location.pathname, location.search]);

  // Track scroll position for subtle shadow elevation
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinkClasses = ({ isActive }) =>
    `relative text-sm font-medium transition-colors duration-200 py-1.5 px-3 rounded-lg ${
      isActive
        ? 'text-bakery-accent font-semibold bg-bakery-accent/10'
        : 'text-bakery-primary hover:text-bakery-accent hover:bg-bakery-accent/5'
    }`;

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-bakery-surface/95 backdrop-blur-md shadow-soft border-b border-bakery-border'
            : 'bg-bakery-surface border-b border-bakery-border/70'
        }`}
      >
        {/* Top announcement bar */}
        <div className="bg-bakery-primary text-bakery-bg text-xs py-1.5 px-4 text-center tracking-wide font-medium flex items-center justify-center gap-2">
          <span>✨ Soft inside. Golden outside.</span>
          <span className="hidden sm:inline text-bakery-accentLight">•</span>
          <span className="hidden sm:inline">Free Delivery on artisan orders above ₹999</span>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-2 group select-none"
              aria-label="Crème & Crust Home"
            >
              <div className="w-10 h-10 rounded-full bg-bakery-accent/15 flex items-center justify-center text-bakery-accent group-hover:bg-bakery-accent group-hover:text-white transition-all duration-300">
                <FaBreadSlice className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-bakery-primary leading-none">
                  Crème <span className="text-bakery-accent font-serif italic font-normal">&</span> Crust
                </span>
                <span className="text-[10px] uppercase tracking-widest text-bakery-muted mt-0.5 font-semibold">
                  Artisanal Patisserie
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-3" aria-label="Main Navigation">
              <NavLink to="/" className={navLinkClasses}>
                Home
              </NavLink>
              <NavLink to="/shop" className={navLinkClasses}>
                Shop
              </NavLink>

              {/* Categories Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setCategoriesDropdownOpen(true)}
                onMouseLeave={() => setCategoriesDropdownOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => setCategoriesDropdownOpen(!categoriesDropdownOpen)}
                  className="flex items-center gap-1.5 text-sm font-medium text-bakery-primary hover:text-bakery-accent py-1.5 px-3 rounded-lg hover:bg-bakery-accent/5 transition-colors"
                  aria-expanded={categoriesDropdownOpen}
                >
                  <span>Categories</span>
                  <FaChevronDown
                    className={`w-3 h-3 text-bakery-muted transition-transform duration-200 ${
                      categoriesDropdownOpen ? 'rotate-180 text-bakery-accent' : ''
                    }`}
                  />
                </button>

                {categoriesDropdownOpen && (
                  <div className="absolute top-full left-0 w-64 pt-2 z-50 animate-fade-in">
                    <div className="bg-bakery-surface border border-bakery-border rounded-2xl shadow-card p-2 space-y-1">
                      {categories.map((cat) => (
                        <Link
                          key={cat.id}
                          to={`/shop?category=${encodeURIComponent(cat.slug)}`}
                          onClick={() => setCategoriesDropdownOpen(false)}
                          className="flex items-center justify-between px-3 py-2 text-sm text-bakery-primary hover:text-bakery-accent hover:bg-bakery-bg rounded-xl transition-all"
                        >
                          <span className="font-medium">{cat.name}</span>
                          <span className="text-xs text-bakery-muted bg-bakery-bg px-2 py-0.5 rounded-full border border-bakery-border">
                            {cat.itemCount}
                          </span>
                        </Link>
                      ))}
                      <div className="pt-1 border-t border-bakery-border/60">
                        <Link
                          to="/shop"
                          onClick={() => setCategoriesDropdownOpen(false)}
                          className="block text-center text-xs font-semibold text-bakery-accent py-1.5 hover:underline"
                        >
                          View All Categories →
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <NavLink to="/about" className={navLinkClasses}>
                About
              </NavLink>
              <NavLink to="/contact" className={navLinkClasses}>
                Contact
              </NavLink>
            </nav>

            {/* Right Action Icons (Cart & Mobile Menu Button) */}
            <div className="flex items-center gap-3">
              {/* Cart Button */}
              <Link
                to="/cart"
                className="relative p-2.5 rounded-full text-bakery-primary hover:text-bakery-accent hover:bg-bakery-accent/10 transition-colors"
                aria-label={`Shopping Cart with ${cartCount} items`}
              >
                <FaShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute top-1 right-1 bg-bakery-accent text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-bakery-surface shadow-sm animate-scale">
                    {cartCount > 99 ? '99+' : cartCount}
                  </span>
                )}
              </Link>

              {/* Mobile Hamburger Toggle */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2.5 rounded-xl text-bakery-primary hover:text-bakery-accent hover:bg-bakery-accent/10 focus:outline-none focus:ring-2 focus:ring-bakery-accent"
                aria-label="Toggle mobile menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <FaTimes className="w-6 h-6" />
                ) : (
                  <FaBars className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-bakery-surface border-b border-bakery-border px-4 pt-3 pb-6 space-y-4 shadow-xl">
            <nav className="flex flex-col space-y-1" aria-label="Mobile Navigation">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `px-4 py-2.5 rounded-xl text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-bakery-accent/15 text-bakery-accent font-semibold'
                      : 'text-bakery-primary hover:bg-bakery-bg'
                  }`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/shop"
                className={({ isActive }) =>
                  `px-4 py-2.5 rounded-xl text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-bakery-accent/15 text-bakery-accent font-semibold'
                      : 'text-bakery-primary hover:bg-bakery-bg'
                  }`
                }
              >
                Shop All Treats
              </NavLink>

              {/* Mobile Category Sublinks */}
              <div className="py-2 px-4">
                <span className="text-xs uppercase tracking-wider text-bakery-muted font-bold block mb-2">
                  Shop By Category
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {categories.map((cat) => (
                    <Link
                      key={cat.id}
                      to={`/shop?category=${encodeURIComponent(cat.slug)}`}
                      className="text-sm font-medium text-bakery-primary hover:text-bakery-accent py-1.5 px-2 rounded-lg bg-bakery-bg border border-bakery-border"
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
              </div>

              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `px-4 py-2.5 rounded-xl text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-bakery-accent/15 text-bakery-accent font-semibold'
                      : 'text-bakery-primary hover:bg-bakery-bg'
                  }`
                }
              >
                About Us
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `px-4 py-2.5 rounded-xl text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-bakery-accent/15 text-bakery-accent font-semibold'
                      : 'text-bakery-primary hover:bg-bakery-bg'
                  }`
                }
              >
                Contact
              </NavLink>
              <Link
                to="/cart"
                className="flex items-center justify-between px-4 py-2.5 rounded-xl text-base font-medium bg-bakery-accent text-white mt-3"
              >
                <span className="flex items-center gap-2">
                  <FaShoppingBag />
                  <span>My Cart</span>
                </span>
                <span className="bg-white/20 text-white text-xs px-2.5 py-1 rounded-full font-bold">
                  {cartCount} {cartCount === 1 ? 'item' : 'items'}
                </span>
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
