import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import CartItem from '../components/CartItem';
import Button from '../components/Button';
import { 
  FaShoppingBag, 
  FaArrowRight, 
  FaTrashAlt, 
  FaArrowLeft, 
  FaTruck, 
  FaTag, 
  FaShieldAlt, 
  FaBreadSlice 
} from 'react-icons/fa';

const Cart = () => {
  const { 
    cartItems, 
    cartCount, 
    subtotal, 
    delivery, 
    discount, 
    total, 
    clearCart 
  } = useCart();
  const navigate = useNavigate();

  // If cart is empty
  if (cartItems.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-6">
        <div className="w-24 h-24 rounded-full bg-bakery-accent/15 flex items-center justify-center text-bakery-accent mx-auto text-4xl shadow-soft">
          <FaShoppingBag />
        </div>
        <div className="space-y-2">
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-bakery-primary">
            Your Cart is Empty
          </h1>
          <p className="text-bakery-muted text-sm sm:text-base max-w-md mx-auto">
            Your bakery basket is feeling light! Browse our fresh oven treats, artisanal cakes, and flaky pastries to fill it up.
          </p>
        </div>
        <div className="pt-2">
          <Link to="/shop">
            <Button size="lg" variant="primary" icon={FaBreadSlice} className="shadow-warm">
              Explore Our Bakery
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const freeDeliveryThreshold = 999;
  const remainingForFreeDelivery = freeDeliveryThreshold - subtotal;
  const discountThreshold = 1500;
  const remainingForDiscount = discountThreshold - subtotal;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      
      {/* Page Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-bakery-border">
        <div>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-bakery-primary">
            Artisanal Basket
          </h1>
          <p className="text-sm text-bakery-muted mt-1">
            Review your selected bakery treats ({cartCount} {cartCount === 1 ? 'item' : 'items'})
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Link to="/shop" className="text-xs sm:text-sm font-semibold text-bakery-muted hover:text-bakery-accent flex items-center gap-1.5 transition-colors">
            <FaArrowLeft className="w-3 h-3" />
            <span>Continue Shopping</span>
          </Link>
          <button
            type="button"
            onClick={clearCart}
            className="text-xs sm:text-sm font-semibold text-rose-600 hover:text-rose-700 hover:bg-rose-50 px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5"
            aria-label="Clear cart"
          >
            <FaTrashAlt className="w-3 h-3" />
            <span>Clear Cart</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Cart Items List */}
        <div className="lg:col-span-8 space-y-4">
          
          {/* Free Delivery Progress Banner */}
          <div className="bg-bakery-surface border border-bakery-border rounded-2xl p-4 shadow-sm space-y-2">
            <div className="flex items-center justify-between text-xs sm:text-sm">
              <span className="font-semibold text-bakery-primary flex items-center gap-2">
                <FaTruck className="text-bakery-accent" />
                {remainingForFreeDelivery <= 0 ? (
                  <span className="text-emerald-700">🎉 Congratulations! You have unlocked FREE Delivery!</span>
                ) : (
                  <span>Add ₹{remainingForFreeDelivery} more to unlock <strong>FREE Delivery</strong></span>
                )}
              </span>
              <span className="text-xs text-bakery-muted font-medium">
                Threshold: ₹{freeDeliveryThreshold}
              </span>
            </div>
            
            <div className="w-full bg-bakery-bg rounded-full h-2 overflow-hidden border border-bakery-border">
              <div
                className="bg-bakery-accent h-full rounded-full transition-all duration-500"
                style={{
                  width: `${Math.min(100, Math.round((subtotal / freeDeliveryThreshold) * 100))}%`
                }}
              />
            </div>
          </div>

          {/* List of items */}
          <div className="space-y-3">
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          {/* Security & Care Note */}
          <div className="flex items-center gap-3 p-4 bg-bakery-surface/60 border border-bakery-border rounded-2xl text-xs text-bakery-muted">
            <FaShieldAlt className="w-5 h-5 text-bakery-accent shrink-0" />
            <span>All treats are packaged in food-grade, thermal-insulated boxes to preserve moisture and freshness during transit.</span>
          </div>

        </div>

        {/* Right Column: Order Summary Card */}
        <div className="lg:col-span-4 bg-bakery-surface border border-bakery-border rounded-3xl p-6 sm:p-7 shadow-card space-y-6 sticky top-28">
          <h2 className="font-serif text-2xl font-bold text-bakery-primary border-b border-bakery-border pb-4">
            Order Summary
          </h2>

          <div className="space-y-3 text-sm">
            <div className="flex justify-between text-bakery-muted">
              <span>Subtotal</span>
              <span className="font-semibold text-bakery-primary">₹{subtotal}</span>
            </div>

            {/* Delivery calculation */}
            <div className="flex justify-between text-bakery-muted">
              <span className="flex items-center gap-1.5">
                <span>Delivery Charge</span>
                {delivery === 0 && (
                  <span className="text-[10px] uppercase font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
                    Free
                  </span>
                )}
              </span>
              <span className="font-semibold text-bakery-primary">
                {delivery === 0 ? '₹0' : `₹${delivery}`}
              </span>
            </div>

            {/* Discount calculation */}
            {discount > 0 ? (
              <div className="flex justify-between text-emerald-700 bg-emerald-50/80 p-2.5 rounded-xl border border-emerald-200">
                <span className="flex items-center gap-1.5 font-medium">
                  <FaTag className="w-3.5 h-3.5" />
                  <span>Subtotal Special (₹1500+)</span>
                </span>
                <span className="font-bold">-₹{discount}</span>
              </div>
            ) : (
              remainingForDiscount > 0 && (
                <div className="text-xs text-bakery-muted bg-bakery-bg p-2.5 rounded-xl border border-bakery-border">
                  💡 Add <strong>₹{remainingForDiscount}</strong> more to get <strong>₹100 flat discount</strong>!
                </div>
              )
            )}

            {/* Total */}
            <div className="pt-4 border-t border-bakery-border flex items-baseline justify-between">
              <div>
                <span className="font-serif text-lg font-bold text-bakery-primary block">Grand Total</span>
                <span className="text-[11px] text-bakery-muted">Includes all bakery taxes</span>
              </div>
              <span className="font-serif text-2xl sm:text-3xl font-extrabold text-bakery-accent">
                ₹{total}
              </span>
            </div>
          </div>

          {/* Checkout CTA */}
          <div className="pt-2 space-y-3">
            <Button
              size="lg"
              variant="primary"
              fullWidth
              icon={FaArrowRight}
              onClick={() => navigate('/checkout')}
              className="shadow-warm"
            >
              Proceed to Checkout
            </Button>

            <Link to="/shop" className="block text-center text-xs font-semibold text-bakery-muted hover:text-bakery-accent transition-colors">
              or browse more artisanal delicacies
            </Link>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Cart;
