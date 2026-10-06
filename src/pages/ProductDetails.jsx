import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { products, fallbackBakeryImage } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';
import Button from '../components/Button';
import { 
  FaStar, 
  FaPlus, 
  FaMinus, 
  FaShoppingBag, 
  FaBolt, 
  FaCheckCircle, 
  FaArrowLeft, 
  FaTruck, 
  FaShieldAlt, 
  FaLeaf,
  FaBreadSlice 
} from 'react-icons/fa';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const product = products.find((p) => p.id === Number(id));

  // If product not found
  if (!product) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-6">
        <div className="w-20 h-20 rounded-full bg-bakery-accent/15 flex items-center justify-center text-bakery-accent mx-auto text-3xl">
          <FaBreadSlice />
        </div>
        <span className="text-xs font-bold uppercase tracking-wider text-bakery-muted">
          404 - Item Not Found
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-bakery-primary">
          Artisan Delicacy Not Found
        </h1>
        <p className="text-bakery-muted text-sm sm:text-base max-w-md mx-auto">
          The treat you're looking for might have been retired from our seasonal oven schedule or moved to a different catalog.
        </p>
        <div>
          <Link to="/shop">
            <Button variant="primary" size="lg" icon={FaArrowLeft}>
              Return to Bakehouse Shop
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  // Handle quantity adjustments
  const handleDecrease = () => {
    if (quantity > 1) setQuantity(prev => prev - 1);
  };

  const handleIncrease = () => {
    setQuantity(prev => prev + 1);
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity);
    navigate('/checkout');
  };

  // Related products from the same category
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-16">
      
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs sm:text-sm text-bakery-muted" aria-label="Breadcrumb">
        <Link to="/" className="hover:text-bakery-accent transition-colors">
          Home
        </Link>
        <span>/</span>
        <Link to="/shop" className="hover:text-bakery-accent transition-colors">
          Shop
        </Link>
        <span>/</span>
        <Link
          to={`/shop?category=${encodeURIComponent(product.category)}`}
          className="hover:text-bakery-accent transition-colors"
        >
          {product.category}
        </Link>
        <span>/</span>
        <span className="text-bakery-primary font-medium truncate max-w-[200px] sm:max-w-none">
          {product.name}
        </span>
      </nav>

      {/* Main Product Showcase Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        
        {/* Left: Large Product Image Showcase */}
        <div className="lg:col-span-6 space-y-4">
          <div className="relative aspect-[4/3] sm:aspect-square w-full rounded-3xl overflow-hidden bg-amber-50/50 border border-bakery-border shadow-card">
            <img
              src={product.image}
              alt={product.name}
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = fallbackBakeryImage;
              }}
              className="w-full h-full object-cover"
            />
            
            {/* Category badge */}
            <div className="absolute top-4 left-4">
              <span className="bg-bakery-surface/90 backdrop-blur-md text-bakery-primary text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full border border-bakery-border shadow-sm">
                {product.category}
              </span>
            </div>

            {product.isBestSeller && (
              <div className="absolute top-4 right-4">
                <span className="bg-bakery-accent text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                  Patisserie Bestseller
                </span>
              </div>
            )}
          </div>

          {/* Guarantee Badges Row */}
          <div className="grid grid-cols-3 gap-3 pt-2 text-center">
            <div className="bg-bakery-surface border border-bakery-border rounded-xl p-3 flex flex-col items-center gap-1.5">
              <FaTruck className="w-4 h-4 text-bakery-accent" />
              <span className="text-[11px] font-bold text-bakery-primary">Same-Day Delivery</span>
            </div>
            <div className="bg-bakery-surface border border-bakery-border rounded-xl p-3 flex flex-col items-center gap-1.5">
              <FaShieldAlt className="w-4 h-4 text-bakery-accent" />
              <span className="text-[11px] font-bold text-bakery-primary">Freshness Guarantee</span>
            </div>
            <div className="bg-bakery-surface border border-bakery-border rounded-xl p-3 flex flex-col items-center gap-1.5">
              <FaLeaf className="w-4 h-4 text-bakery-accent" />
              <span className="text-[11px] font-bold text-bakery-primary">Natural Ingredients</span>
            </div>
          </div>
        </div>

        {/* Right: Product Details & Purchase Actions */}
        <div className="lg:col-span-6 space-y-6">
          
          {/* Header & Rating */}
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="text-xs uppercase tracking-widest font-bold text-bakery-accent">
                {product.category}
              </span>
              <span className="text-bakery-border">•</span>
              <div className="flex items-center gap-1.5 text-xs">
                <div className="flex items-center text-amber-500">
                  <FaStar className="w-3.5 h-3.5 fill-current" />
                </div>
                <span className="font-bold text-bakery-primary">{product.rating}</span>
                <span className="text-bakery-muted">({product.reviews} customer reviews)</span>
              </div>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-bakery-primary leading-tight">
              {product.name}
            </h1>
          </div>

          {/* Price & Weight */}
          <div className="flex items-baseline gap-4 py-2 border-y border-bakery-border/70">
            <div className="flex items-baseline gap-1">
              <span className="font-serif text-3xl sm:text-4xl font-bold text-bakery-accent">
                ₹{product.price}
              </span>
              <span className="text-xs text-bakery-muted ml-1 font-medium">
                (Inclusive of all taxes)
              </span>
            </div>
            {product.weight && (
              <span className="text-xs font-semibold text-bakery-muted bg-bakery-bg px-3 py-1 rounded-full border border-bakery-border">
                {product.weight}
              </span>
            )}
          </div>

          {/* Description */}
          <div className="space-y-3">
            <p className="text-bakery-primary text-base font-medium leading-relaxed">
              {product.description}
            </p>
            <p className="text-bakery-muted text-sm leading-relaxed">
              {product.longDescription}
            </p>
          </div>

          {/* Ingredients */}
          {product.ingredients && product.ingredients.length > 0 && (
            <div className="space-y-2.5 pt-2">
              <h3 className="text-xs uppercase tracking-wider font-bold text-bakery-muted">
                Key Artisan Ingredients
              </h3>
              <div className="flex flex-wrap gap-2">
                {product.ingredients.map((ingredient, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-medium bg-bakery-surface border border-bakery-border px-3 py-1 rounded-full text-bakery-primary shadow-xs"
                  >
                    {ingredient}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Availability Status */}
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50/80 border border-emerald-200/60 px-3.5 py-2 rounded-xl">
            <FaCheckCircle className="w-4 h-4 shrink-0 text-emerald-600" />
            <span>In Stock — Freshly baked in today's morning oven batch.</span>
          </div>

          {/* Quantity Selector & Action Buttons */}
          <div className="pt-4 space-y-4">
            <div className="flex items-center gap-4">
              <span className="text-sm font-semibold text-bakery-primary">Quantity:</span>
              <div className="flex items-center border border-bakery-border rounded-full bg-bakery-bg p-1">
                <button
                  type="button"
                  onClick={handleDecrease}
                  className="w-9 h-9 rounded-full flex items-center justify-center text-bakery-primary hover:bg-bakery-surface hover:text-bakery-accent transition-colors disabled:opacity-40"
                  disabled={quantity <= 1}
                  aria-label="Decrease quantity"
                >
                  <FaMinus className="w-2.5 h-2.5" />
                </button>
                <span className="w-12 text-center font-bold text-bakery-primary select-none">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={handleIncrease}
                  className="w-9 h-9 rounded-full flex items-center justify-center text-bakery-primary hover:bg-bakery-surface hover:text-bakery-accent transition-colors"
                  aria-label="Increase quantity"
                >
                  <FaPlus className="w-2.5 h-2.5" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <Button
                variant="outline"
                size="lg"
                icon={FaShoppingBag}
                onClick={handleAddToCart}
                fullWidth
              >
                Add to Cart
              </Button>
              <Button
                variant="primary"
                size="lg"
                icon={FaBolt}
                onClick={handleBuyNow}
                fullWidth
                className="shadow-warm"
              >
                Buy Now
              </Button>
            </div>
          </div>

        </div>

      </div>

      {/* RELATED PRODUCTS SECTION */}
      {relatedProducts.length > 0 && (
        <section className="pt-12 border-t border-bakery-border space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs uppercase tracking-widest font-bold text-bakery-accent">
                More from {product.category}
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-bakery-primary mt-1">
                Related Artisan Treats
              </h2>
            </div>
            <Link
              to={`/shop?category=${encodeURIComponent(product.category)}`}
              className="text-xs sm:text-sm font-semibold text-bakery-accent hover:underline"
            >
              View All {product.category} →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relProduct) => (
              <ProductCard key={relProduct.id} product={relProduct} />
            ))}
          </div>
        </section>
      )}

    </div>
  );
};

export default ProductDetails;
