import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../data/products';
import { 
  FaBreadSlice, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaClock, 
  FaInstagram, 
  FaFacebookF, 
  FaTwitter, 
  FaPinterestP,
  FaHeart
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-bakery-surface border-t border-bakery-border pt-16 pb-8 text-bakery-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8 lg:gap-8 pb-12 border-b border-bakery-border/80">
          
          {/* Brand & Tagline Column */}
          <div className="sm:col-span-2 xl:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2 group inline-block">
              <div className="w-10 h-10 rounded-full bg-bakery-accent/15 flex items-center justify-center text-bakery-accent">
                <FaBreadSlice className="w-5 h-5" />
              </div>
              <span className="font-serif text-3xl font-bold tracking-tight text-bakery-primary">
                Crème <span className="text-bakery-accent font-serif italic font-normal">&</span> Crust
              </span>
            </Link>
            <p className="text-bakery-accent font-serif italic text-base">
              "Soft inside. Golden outside."
            </p>
            <p className="text-bakery-muted text-sm leading-relaxed max-w-sm">
              Artisanal patisserie crafting heirloom cakes, slow-fermented sourdoughs, and buttery French viennoiserie with pure dairy cream and natural stone-ground grains.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-bakery-bg border border-bakery-border flex items-center justify-center text-bakery-primary hover:text-white hover:bg-bakery-accent hover:border-bakery-accent transition-all duration-200"
                aria-label="Instagram"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-bakery-bg border border-bakery-border flex items-center justify-center text-bakery-primary hover:text-white hover:bg-bakery-accent hover:border-bakery-accent transition-all duration-200"
                aria-label="Facebook"
              >
                <FaFacebookF className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-bakery-bg border border-bakery-border flex items-center justify-center text-bakery-primary hover:text-white hover:bg-bakery-accent hover:border-bakery-accent transition-all duration-200"
                aria-label="Twitter"
              >
                <FaTwitter className="w-4 h-4" />
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-bakery-bg border border-bakery-border flex items-center justify-center text-bakery-primary hover:text-white hover:bg-bakery-accent hover:border-bakery-accent transition-all duration-200"
                aria-label="Pinterest"
              >
                <FaPinterestP className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-bold text-bakery-primary">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-bakery-muted hover:text-bakery-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-bakery-muted hover:text-bakery-accent transition-colors">
                  Shop Menu
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-bakery-muted hover:text-bakery-accent transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-bakery-muted hover:text-bakery-accent transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/cart" className="text-bakery-muted hover:text-bakery-accent transition-colors">
                  Shopping Cart
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories Column */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-bold text-bakery-primary">
              Categories
            </h3>
            <ul className="space-y-2.5 text-sm">
              {categories.map((cat) => (
                <li key={cat.id}>
                  <Link
                    to={`/shop?category=${encodeURIComponent(cat.slug)}`}
                    className="text-bakery-muted hover:text-bakery-accent transition-colors flex items-center justify-between group"
                  >
                    <span>{cat.name}</span>
                    <span className="text-xs text-bakery-muted/80 group-hover:text-bakery-accent">
                      ({cat.itemCount})
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information & Hours Column */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-bold text-bakery-primary">
              Bakehouse & Hours
            </h3>
            <ul className="space-y-3 text-sm text-bakery-muted">
              <li className="flex items-start gap-2.5">
                <FaMapMarkerAlt className="w-4 h-4 text-bakery-accent shrink-0 mt-1" />
                <span>42 Heritage Promenade, Indiranagar, Bengaluru, KA 560038</span>
              </li>
              <li className="flex items-center gap-2.5">
                <FaPhoneAlt className="w-3.5 h-3.5 text-bakery-accent shrink-0" />
                <a href="tel:+919876543210" className="hover:text-bakery-accent transition-colors">
                  +91 (080) 4123-8899
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <FaEnvelope className="w-3.5 h-3.5 text-bakery-accent shrink-0" />
                <a href="mailto:hello@cremeandcrust.com" className="hover:text-bakery-accent transition-colors break-all sm:break-normal">
                  hello@cremeandcrust.com
                </a>
              </li>
              <li className="flex items-start gap-2.5 pt-1">
                <FaClock className="w-4 h-4 text-bakery-accent shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-bakery-primary">Mon - Sun:</p>
                  <p>7:00 AM – 10:00 PM</p>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright & credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-bakery-muted gap-4">
          <p>
            © {new Date().getFullYear()} <strong className="text-bakery-primary">Crème & Crust</strong>. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-xs">
            <span>Baked with</span>
            <FaHeart className="w-3 h-3 text-rose-500 fill-current inline" />
            <span>for bakery lovers everywhere.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
