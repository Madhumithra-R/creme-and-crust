# Crème & Crust

> *"Soft inside. Golden outside."*

A luxury artisanal bakery e-commerce web application crafted with React 18, Tailwind CSS, and Vite. Designed to deliver an immersive patisserie experience reminiscent of high-end European bakehouses, complete with interactive product discovery, comprehensive cart management, and a seamless simulated checkout flow.

---

## Project Overview

**Crème & Crust** is an end-to-end frontend e-commerce platform for an artisan bakery brand. Customers can browse freshly baked heirloom cakes, flaky laminated pastries, slow-fermented sourdough breads, gourmet cookies, and decadent desserts.

The design philosophy balances warm bakery tones (`#FBF5EC` background, `#3B2418` cocoa text, `#C98A3D` caramel gold accent, and `#E8B4B8` rose icing accent) with modern e-commerce patterns, responsive layouts, and accessible component architectures.

---

## Features

### 🥐 1. Homepage & Brand Storytelling
- **Hero Section**: High-impact bakery showcase, "Freshly Baked Happiness" headline, quick CTAs to shop and explore the menu, live morning bake status.
- **Curated Collections**: Direct category navigation for Cakes, Pastries, Cookies, Breads, and Desserts.
- **Patisserie Bestsellers**: Live product cards with real-time quick-add capability, ratings, and price tags in INR (₹).
- **Brand Pillars**: Highlighting fresh ingredients, daily 4:00 AM baking, guaranteed quality, and temperature-controlled express delivery.
- **Customer Testimonials**: Authentic culinary reviews from loyal patrons.
- **Call-to-Action (CTA)**: Enticing banner encouraging patrons to taste the artisan difference.

### 🎂 2. Shop & Delicacy Catalog
- **Live Search**: Instant client-side search indexing product names, descriptions, and ingredient lists.
- **Category Filtering**: Seamlessly filter between All, Cakes, Pastries, Cookies, Breads, and Desserts (synchronized with URL query parameters for direct link sharing).
- **Price Range Filtering**: Dynamic price range slider (₹100 to ₹1000).
- **Sorting Options**: Sort by Popularity, Price (Low to High), Price (High to Low), or Customer Rating.
- **Empty States**: Helpful zero-state message with a one-click filter reset.

### 🍰 3. Product Details Page
- **Rich Media Showcase**: High-resolution bakery imagery with lazy loading and reliable fallback handling.
- **Comprehensive Details**: Category badge, star ratings with review counts, pricing (inclusive of taxes), and pack size/weight.
- **Artisan Ingredient Badges**: Detailed breakdown of authentic raw materials (e.g. 70% Belgian chocolate, French cultured butter, Madagascar bourbon vanilla).
- **Dual Action Workflows**:
  - **Quantity Selector + Add to Cart**: Adds custom quantity with interactive toast feedback.
  - **Buy Now**: Adds selected quantity and immediately navigates straight to checkout.
- **Related Delicacies**: Automatically recommends items from the same category.
- **404 Handling**: Graceful fallback state for non-existent product IDs.

### 🛒 4. Shopping Basket & Global Cart State
- **Cart Context & LocalStorage**: Fully persistent cart across browser refreshes using HTML5 LocalStorage.
- **Item Controls**: Increase, decrease, or remove items with subtotal updates.
- **Free Delivery Calculator**:
  - Free delivery on orders above ₹999; otherwise standard delivery of ₹60 applies.
  - Interactive delivery progress bar showing amount remaining to unlock free delivery.
- **Special Tier Discount**:
  - Flat ₹100 discount automatically applied for orders of ₹1500 or more.
- **Interactive Feedback**: Floating toast notifications for cart actions.
- **Empty Basket State**: Custom illustration and call to explore the bakery catalog.

### 💳 5. Simulated Checkout & Validation
- **Customer Information Form**: Full Name, Email, Mobile Phone (+91 format), Street Address, City, 6-digit Pincode, and optional bakery cake message.
- **Field Validation**: Real-time error handling with explicit feedback messages.
- **Delivery Selection**: Standard Delivery vs. Express Rush Courier (+₹50 for rapid dispatch).
- **Simulated Payment Gateways**:
  - UPI / QR code simulation with VPA format validation.
  - Credit/Debit Card simulation with card number, MM/YY expiry, and CVV checks.
  - Cash on Delivery (COD) option.
- **Order Generation**: Generates unique reference code (`CNC-XXXXXX`) and temporary order persistence.

### 🎉 6. Order Success & Confirmation
- **Celebration Feedback**: Order placed confirmation banner.
- **Order Reference**: Unique order ID and transaction timestamp.
- **Logistics Breakdown**: Customer destination, delivery time window, and payment mode used.
- **Itemized Receipt**: Full product table, quantity, and financial breakdown.
- **Print Receipt**: One-click browser receipt printing utility.
- **Automatic Cart Reset**: Clears the active cart upon successful completion.

### 🥖 7. About & Contact Pages
- **About Page**: The bakery's heritage story, mission, quality ingredient pantry, 4:00 AM baking ritual, and milestones.
- **Contact Page**: Interactive contact form with client validation, customer service hours, phone/email hotline, and an interactive FAQ accordion.

---

## Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **React 18** | Component architecture, state hooks, and context |
| **JavaScript (ES6+)** | Core client logic, data filtering, and calculation rules |
| **Vite** | Next-generation frontend tooling and rapid HMR build system |
| **Tailwind CSS** | Utility-first styling with custom palette and responsive breakpoints |
| **React Router v6** | Declarative client-side routing and URL query parameter synchronization |
| **React Context API** | Global cart management and toast notification dispatcher |
| **LocalStorage API** | Browser-level persistence for shopping cart and recent order details |
| **React Icons** | Font Awesome vector iconography |

---

## Project Structure

```
creme-and-crust/
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
├── README.md
│
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    │
    ├── components/
    │   ├── Button.jsx            # Multi-variant accessible button component
    │   ├── CartItem.jsx          # Individual cart row with quantity modifiers
    │   ├── CategoryCard.jsx      # Curated category card with shop linking
    │   ├── Footer.jsx            # Comprehensive footer with links & bakery hours
    │   ├── Navbar.jsx            # Sticky responsive navbar with live cart badge
    │   ├── ProductCard.jsx       # Catalog card with quick-add & badge tags
    │   ├── ScrollToTop.jsx       # Route-change auto-scroller
    │   └── Toast.jsx             # Cart interaction floating toast alerts
    │
    ├── context/
    │   └── CartContext.jsx       # Global cart state, localStorage sync & pricing logic
    │
    ├── data/
    │   └── products.js           # 21 handcrafted products across 5 categories
    │
    └── pages/
        ├── Home.jsx              # Hero, categories, bestsellers, features & reviews
        ├── Shop.jsx              # Filterable catalog with search, price slider & sorting
        ├── ProductDetails.jsx    # Delicacy details, ingredients, buy now & related
        ├── Cart.jsx              # Basket table, delivery progress bar & order summary
        ├── Checkout.jsx          # Form validation, simulated UPI/Card/COD payments
        ├── OrderSuccess.jsx      # Confirmation receipt with print option
        ├── About.jsx             # Bakery philosophy, ingredient standards & story
        └── Contact.jsx           # Validated contact form, hours, address & FAQs
```

---

## Getting Started

### Prerequisites
Make sure you have Node.js (v18 or higher) and npm installed on your system:
```bash
node -v
npm -v
```

---

## Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/Madhumithra-R/creme-and-crust.git
cd creme-and-crust
npm install
```

### Email Notification Setup (Optional - Free via EmailJS)
To send real order confirmation receipts directly to customer inboxes:
1. Create a free account at [EmailJS](https://www.emailjs.com/) (200 free emails/month).
2. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```
3. Add your EmailJS Service ID, Template ID, and Public Key:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```
*(If omitted, the application runs gracefully with simulated email delivery and logging).*


---

## How to Run

### Development Server
Launch the local development server with Hot Module Replacement:
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

### Production Build
To create an optimized production build:
```bash
npm run build
```

To preview the production build locally:
```bash
npm run preview
```

---

## Screenshots

*(Placeholders for portfolio presentation)*

| Home Page Hero | Product Catalog |
| :---: | :---: |
| ![Home Page](https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80) | ![Shop Catalog](https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80) |

| Shopping Cart | Order Success Confirmation |
| :---: | :---: |
| ![Cart](https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80) | ![Order Success](https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=80) |

---

## Future Enhancements

While the frontend is complete, modular, and production-ready, potential roadmap extensions include:
- **Node.js & Express API**: Microservices architecture for orders, product inventories, and reviews.
- **MongoDB / Database Integration**: Persistent NoSQL database storage for items and customer records.
- **User Authentication**: Secure JWT-based or OAuth (Google/Apple) login with customer profiles and order history.
- **Admin Dashboard**: Real-time order processing panel, daily baking schedule manager, and inventory stock manager.
- **Real Payment Gateway Integration**: Razorpay, Stripe, or PhonePe payment gateway integration with webhooks.
- **Live Order Tracking**: Interactive map and status tracker (Baking → Quality Check → Out for Delivery).
- **AI-Based Product Recommendations**: Machine learning recommendation engine suggesting pastries and breads based on customer taste preferences.

---

## License

Crafted with care by the **Crème & Crust** patisserie engineering team.
