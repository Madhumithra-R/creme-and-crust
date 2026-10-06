import React from 'react';
import { Link } from 'react-router-dom';
import { products, categories, testimonials, bakeryFeatures, fallbackBakeryImage } from '../data/products';
import ProductCard from '../components/ProductCard';
import CategoryCard from '../components/CategoryCard';
import Button from '../components/Button';
import { 
  FaShoppingBag, 
  FaUtensils, 
  FaStar, 
  FaQuoteLeft, 
  FaLeaf, 
  FaClock, 
  FaAward, 
  FaTruck,
  FaCheckCircle,
  FaHeart
} from 'react-icons/fa';

const iconMap = {
  FaLeaf: FaLeaf,
  FaClock: FaClock,
  FaAward: FaAward,
  FaTruck: FaTruck,
};

const Home = () => {
  const bestSellers = products.filter(p => p.isBestSeller).slice(0, 8);

  return (
    <div className="space-y-20 sm:space-y-28 pb-16">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-6 sm:pt-12 pb-12 sm:pb-20 border-b border-bakery-border/60 bg-radial-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-bakery-accent/15 border border-bakery-accent/30 text-bakery-primary text-xs sm:text-sm font-semibold tracking-wide">
                <span className="w-2 h-2 rounded-full bg-bakery-accent animate-ping" />
                <span>Morning Batch Just Out of the Oven</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-bakery-primary leading-[1.1]">
                Freshly Baked <br />
                <span className="text-bakery-accent italic font-normal">Happiness.</span>
              </h1>

              <p className="text-base sm:text-lg text-bakery-muted max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Step into a world of artisan baking where slow fermentation meets pure European butter and Belgian chocolate. From flaky morning croissants to grand celebration cakes—handcrafted daily with love.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Link to="/shop">
                  <Button
                    size="lg"
                    variant="primary"
                    icon={FaShoppingBag}
                    className="w-full sm:w-auto shadow-warm text-base"
                  >
                    Shop Now
                  </Button>
                </Link>
                <Link to="/shop">
                  <Button
                    size="lg"
                    variant="outline"
                    icon={FaUtensils}
                    className="w-full sm:w-auto text-base"
                  >
                    Explore Menu
                  </Button>
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="pt-6 border-t border-bakery-border/80 grid grid-cols-3 gap-4 text-center lg:text-left">
                <div>
                  <p className="font-serif text-2xl sm:text-3xl font-bold text-bakery-primary">100%</p>
                  <p className="text-xs text-bakery-muted mt-0.5">Real Butter & Cream</p>
                </div>
                <div>
                  <p className="font-serif text-2xl sm:text-3xl font-bold text-bakery-primary">4:00 AM</p>
                  <p className="text-xs text-bakery-muted mt-0.5">Daily Morning Bake</p>
                </div>
                <div>
                  <p className="font-serif text-2xl sm:text-3xl font-bold text-bakery-primary">4.9 ★</p>
                  <p className="text-xs text-bakery-muted mt-0.5">Over 5,000+ Reviews</p>
                </div>
              </div>
            </div>

            {/* Hero Right Visual Banner */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Decorative background aura */}
                <div className="absolute -top-6 -left-6 w-72 h-72 bg-bakery-secondary/40 rounded-full blur-3xl -z-10" />
                <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-bakery-accent/30 rounded-full blur-3xl -z-10" />

                {/* Primary Hero Image */}
                <div className="relative rounded-3xl overflow-hidden border-4 border-bakery-surface shadow-card-hover bg-bakery-surface aspect-[4/5]">
                  <img
                    src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1000&q=85"
                    alt="Freshly baked artisan croissants and pastries at Crème & Crust"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = fallbackBakeryImage;
                    }}
                    className="w-full h-full object-cover"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-bakery-primary/60 via-transparent to-transparent" />

                  {/* Floating floating card: Daily Special */}
                  <div className="absolute bottom-5 left-5 right-5 bg-bakery-surface/95 backdrop-blur-md rounded-2xl p-4 border border-bakery-border shadow-lg flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-xl bg-bakery-accent/20 flex items-center justify-center text-bakery-accent text-xl shrink-0">
                      🥐
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-wider text-bakery-accent block">
                        Today's Star Delicacy
                      </span>
                      <h4 className="font-serif text-sm font-bold text-bakery-primary">
                        French All-Butter Croissant
                      </h4>
                      <p className="text-xs text-bakery-muted">
                        27 flaky golden layers • ₹140
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating pill badge */}
                <div className="absolute -top-3 -right-3 bg-bakery-surface border border-bakery-border rounded-full py-2 px-4 shadow-lg flex items-center gap-2">
                  <FaCheckCircle className="text-emerald-600 w-4 h-4" />
                  <span className="text-xs font-bold text-bakery-primary">Preservative Free</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FEATURED CATEGORIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-xs uppercase tracking-widest font-bold text-bakery-accent">
            Curated Collections
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-bakery-primary">
            Featured Categories
          </h2>
          <p className="text-bakery-muted text-sm sm:text-base">
            From heirloom sponge cakes to flaky breakfast viennoiserie, explore our diverse family of oven-fresh specialities.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {categories.map((cat) => (
            <CategoryCard key={cat.id} category={cat} />
          ))}
        </div>
      </section>

      {/* BEST SELLERS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-bakery-accent">
              Beloved Favorites
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-bakery-primary mt-1">
              Our Best Sellers
            </h2>
            <p className="text-bakery-muted text-sm mt-1 max-w-md">
              Hand-picked recipes that fly off our display shelves every single morning.
            </p>
          </div>
          <Link to="/shop">
            <Button variant="outline" size="sm">
              View All 21 Delicacies →
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestSellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* WHY CHOOSE CRÈME & CRUST */}
      <section className="bg-bakery-surface border-y border-bakery-border py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-xs uppercase tracking-widest font-bold text-bakery-accent">
              The Crème & Crust Standard
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-bakery-primary">
              Why Choose Crème & Crust
            </h2>
            <p className="text-bakery-muted text-sm sm:text-base">
              We uphold uncompromising standards for ingredients, lamination, and culinary craftsmanship.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {bakeryFeatures.map((feat) => {
              const IconComp = iconMap[feat.icon] || FaAward;
              return (
                <div
                  key={feat.id}
                  className="bg-bakery-bg border border-bakery-border rounded-2xl p-6 sm:p-7 text-center space-y-4 hover:shadow-card transition-all duration-300 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-bakery-accent/15 group-hover:bg-bakery-accent text-bakery-accent group-hover:text-white flex items-center justify-center mx-auto transition-colors duration-300">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-bakery-primary">
                    {feat.title}
                  </h3>
                  <p className="text-bakery-muted text-xs sm:text-sm leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="text-xs uppercase tracking-widest font-bold text-bakery-accent">
            Customer Praise
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-bakery-primary">
            Words from Our Patrons
          </h2>
          <p className="text-bakery-muted text-sm sm:text-base">
            Discover why home celebrations and everyday coffee breaks taste better with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-bakery-surface border border-bakery-border rounded-3xl p-6 sm:p-8 shadow-card flex flex-col justify-between space-y-6 relative"
            >
              <div className="space-y-4">
                <FaQuoteLeft className="text-bakery-accent/30 w-8 h-8" />
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(t.rating)].map((_, i) => (
                    <FaStar key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-bakery-primary text-sm sm:text-base italic leading-relaxed">
                  "{t.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-bakery-border flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-bakery-accent/40"
                />
                <div>
                  <h4 className="font-serif font-bold text-bakery-primary text-sm sm:text-base">
                    {t.name}
                  </h4>
                  <p className="text-xs text-bakery-muted">{t.role}</p>
                  <p className="text-[11px] text-bakery-accent font-medium mt-0.5">
                    Fave: {t.favorite}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CALL TO ACTION (CTA) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-bakery-primary via-stone-900 to-bakery-primary text-white p-8 sm:p-14 lg:p-16 shadow-warm border border-stone-800">
          <div className="relative z-10 max-w-2xl space-y-6 text-center sm:text-left">
            <span className="inline-block text-xs uppercase tracking-widest font-bold text-bakery-secondaryLight px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm">
              Artisan Oven Delights
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Ready to Experience Authentic Baking Luxury?
            </h2>
            <p className="text-white/80 text-sm sm:text-base leading-relaxed">
              Order before 2:00 PM for guaranteed same-day delivery across town. Freshly prepared in temperature-controlled boxes for optimum texture and warmth.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <Link to="/shop" className="w-full sm:w-auto">
                <Button size="lg" variant="primary" icon={FaShoppingBag} className="w-full sm:w-auto">
                  Explore Full Bakery
                </Button>
              </Link>
              <Link to="/about" className="w-full sm:w-auto">
                <Button size="lg" variant="ghost" className="w-full sm:w-auto text-white hover:text-bakery-secondary hover:bg-white/10">
                  Read Our Heritage Story
                </Button>
              </Link>
            </div>
          </div>

          {/* Decorative accent element in background */}
          <div className="hidden lg:block absolute right-12 top-1/2 -translate-y-1/2 text-8xl opacity-15 select-none pointer-events-none">
            🥖🎂🥐
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
