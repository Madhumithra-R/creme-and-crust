import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import Button from '../components/Button';
import { 
  FaSearch, 
  FaTimes, 
  FaSlidersH, 
  FaUndo, 
  FaBoxOpen 
} from 'react-icons/fa';

const categoryList = ['All', 'Cakes', 'Pastries', 'Cookies', 'Breads', 'Desserts'];

const sortOptions = [
  { value: 'popularity', label: 'Popularity' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Customer Rating' },
];

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');

  // Filter States
  const [selectedCategory, setSelectedCategory] = useState(
    categoryParam && categoryList.includes(categoryParam) ? categoryParam : 'All'
  );
  const [searchQuery, setSearchQuery] = useState('');
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sortBy, setSortBy] = useState('popularity');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // Sync with URL query parameter when changed from external navigation
  useEffect(() => {
    if (categoryParam && categoryList.includes(categoryParam)) {
      setSelectedCategory(categoryParam);
    } else if (!categoryParam) {
      setSelectedCategory('All');
    }
  }, [categoryParam]);

  // Update URL param when category changes
  const handleCategorySelect = (cat) => {
    setSelectedCategory(cat);
    if (cat === 'All') {
      searchParams.delete('category');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ category: cat });
    }
  };

  // Reset all filters
  const handleResetFilters = () => {
    setSelectedCategory('All');
    setSearchQuery('');
    setMaxPrice(1000);
    setSortBy('popularity');
    setSearchParams({});
  };

  // Filter and sort items
  const filteredProducts = useMemo(() => {
    return products
      .filter((item) => {
        // Category filter
        const matchesCategory =
          selectedCategory === 'All' || item.category.toLowerCase() === selectedCategory.toLowerCase();

        // Search query filter (name and description)
        const q = searchQuery.trim().toLowerCase();
        const matchesSearch =
          q === '' ||
          item.name.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q) ||
          item.ingredients.some(ing => ing.toLowerCase().includes(q));

        // Price filter
        const matchesPrice = item.price <= maxPrice;

        return matchesCategory && matchesSearch && matchesPrice;
      })
      .sort((a, b) => {
        if (sortBy === 'price-asc') return a.price - b.price;
        if (sortBy === 'price-desc') return b.price - a.price;
        if (sortBy === 'rating') return b.rating - a.rating;
        // Default to popularity
        return b.popularity - a.popularity;
      });
  }, [selectedCategory, searchQuery, maxPrice, sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      {/* Shop Header Banner */}
      <div className="bg-bakery-surface border border-bakery-border rounded-3xl p-6 sm:p-10 shadow-sm relative overflow-hidden">
        <div className="relative z-10 max-w-2xl space-y-2">
          <span className="text-xs uppercase tracking-widest font-bold text-bakery-accent">
            Oven-Fresh Catalog
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-bakery-primary">
            Artisanal Bakehouse Shop
          </h1>
          <p className="text-bakery-muted text-sm sm:text-base">
            Explore our complete handcrafted collection. Every item is baked fresh using European techniques and uncompromised ingredients.
          </p>
        </div>
      </div>

      {/* Top Search & Filter Bar */}
      <div className="bg-bakery-surface border border-bakery-border rounded-2xl p-4 sm:p-5 shadow-sm space-y-4">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          
          {/* Search Input */}
          <div className="relative flex-1">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-bakery-muted w-4 h-4" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name, flavors, or ingredients (e.g. Truffle, Almond, Sourdough)..."
              className="w-full pl-11 pr-10 py-2.5 bg-bakery-bg border border-bakery-border rounded-full text-sm text-bakery-primary placeholder-bakery-muted focus:outline-none focus:ring-2 focus:ring-bakery-accent focus:border-transparent transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-bakery-muted hover:text-bakery-primary p-1"
                aria-label="Clear search"
              >
                <FaTimes className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Sort Dropdown & Mobile Filter Toggle */}
          <div className="flex items-center gap-3">
            {/* Mobile Filters Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
              className="lg:hidden flex items-center gap-2 px-4 py-2.5 border border-bakery-border rounded-full text-sm font-semibold text-bakery-primary bg-bakery-bg hover:bg-bakery-surface"
            >
              <FaSlidersH className="w-3.5 h-3.5 text-bakery-accent" />
              <span>Filters</span>
            </button>

            {/* Sort Selector */}
            <div className="flex items-center gap-2 shrink-0">
              <label htmlFor="shop-sort" className="text-xs font-semibold text-bakery-muted hidden sm:inline">
                Sort By:
              </label>
              <select
                id="shop-sort"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-bakery-bg border border-bakery-border text-bakery-primary text-sm font-medium rounded-full py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-bakery-accent cursor-pointer"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Category Pills (Desktop & Tablet) */}
        <div className="pt-2 border-t border-bakery-border/60 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <span className="text-xs font-bold uppercase tracking-wider text-bakery-muted shrink-0 mr-2">
            Category:
          </span>
          {categoryList.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => handleCategorySelect(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                selectedCategory.toLowerCase() === cat.toLowerCase()
                  ? 'bg-bakery-accent text-white shadow-sm'
                  : 'bg-bakery-bg border border-bakery-border text-bakery-primary hover:border-bakery-accent hover:text-bakery-accent'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Main Grid Section with Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
        
        {/* Left Filter Sidebar (Desktop & Mobile Drawer) */}
        <aside
          className={`${
            mobileFiltersOpen ? 'block' : 'hidden'
          } lg:block lg:col-span-1 bg-bakery-surface border border-bakery-border rounded-2xl p-5 shadow-sm space-y-6 sticky top-28`}
        >
          <div className="flex items-center justify-between pb-3 border-b border-bakery-border">
            <h3 className="font-serif text-lg font-bold text-bakery-primary flex items-center gap-2">
              <FaSlidersH className="w-4 h-4 text-bakery-accent" />
              <span>Refine Catalog</span>
            </h3>
            <button
              type="button"
              onClick={handleResetFilters}
              className="text-xs text-bakery-accent hover:underline font-semibold flex items-center gap-1"
            >
              <FaUndo className="w-2.5 h-2.5" />
              <span>Reset</span>
            </button>
          </div>

          {/* Price Range Slider */}
          <div className="space-y-3">
            <div className="flex justify-between items-center text-sm">
              <label htmlFor="price-slider" className="font-semibold text-bakery-primary">
                Max Price
              </label>
              <span className="font-bold text-bakery-accent font-serif text-base">
                ₹{maxPrice}
              </span>
            </div>
            <input
              id="price-slider"
              type="range"
              min="100"
              max="1000"
              step="20"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full accent-bakery-accent cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-bakery-muted">
              <span>₹100</span>
              <span>₹500</span>
              <span>₹1000</span>
            </div>
          </div>

          {/* Dietary / Feature Note */}
          <div className="p-4 rounded-xl bg-bakery-bg border border-bakery-border space-y-2 text-xs text-bakery-muted">
            <p className="font-bold text-bakery-primary">🧑‍🍳 Artisan Assurance</p>
            <p>All items are freshly baked daily without artificial preservatives or chemical bread improvers.</p>
          </div>

          {/* Quick Clear Button */}
          <Button
            variant="outlineMuted"
            size="sm"
            fullWidth
            onClick={handleResetFilters}
          >
            Clear All Filters
          </Button>
        </aside>

        {/* Product Catalog Grid (1 col mobile, 2 col tablet, 3 col desktop) */}
        <main className="lg:col-span-3 space-y-6">
          {/* Status bar */}
          <div className="flex items-center justify-between text-xs sm:text-sm text-bakery-muted px-1">
            <span>
              Showing <strong className="text-bakery-primary">{filteredProducts.length}</strong> of{' '}
              <strong className="text-bakery-primary">{products.length}</strong> delicacies
            </span>
            {(selectedCategory !== 'All' || searchQuery || maxPrice < 1000) && (
              <span className="text-xs text-bakery-accent font-medium bg-bakery-accent/10 px-2.5 py-1 rounded-full">
                Filters Active
              </span>
            )}
          </div>

          {/* Grid or Empty State */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="bg-bakery-surface border border-bakery-border rounded-3xl p-12 text-center space-y-4 shadow-sm my-6">
              <div className="w-16 h-16 rounded-full bg-bakery-accent/15 flex items-center justify-center text-bakery-accent mx-auto text-2xl">
                <FaBoxOpen />
              </div>
              <h3 className="font-serif text-2xl font-bold text-bakery-primary">
                No Delicacies Match Your Criteria
              </h3>
              <p className="text-bakery-muted text-sm max-w-md mx-auto">
                We couldn't find any treats matching your search or filter settings. Try adjusting your price range or search terms.
              </p>
              <div className="pt-2">
                <Button variant="primary" onClick={handleResetFilters}>
                  Reset All Filters
                </Button>
              </div>
            </div>
          )}
        </main>

      </div>
    </div>
  );
};

export default Shop;
