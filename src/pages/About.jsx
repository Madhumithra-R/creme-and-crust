import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { 
  FaBreadSlice, 
  FaHeart, 
  FaLeaf, 
  FaClock, 
  FaAward, 
  FaShieldAlt, 
  FaArrowRight 
} from 'react-icons/fa';
import { fallbackBakeryImage } from '../data/products';

const About = () => {
  return (
    <div className="space-y-20 sm:space-y-28 pb-16">
      
      {/* Header Banner */}
      <section className="relative overflow-hidden pt-12 pb-16 border-b border-bakery-border bg-radial-gradient text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-bakery-accent/15 text-bakery-primary text-xs font-semibold uppercase tracking-wider">
            <FaBreadSlice className="text-bakery-accent" />
            <span>The Artisanal Heritage</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-extrabold text-bakery-primary tracking-tight leading-tight">
            Soft inside. <br className="hidden sm:inline" />
            <span className="text-bakery-accent italic font-normal">Golden outside.</span>
          </h1>

          <p className="text-bakery-muted text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Crème & Crust was born from a singular passion: creating bakery treats that honor timeless European technique, slow fermentation, and the pure joy of unadulterated butter.
          </p>
        </div>
      </section>

      {/* SECTION 1: OUR STORY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-widest font-bold text-bakery-accent">
              Chapter One
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-bakery-primary leading-tight">
              Our Story: Rekindling the Lost Art of Baking
            </h2>
            <div className="space-y-4 text-bakery-muted text-sm sm:text-base leading-relaxed">
              <p>
                In 2018, our head patissier returned from culinary training in Lyon and Brittany with a burning realization: everyday baked goods had become industrialized, filled with chemical bread conditioners and artificial margarines.
              </p>
              <p>
                Crème & Crust began as a small boutique oven in Bengaluru, dedicated to reviving heirloom methods. We imported slow-churned butter, revived wild sourdough starters that are now over 8 years old, and insisted on using real Belgian chocolate rather than confectionary compounds.
              </p>
              <p>
                Today, while our ovens have grown, our daily batch philosophy remains identical: small batches, human hands, and absolute respect for the baking clock.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden border-4 border-bakery-surface shadow-card aspect-[4/3] bg-amber-50">
              <img
                src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1000&q=80"
                alt="Bakers preparing handmade croissant dough at Crème & Crust"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = fallbackBakeryImage;
                }}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bakery-primary/60 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-6 text-white">
                <p className="font-serif text-xl font-bold">The Morning Lamination</p>
                <p className="text-xs text-white/80">3-day temperature-controlled sourdough process</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2: OUR MISSION */}
      <section className="bg-bakery-surface border-y border-bakery-border py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
            <span className="text-xs uppercase tracking-widest font-bold text-bakery-accent">
              Our Guiding Compass
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-bakery-primary">
              Our Mission
            </h2>
            <p className="text-bakery-muted text-sm sm:text-base leading-relaxed">
              To elevate daily rituals into moments of pure culinary indulgence through uncompromised craftsmanship, clean ethical ingredients, and genuine human warmth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-bakery-bg border border-bakery-border rounded-2xl p-7 space-y-4 text-center">
              <div className="w-12 h-12 rounded-xl bg-bakery-accent/15 text-bakery-accent flex items-center justify-center mx-auto text-xl">
                <FaHeart />
              </div>
              <h3 className="font-serif text-xl font-bold text-bakery-primary">
                Pure Honest Food
              </h3>
              <p className="text-xs sm:text-sm text-bakery-muted leading-relaxed">
                We believe what goes into food defines what you feel. No artificial coloring, zero high-fructose corn syrups, and 100% natural vanilla.
              </p>
            </div>

            <div className="bg-bakery-bg border border-bakery-border rounded-2xl p-7 space-y-4 text-center">
              <div className="w-12 h-12 rounded-xl bg-bakery-accent/15 text-bakery-accent flex items-center justify-center mx-auto text-xl">
                <FaLeaf />
              </div>
              <h3 className="font-serif text-xl font-bold text-bakery-primary">
                Sustainable Sourcing
              </h3>
              <p className="text-xs sm:text-sm text-bakery-muted leading-relaxed">
                Direct partnerships with organic wheat farmers in Punjab, dairy cooperatives, and single-origin cocoa estates in Southern India.
              </p>
            </div>

            <div className="bg-bakery-bg border border-bakery-border rounded-2xl p-7 space-y-4 text-center">
              <div className="w-12 h-12 rounded-xl bg-bakery-accent/15 text-bakery-accent flex items-center justify-center mx-auto text-xl">
                <FaShieldAlt />
              </div>
              <h3 className="font-serif text-xl font-bold text-bakery-primary">
                Culinary Integrity
              </h3>
              <p className="text-xs sm:text-sm text-bakery-muted leading-relaxed">
                Never cutting corners on fermenting time or butter ratios. If a batch does not meet our golden crust standard, it never reaches your box.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: QUALITY INGREDIENTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden border-4 border-bakery-surface shadow-card aspect-[4/3] bg-amber-50">
              <img
                src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1000&q=80"
                alt="Belgian cocoa and quality ingredients used in Crème & Crust chocolate cakes"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = fallbackBakeryImage;
                }}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bakery-primary/60 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-6 text-white">
                <p className="font-serif text-xl font-bold">Uncompromising Ingredients</p>
                <p className="text-xs text-white/80">70% Callebaut chocolate & grass-fed cream</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            <span className="text-xs uppercase tracking-widest font-bold text-bakery-accent">
              The Pantry
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-bakery-primary leading-tight">
              Quality Ingredients That Define Our Flavor
            </h2>
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3.5 bg-bakery-surface border border-bakery-border rounded-xl">
                <span className="text-lg">🍫</span>
                <div>
                  <h4 className="font-bold text-bakery-primary text-sm">70% Belgian Dark Chocolate</h4>
                  <p className="text-xs text-bakery-muted">Single-origin dark couverture chocolate that imparts intense depth without sickly sweetness.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3.5 bg-bakery-surface border border-bakery-border rounded-xl">
                <span className="text-lg">🧈</span>
                <div>
                  <h4 className="font-bold text-bakery-primary text-sm">84% Fat European Cultured Butter</h4>
                  <p className="text-xs text-bakery-muted">Higher milkfat ensures impossibly crisp flaky lamination and a golden, fragrant crust.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3.5 bg-bakery-surface border border-bakery-border rounded-xl">
                <span className="text-lg">🌾</span>
                <div>
                  <h4 className="font-bold text-bakery-primary text-sm">Stone-Ground Organic Flours</h4>
                  <p className="text-xs text-bakery-muted">Naturally unbleached flour, stone-milled to retain the nutrient-rich wheat germ and bran.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3.5 bg-bakery-surface border border-bakery-border rounded-xl">
                <span className="text-lg">🌿</span>
                <div>
                  <h4 className="font-bold text-bakery-primary text-sm">Bourbon & Tahitian Vanilla Beans</h4>
                  <p className="text-xs text-bakery-muted">Real vanilla pods scraped by hand; you will see the black vanilla caviar speckles in our creams.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 4: FRESHLY BAKED EVERY DAY */}
      <section className="bg-bakery-surface border-y border-bakery-border py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase tracking-widest font-bold text-bakery-accent">
                The 4:00 AM Call
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-bakery-primary leading-tight">
                Freshly Baked Every Single Day
              </h2>
              <p className="text-bakery-muted text-sm sm:text-base leading-relaxed">
                While the rest of the city slumbers, our bakery lights flicker on before dawn. Flour dust dances in the air as sourdough loaves are scored with razor blades and trays of butter croissants slide into stone hearth ovens.
              </p>
              <p className="text-bakery-muted text-sm sm:text-base leading-relaxed">
                We never sell day-old baked goods. Anything left unsold at closing time is donated to local shelters or re-purposed into artisan croutons and bread pudding.
              </p>
              <div className="pt-2 flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <FaClock className="text-bakery-accent w-5 h-5" />
                  <span className="text-sm font-bold text-bakery-primary">4 AM Daily Baking</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaAward className="text-bakery-accent w-5 h-5" />
                  <span className="text-sm font-bold text-bakery-primary">Zero Shelf Preservatives</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="p-8 rounded-3xl bg-bakery-bg border border-bakery-border space-y-6 text-center">
                <span className="font-serif text-6xl text-bakery-accent block">🥐</span>
                <blockquote className="font-serif italic text-lg sm:text-xl text-bakery-primary">
                  "When dough is given the respect of time, it transforms into poetry that feeds both hunger and heart."
                </blockquote>
                <div className="pt-4 border-t border-bakery-border">
                  <p className="font-bold text-bakery-primary">Chef Henri & Chef Meera</p>
                  <p className="text-xs text-bakery-muted">Master Bakers & Co-Founders</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 5: WHY CUSTOMERS LOVE US & CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="max-w-2xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-widest font-bold text-bakery-accent">
            A Sweet Community
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-bakery-primary">
            Why Customers Love Us
          </h2>
          <p className="text-bakery-muted text-sm sm:text-base">
            Over 25,000 celebration cakes baked and 150,000 croissants served across the city.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="p-6 rounded-2xl bg-bakery-surface border border-bakery-border shadow-sm">
            <p className="font-serif text-3xl sm:text-4xl font-extrabold text-bakery-accent">25k+</p>
            <p className="text-xs sm:text-sm text-bakery-muted mt-1">Cakes Handcrafted</p>
          </div>
          <div className="p-6 rounded-2xl bg-bakery-surface border border-bakery-border shadow-sm">
            <p className="font-serif text-3xl sm:text-4xl font-extrabold text-bakery-accent">4.9★</p>
            <p className="text-xs sm:text-sm text-bakery-muted mt-1">Average Review</p>
          </div>
          <div className="p-6 rounded-2xl bg-bakery-surface border border-bakery-border shadow-sm">
            <p className="font-serif text-3xl sm:text-4xl font-extrabold text-bakery-accent">100%</p>
            <p className="text-xs sm:text-sm text-bakery-muted mt-1">Pure Butter</p>
          </div>
          <div className="p-6 rounded-2xl bg-bakery-surface border border-bakery-border shadow-sm">
            <p className="font-serif text-3xl sm:text-4xl font-extrabold text-bakery-accent">45m</p>
            <p className="text-xs sm:text-sm text-bakery-muted mt-1">Average Delivery</p>
          </div>
        </div>

        <div className="pt-6">
          <Link to="/shop">
            <Button size="lg" variant="primary" icon={FaArrowRight} className="shadow-warm">
              Explore Our Delicacies
            </Button>
          </Link>
        </div>
      </section>

    </div>
  );
};

export default About;
