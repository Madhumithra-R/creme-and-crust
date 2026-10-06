import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { fallbackBakeryImage } from '../data/products';

const CategoryCard = ({ category }) => {
  if (!category) return null;

  return (
    <Link
      to={`/shop?category=${encodeURIComponent(category.slug)}`}
      className="group relative overflow-hidden rounded-2xl bg-bakery-surface border border-bakery-border shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col"
    >
      {/* Category Image */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-amber-50/40">
        <img
          src={category.image}
          alt={category.name}
          loading="lazy"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = fallbackBakeryImage;
          }}
          className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bakery-primary/80 via-bakery-primary/20 to-transparent" />
        
        {/* Item count tag */}
        <div className="absolute top-3 right-3">
          <span className="bg-bakery-surface/90 backdrop-blur-sm text-bakery-primary text-xs font-semibold px-2.5 py-1 rounded-full shadow-sm border border-bakery-border">
            {category.itemCount} Items
          </span>
        </div>

        {/* Content over gradient */}
        <div className="absolute bottom-3 left-4 right-4 text-white">
          <span className="text-[11px] uppercase tracking-wider text-bakery-secondaryLight font-medium block">
            {category.tagline}
          </span>
          <h3 className="font-serif text-2xl font-bold tracking-tight text-white group-hover:text-bakery-secondaryLight transition-colors">
            {category.name}
          </h3>
        </div>
      </div>

      {/* Description & Link Footer */}
      <div className="p-4 flex-1 flex flex-col justify-between bg-bakery-surface">
        <p className="text-bakery-muted text-xs leading-relaxed line-clamp-2">
          {category.description}
        </p>
        <div className="mt-3 pt-2 border-t border-bakery-border/60 flex items-center justify-between text-xs font-semibold text-bakery-accent group-hover:text-bakery-accentDark">
          <span>Explore Collection</span>
          <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
