import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { FaPlus, FaMinus, FaTrashAlt } from 'react-icons/fa';
import { fallbackBakeryImage } from '../data/products';

const CartItem = ({ item }) => {
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useCart();

  if (!item) return null;

  const itemTotal = item.price * item.quantity;

  return (
    <div className="bg-bakery-surface border border-bakery-border rounded-2xl p-4 sm:p-5 shadow-sm transition-all duration-200 hover:shadow-card flex flex-col sm:flex-row items-center gap-4">
      {/* Product Thumbnail */}
      <Link
        to={`/product/${item.id}`}
        className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden shrink-0 bg-amber-50/50 border border-bakery-border group"
      >
        <img
          src={item.image}
          alt={item.name}
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = fallbackBakeryImage;
          }}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </Link>

      {/* Item Info */}
      <div className="flex-1 min-w-0 text-center sm:text-left">
        <span className="text-[11px] uppercase tracking-wider font-semibold text-bakery-muted">
          {item.category}
        </span>
        <h4 className="font-serif text-lg font-bold text-bakery-primary hover:text-bakery-accent transition-colors truncate">
          <Link to={`/product/${item.id}`}>{item.name}</Link>
        </h4>
        <p className="text-sm text-bakery-muted mt-0.5">
          ₹{item.price} each
        </p>
      </div>

      {/* Quantity Selector */}
      <div className="flex items-center gap-3">
        <div className="flex items-center border border-bakery-border rounded-full bg-bakery-bg p-1">
          <button
            type="button"
            onClick={() => decreaseQuantity(item.id)}
            className="w-8 h-8 rounded-full flex items-center justify-center text-bakery-primary hover:bg-bakery-surface hover:text-bakery-accent transition-colors active:scale-95"
            aria-label="Decrease quantity"
          >
            <FaMinus className="w-2.5 h-2.5" />
          </button>
          <span className="w-10 text-center text-sm font-bold text-bakery-primary select-none">
            {item.quantity}
          </span>
          <button
            type="button"
            onClick={() => increaseQuantity(item.id)}
            className="w-8 h-8 rounded-full flex items-center justify-center text-bakery-primary hover:bg-bakery-surface hover:text-bakery-accent transition-colors active:scale-95"
            aria-label="Increase quantity"
          >
            <FaPlus className="w-2.5 h-2.5" />
          </button>
        </div>

        {/* Item Total */}
        <div className="text-right min-w-[80px]">
          <span className="text-[10px] uppercase font-semibold text-bakery-muted block sm:hidden">Subtotal</span>
          <span className="font-serif text-lg font-bold text-bakery-primary">
            ₹{itemTotal}
          </span>
        </div>

        {/* Delete Item Button */}
        <button
          type="button"
          onClick={() => removeFromCart(item.id)}
          className="p-2.5 text-bakery-muted hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-colors"
          title="Remove from cart"
          aria-label={`Remove ${item.name} from cart`}
        >
          <FaTrashAlt className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
