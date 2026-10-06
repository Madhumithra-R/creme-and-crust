import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { FaStar, FaShoppingBag, FaEye } from 'react-icons/fa';
import Button from './Button';
import { fallbackBakeryImage } from '../data/products';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  if (!product) return null;

  return (
    <div className="group bg-bakery-surface border border-bakery-border rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between">
      {/* Product Image Container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-amber-50/30">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = fallbackBakeryImage;
          }}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Category Pill Tag */}
        <div className="absolute top-3 left-3">
          <span className="bg-bakery-surface/90 backdrop-blur-sm text-bakery-primary text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full border border-bakery-border shadow-sm">
            {product.category}
          </span>
        </div>

        {/* Best seller badge if applicable */}
        {product.isBestSeller && (
          <div className="absolute top-3 right-3">
            <span className="bg-bakery-accent text-white text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full shadow-sm">
              Bestseller
            </span>
          </div>
        )}

        {/* Hover Quick View Overlay */}
        <div className="absolute inset-0 bg-bakery-primary/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-3">
          <Link
            to={`/product/${product.id}`}
            className="p-3 bg-white text-bakery-primary rounded-full hover:bg-bakery-accent hover:text-white transition-colors shadow-lg transform translate-y-2 group-hover:translate-y-0 duration-200"
            title="View Details"
            aria-label={`View details of ${product.name}`}
          >
            <FaEye className="w-4 h-4" />
          </Link>
          <button
            type="button"
            onClick={() => addToCart(product, 1)}
            className="p-3 bg-bakery-accent text-white rounded-full hover:bg-bakery-accentDark transition-colors shadow-lg transform translate-y-2 group-hover:translate-y-0 duration-200"
            title="Quick Add to Cart"
            aria-label={`Quick add ${product.name} to cart`}
          >
            <FaShoppingBag className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Product Content Details */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Rating */}
          <div className="flex items-center gap-1.5 mb-1.5">
            <div className="flex items-center text-amber-500">
              <FaStar className="w-3.5 h-3.5 fill-current" />
            </div>
            <span className="text-xs font-bold text-bakery-primary">
              {product.rating}
            </span>
            <span className="text-xs text-bakery-muted">
              ({product.reviews})
            </span>
          </div>

          {/* Product Title */}
          <h3 className="font-serif text-lg font-bold text-bakery-primary group-hover:text-bakery-accent transition-colors line-clamp-1">
            <Link to={`/product/${product.id}`}>
              {product.name}
            </Link>
          </h3>

          {/* Short Description */}
          <p className="text-bakery-muted text-xs sm:text-sm mt-1 line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Price and Action Buttons */}
        <div className="mt-4 pt-3 border-t border-bakery-border/60">
          <div className="flex items-center justify-between mb-3">
            <div>
              <span className="text-[10px] uppercase font-semibold text-bakery-muted block leading-none">
                Price
              </span>
              <span className="font-serif text-xl font-bold text-bakery-primary">
                ₹{product.price}
              </span>
            </div>
            {product.weight && (
              <span className="text-xs text-bakery-muted bg-bakery-bg px-2 py-0.5 rounded-md border border-bakery-border">
                {product.weight}
              </span>
            )}
          </div>

          <div className="grid grid-cols-2 gap-2">
            <Link
              to={`/product/${product.id}`}
              className="text-center text-xs font-semibold py-2 px-3 rounded-full border border-bakery-border text-bakery-primary hover:border-bakery-accent hover:text-bakery-accent transition-colors flex items-center justify-center"
            >
              Details
            </Link>
            <Button
              size="sm"
              variant="primary"
              onClick={() => addToCart(product, 1)}
              icon={FaShoppingBag}
              className="text-xs py-2 px-3"
            >
              Add
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
