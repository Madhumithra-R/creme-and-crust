import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import Button from '../components/Button';
import { 
  FaLock, 
  FaCheckCircle, 
  FaTruck, 
  FaBolt, 
  FaMoneyBillWave, 
  FaMobileAlt, 
  FaCreditCard, 
  FaArrowLeft,
  FaShieldAlt,
  FaShoppingBag
} from 'react-icons/fa';
import { fallbackBakeryImage } from '../data/products';

const Checkout = () => {
  const navigate = useNavigate();
  const { cartItems, subtotal, delivery, discount, total, clearCart, saveOrder } = useCart();

  // Customer Information state
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: 'Bengaluru',
    pincode: '',
    deliveryMethod: 'standard', // 'standard' | 'express'
    paymentMethod: 'upi', // 'cod' | 'upi' | 'card'
    upiId: '',
    cardNumber: '',
    cardExpiry: '',
    cardCvv: '',
    specialInstructions: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // If cart is empty, show prompt
  if (cartItems.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center space-y-6">
        <div className="w-20 h-20 rounded-full bg-bakery-accent/15 flex items-center justify-center text-bakery-accent mx-auto text-3xl">
          <FaShoppingBag />
        </div>
        <h1 className="font-serif text-3xl font-bold text-bakery-primary">
          Your Cart is Empty
        </h1>
        <p className="text-bakery-muted text-sm sm:text-base max-w-md mx-auto">
          Please add your favorite cakes, pastries, or breads to the basket before proceeding to checkout.
        </p>
        <Link to="/shop">
          <Button variant="primary" size="lg">
            Explore Bakery Catalog
          </Button>
        </Link>
      </div>
    );
  }

  // Delivery calculation adjustments for Express
  const expressFee = formData.deliveryMethod === 'express' ? 50 : 0;
  const computedDelivery = delivery + expressFee;
  const finalTotal = Math.max(0, subtotal - discount + computedDelivery);

  const validate = () => {
    const newErrors = {};

    // Full Name
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Name must be at least 2 characters';
    }

    // Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Phone (Indian 10-digit mobile starting with 6-9)
    const cleanPhone = formData.phone.replace(/[\s-+]/g, '');
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!phoneRegex.test(cleanPhone)) {
      newErrors.phone = 'Enter a valid 10-digit Indian mobile number (starts with 6-9)';
    }

    // Address
    if (!formData.address.trim()) {
      newErrors.address = 'Street address is required';
    } else if (formData.address.trim().length < 5) {
      newErrors.address = 'Please provide a detailed delivery address';
    }

    // City
    if (!formData.city.trim()) {
      newErrors.city = 'City is required';
    }

    // Pincode (6 digits)
    const pincodeRegex = /^[1-9][0-9]{5}$/;
    if (!formData.pincode.trim()) {
      newErrors.pincode = 'Pincode is required';
    } else if (!pincodeRegex.test(formData.pincode.trim())) {
      newErrors.pincode = 'Enter a valid 6-digit Indian PIN code';
    }

    // Payment specific validations
    if (formData.paymentMethod === 'upi') {
      if (!formData.upiId.trim()) {
        newErrors.upiId = 'UPI ID is required (e.g., yourname@okhdfcbank)';
      } else if (!formData.upiId.includes('@')) {
        newErrors.upiId = 'UPI ID must contain @ (e.g., name@upi)';
      }
    } else if (formData.paymentMethod === 'card') {
      const cleanCard = formData.cardNumber.replace(/\s+/g, '');
      if (!cleanCard || cleanCard.length < 15) {
        newErrors.cardNumber = 'Valid 16-digit card number required';
      }
      if (!formData.cardExpiry.trim()) {
        newErrors.cardExpiry = 'MM/YY required';
      }
      if (!formData.cardCvv.trim() || formData.cardCvv.length < 3) {
        newErrors.cardCvv = 'CVV required';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear field error on edit
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmitOrder = async (e) => {
    e.preventDefault();
    if (!validate()) {
      // Scroll to first error
      window.scrollTo({ top: 200, behavior: 'smooth' });
      return;
    }

    setIsSubmitting(true);

    const randomOrderId = `CNC-${Math.floor(100000 + Math.random() * 900000)}`;
    const now = new Date();
    
    // Estimated delivery time
    const estimatedDelivery = formData.deliveryMethod === 'express'
      ? 'Today within 45–60 minutes (Rush Courier)'
      : 'Today between 4:00 PM – 7:00 PM (Standard Slot)';

    const orderData = {
      orderId: randomOrderId,
      orderDate: now.toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }),
      customer: {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        city: formData.city,
        pincode: formData.pincode,
        specialInstructions: formData.specialInstructions
      },
      items: [...cartItems],
      subtotal,
      delivery: computedDelivery,
      discount,
      total: finalTotal,
      deliveryMethod: formData.deliveryMethod === 'express' ? 'Express Delivery' : 'Standard Delivery',
      paymentMethod:
        formData.paymentMethod === 'cod'
          ? 'Cash on Delivery'
          : formData.paymentMethod === 'upi'
          ? `UPI (${formData.upiId})`
          : 'Credit/Debit Card',
      estimatedDelivery
    };

    // Save order in context and LocalStorage
    saveOrder(orderData);

    // Clear the shopping cart
    clearCart();

    // Navigate to Order Success page
    navigate('/order-success');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-bakery-border">
        <div>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-bakery-primary">
            Checkout
          </h1>
          <p className="text-sm text-bakery-muted mt-1">
            Safe & secure checkout for your artisan bakery treats
          </p>
        </div>
        <Link
          to="/cart"
          className="text-xs sm:text-sm font-semibold text-bakery-muted hover:text-bakery-accent flex items-center gap-1.5"
        >
          <FaArrowLeft className="w-3 h-3" />
          <span>Back to Cart</span>
        </Link>
      </div>

      <form onSubmit={handleSubmitOrder} noValidate>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Customer Details, Delivery & Payment */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Step 1: Customer Information */}
            <div className="bg-bakery-surface border border-bakery-border rounded-3xl p-6 sm:p-8 shadow-card space-y-6">
              <div className="flex items-center gap-3 pb-3 border-b border-bakery-border">
                <div className="w-8 h-8 rounded-full bg-bakery-accent text-white flex items-center justify-center text-sm font-bold">
                  1
                </div>
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-bakery-primary">
                  Customer & Delivery Address
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div className="sm:col-span-2 space-y-1.5">
                  <label htmlFor="fullName" className="text-xs font-bold uppercase tracking-wider text-bakery-primary">
                    Full Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="e.g. Radhika Sharma"
                    className={`w-full px-4 py-2.5 rounded-xl bg-bakery-bg border text-sm text-bakery-primary focus:outline-none focus:ring-2 focus:ring-bakery-accent ${
                      errors.fullName ? 'border-rose-500 bg-rose-50/20' : 'border-bakery-border'
                    }`}
                  />
                  {errors.fullName && (
                    <p className="text-xs text-rose-600 font-medium">{errors.fullName}</p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-bakery-primary">
                    Email Address <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="radhika@example.com"
                    className={`w-full px-4 py-2.5 rounded-xl bg-bakery-bg border text-sm text-bakery-primary focus:outline-none focus:ring-2 focus:ring-bakery-accent ${
                      errors.email ? 'border-rose-500 bg-rose-50/20' : 'border-bakery-border'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-xs text-rose-600 font-medium">{errors.email}</p>
                  )}
                </div>

                {/* Phone */}
                <div className="space-y-1.5">
                  <label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-bakery-primary">
                    Mobile Phone <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-bakery-muted">
                      +91
                    </span>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="98765 43210"
                      maxLength={10}
                      className={`w-full pl-12 pr-4 py-2.5 rounded-xl bg-bakery-bg border text-sm text-bakery-primary focus:outline-none focus:ring-2 focus:ring-bakery-accent ${
                        errors.phone ? 'border-rose-500 bg-rose-50/20' : 'border-bakery-border'
                      }`}
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-xs text-rose-600 font-medium">{errors.phone}</p>
                  )}
                </div>

                {/* Street Address */}
                <div className="sm:col-span-2 space-y-1.5">
                  <label htmlFor="address" className="text-xs font-bold uppercase tracking-wider text-bakery-primary">
                    Delivery Street Address <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="address"
                    name="address"
                    rows={2}
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Flat/House No., Building Name, Street, Landmark"
                    className={`w-full px-4 py-2.5 rounded-xl bg-bakery-bg border text-sm text-bakery-primary focus:outline-none focus:ring-2 focus:ring-bakery-accent ${
                      errors.address ? 'border-rose-500 bg-rose-50/20' : 'border-bakery-border'
                    }`}
                  />
                  {errors.address && (
                    <p className="text-xs text-rose-600 font-medium">{errors.address}</p>
                  )}
                </div>

                {/* City */}
                <div className="space-y-1.5">
                  <label htmlFor="city" className="text-xs font-bold uppercase tracking-wider text-bakery-primary">
                    City <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="city"
                    name="city"
                    type="text"
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder="Bengaluru"
                    className={`w-full px-4 py-2.5 rounded-xl bg-bakery-bg border text-sm text-bakery-primary focus:outline-none focus:ring-2 focus:ring-bakery-accent ${
                      errors.city ? 'border-rose-500 bg-rose-50/20' : 'border-bakery-border'
                    }`}
                  />
                  {errors.city && (
                    <p className="text-xs text-rose-600 font-medium">{errors.city}</p>
                  )}
                </div>

                {/* Pincode */}
                <div className="space-y-1.5">
                  <label htmlFor="pincode" className="text-xs font-bold uppercase tracking-wider text-bakery-primary">
                    Pincode (6 digits) <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="pincode"
                    name="pincode"
                    type="text"
                    maxLength={6}
                    value={formData.pincode}
                    onChange={handleInputChange}
                    placeholder="560038"
                    className={`w-full px-4 py-2.5 rounded-xl bg-bakery-bg border text-sm text-bakery-primary focus:outline-none focus:ring-2 focus:ring-bakery-accent ${
                      errors.pincode ? 'border-rose-500 bg-rose-50/20' : 'border-bakery-border'
                    }`}
                  />
                  {errors.pincode && (
                    <p className="text-xs text-rose-600 font-medium">{errors.pincode}</p>
                  )}
                </div>

                {/* Special Instructions (Optional) */}
                <div className="sm:col-span-2 space-y-1.5">
                  <label htmlFor="specialInstructions" className="text-xs font-bold uppercase tracking-wider text-bakery-muted">
                    Bakery Notes / Cake Message (Optional)
                  </label>
                  <input
                    id="specialInstructions"
                    name="specialInstructions"
                    type="text"
                    value={formData.specialInstructions}
                    onChange={handleInputChange}
                    placeholder="e.g. 'Happy Birthday Maya!' piped on cake, please leave at door"
                    className="w-full px-4 py-2 rounded-xl bg-bakery-bg border border-bakery-border text-xs text-bakery-primary focus:outline-none focus:ring-2 focus:ring-bakery-accent"
                  />
                </div>
              </div>
            </div>

            {/* Step 2: Delivery Method */}
            <div className="bg-bakery-surface border border-bakery-border rounded-3xl p-6 sm:p-8 shadow-card space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-bakery-border">
                <div className="w-8 h-8 rounded-full bg-bakery-accent text-white flex items-center justify-center text-sm font-bold">
                  2
                </div>
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-bakery-primary">
                  Delivery Method
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Standard Delivery */}
                <label
                  className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-start gap-3.5 ${
                    formData.deliveryMethod === 'standard'
                      ? 'border-bakery-accent bg-bakery-accent/5 ring-1 ring-bakery-accent'
                      : 'border-bakery-border bg-bakery-bg hover:border-bakery-accent/40'
                  }`}
                >
                  <input
                    type="radio"
                    name="deliveryMethod"
                    value="standard"
                    checked={formData.deliveryMethod === 'standard'}
                    onChange={handleInputChange}
                    className="mt-1 accent-bakery-accent"
                  />
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <FaTruck className="text-bakery-accent w-4 h-4" />
                      <span className="font-bold text-sm text-bakery-primary">Standard Delivery</span>
                    </div>
                    <p className="text-xs text-bakery-muted">
                      Scheduled slot (3-4 hours). {delivery === 0 ? 'FREE' : '₹60'}
                    </p>
                  </div>
                </label>

                {/* Express Delivery */}
                <label
                  className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-start gap-3.5 ${
                    formData.deliveryMethod === 'express'
                      ? 'border-bakery-accent bg-bakery-accent/5 ring-1 ring-bakery-accent'
                      : 'border-bakery-border bg-bakery-bg hover:border-bakery-accent/40'
                  }`}
                >
                  <input
                    type="radio"
                    name="deliveryMethod"
                    value="express"
                    checked={formData.deliveryMethod === 'express'}
                    onChange={handleInputChange}
                    className="mt-1 accent-bakery-accent"
                  />
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <FaBolt className="text-amber-500 w-4 h-4" />
                      <span className="font-bold text-sm text-bakery-primary">Express Rush (+₹50)</span>
                    </div>
                    <p className="text-xs text-bakery-muted">
                      Priority dispatch in 45 mins in climate insulated box.
                    </p>
                  </div>
                </label>
              </div>
            </div>

            {/* Step 3: Payment Method (Simulated) */}
            <div className="bg-bakery-surface border border-bakery-border rounded-3xl p-6 sm:p-8 shadow-card space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-bakery-border">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-bakery-accent text-white flex items-center justify-center text-sm font-bold">
                    3
                  </div>
                  <h2 className="font-serif text-xl sm:text-2xl font-bold text-bakery-primary">
                    Simulated Payment
                  </h2>
                </div>
                <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  Demo Mode
                </span>
              </div>

              {/* Payment selector tabs */}
              <div className="grid grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, paymentMethod: 'upi' }))}
                  className={`py-3 px-2 rounded-xl text-xs sm:text-sm font-bold flex flex-col sm:flex-row items-center justify-center gap-2 border transition-all ${
                    formData.paymentMethod === 'upi'
                      ? 'border-bakery-accent bg-bakery-accent text-white shadow-sm'
                      : 'border-bakery-border bg-bakery-bg text-bakery-primary hover:border-bakery-accent'
                  }`}
                >
                  <FaMobileAlt className="w-4 h-4" />
                  <span>UPI / QR</span>
                </button>

                <button
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, paymentMethod: 'card' }))}
                  className={`py-3 px-2 rounded-xl text-xs sm:text-sm font-bold flex flex-col sm:flex-row items-center justify-center gap-2 border transition-all ${
                    formData.paymentMethod === 'card'
                      ? 'border-bakery-accent bg-bakery-accent text-white shadow-sm'
                      : 'border-bakery-border bg-bakery-bg text-bakery-primary hover:border-bakery-accent'
                  }`}
                >
                  <FaCreditCard className="w-4 h-4" />
                  <span>Card</span>
                </button>

                <button
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, paymentMethod: 'cod' }))}
                  className={`py-3 px-2 rounded-xl text-xs sm:text-sm font-bold flex flex-col sm:flex-row items-center justify-center gap-2 border transition-all ${
                    formData.paymentMethod === 'cod'
                      ? 'border-bakery-accent bg-bakery-accent text-white shadow-sm'
                      : 'border-bakery-border bg-bakery-bg text-bakery-primary hover:border-bakery-accent'
                  }`}
                >
                  <FaMoneyBillWave className="w-4 h-4" />
                  <span>Cash / COD</span>
                </button>
              </div>

              {/* UPI fields */}
              {formData.paymentMethod === 'upi' && (
                <div className="space-y-3 pt-2 bg-bakery-bg p-4 rounded-2xl border border-bakery-border">
                  <label htmlFor="upiId" className="text-xs font-bold uppercase tracking-wider text-bakery-primary block">
                    Enter Virtual Payment Address (UPI ID)
                  </label>
                  <input
                    id="upiId"
                    name="upiId"
                    type="text"
                    value={formData.upiId}
                    onChange={handleInputChange}
                    placeholder="e.g. mobile@okhdfcbank or yourname@paytm"
                    className={`w-full px-4 py-2.5 rounded-xl bg-bakery-surface border text-sm text-bakery-primary focus:outline-none focus:ring-2 focus:ring-bakery-accent ${
                      errors.upiId ? 'border-rose-500 bg-rose-50/20' : 'border-bakery-border'
                    }`}
                  />
                  {errors.upiId && (
                    <p className="text-xs text-rose-600 font-medium">{errors.upiId}</p>
                  )}
                  <p className="text-[11px] text-bakery-muted">
                    Supports Google Pay, PhonePe, Paytm, and BHIM UPI. No real money will be charged.
                  </p>
                </div>
              )}

              {/* Card fields */}
              {formData.paymentMethod === 'card' && (
                <div className="space-y-3 pt-2 bg-bakery-bg p-4 rounded-2xl border border-bakery-border">
                  <div>
                    <label htmlFor="cardNumber" className="text-xs font-bold uppercase tracking-wider text-bakery-primary block mb-1">
                      Card Number
                    </label>
                    <input
                      id="cardNumber"
                      name="cardNumber"
                      type="text"
                      maxLength={19}
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      placeholder="4532 •••• •••• 8892"
                      className={`w-full px-4 py-2 rounded-xl bg-bakery-surface border text-sm text-bakery-primary ${
                        errors.cardNumber ? 'border-rose-500' : 'border-bakery-border'
                      }`}
                    />
                    {errors.cardNumber && (
                      <p className="text-xs text-rose-600 font-medium mt-1">{errors.cardNumber}</p>
                    )}
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="cardExpiry" className="text-xs font-bold uppercase tracking-wider text-bakery-primary block mb-1">
                        Expiry Date
                      </label>
                      <input
                        id="cardExpiry"
                        name="cardExpiry"
                        type="text"
                        maxLength={5}
                        value={formData.cardExpiry}
                        onChange={handleInputChange}
                        placeholder="MM/YY"
                        className={`w-full px-4 py-2 rounded-xl bg-bakery-surface border text-sm text-bakery-primary ${
                          errors.cardExpiry ? 'border-rose-500' : 'border-bakery-border'
                        }`}
                      />
                      {errors.cardExpiry && (
                        <p className="text-xs text-rose-600 font-medium mt-1">{errors.cardExpiry}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="cardCvv" className="text-xs font-bold uppercase tracking-wider text-bakery-primary block mb-1">
                        CVV
                      </label>
                      <input
                        id="cardCvv"
                        name="cardCvv"
                        type="password"
                        maxLength={4}
                        value={formData.cardCvv}
                        onChange={handleInputChange}
                        placeholder="•••"
                        className={`w-full px-4 py-2 rounded-xl bg-bakery-surface border text-sm text-bakery-primary ${
                          errors.cardCvv ? 'border-rose-500' : 'border-bakery-border'
                        }`}
                      />
                      {errors.cardCvv && (
                        <p className="text-xs text-rose-600 font-medium mt-1">{errors.cardCvv}</p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* COD note */}
              {formData.paymentMethod === 'cod' && (
                <div className="bg-bakery-bg p-4 rounded-2xl border border-bakery-border text-xs text-bakery-muted space-y-1">
                  <p className="font-bold text-bakery-primary">💵 Cash or QR on Delivery</p>
                  <p>You can pay via cash or scan delivery rider's QR code when your fresh pastries arrive.</p>
                </div>
              )}
            </div>

          </div>

          {/* Right Column: Order Summary & Place Order */}
          <div className="lg:col-span-5 bg-bakery-surface border border-bakery-border rounded-3xl p-6 sm:p-8 shadow-card space-y-6 sticky top-28">
            <h2 className="font-serif text-2xl font-bold text-bakery-primary border-b border-bakery-border pb-4">
              Your Order Summary
            </h2>

            {/* Selected items list */}
            <div className="max-h-72 overflow-y-auto space-y-3 pr-1">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center gap-3 py-2 border-b border-bakery-border/50 text-sm">
                  <img
                    src={item.image}
                    alt={item.name}
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = fallbackBakeryImage;
                    }}
                    className="w-12 h-12 rounded-xl object-cover shrink-0 border border-bakery-border"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-bakery-primary text-xs sm:text-sm truncate">
                      {item.name}
                    </p>
                    <p className="text-xs text-bakery-muted">
                      {item.quantity} × ₹{item.price}
                    </p>
                  </div>
                  <span className="font-serif font-bold text-bakery-primary text-sm">
                    ₹{item.price * item.quantity}
                  </span>
                </div>
              ))}
            </div>

            {/* Price Calculations */}
            <div className="space-y-2.5 text-sm pt-2">
              <div className="flex justify-between text-bakery-muted">
                <span>Subtotal ({cartItems.reduce((acc, i) => acc + i.quantity, 0)} items)</span>
                <span className="font-semibold text-bakery-primary">₹{subtotal}</span>
              </div>

              <div className="flex justify-between text-bakery-muted">
                <span>Delivery Charge</span>
                <span className="font-semibold text-bakery-primary">
                  {computedDelivery === 0 ? 'FREE' : `₹${computedDelivery}`}
                </span>
              </div>

              {discount > 0 && (
                <div className="flex justify-between text-emerald-700 font-medium">
                  <span>Bakery Discount (₹1500+)</span>
                  <span>-₹{discount}</span>
                </div>
              )}

              <div className="pt-3 border-t border-bakery-border flex items-baseline justify-between">
                <div>
                  <span className="font-serif text-lg font-bold text-bakery-primary block">
                    Amount Payable
                  </span>
                  <span className="text-[11px] text-bakery-muted">
                    Inclusive of taxes
                  </span>
                </div>
                <span className="font-serif text-3xl font-extrabold text-bakery-accent">
                  ₹{finalTotal}
                </span>
              </div>
            </div>

            {/* Place Order Button */}
            <div className="pt-3 space-y-3">
              <Button
                type="submit"
                size="lg"
                variant="primary"
                fullWidth
                disabled={isSubmitting}
                icon={FaLock}
                className="shadow-warm text-base py-3.5"
              >
                {isSubmitting ? 'Baking Your Order...' : `Place Order (₹${finalTotal})`}
              </Button>

              <div className="flex items-center justify-center gap-2 text-xs text-bakery-muted">
                <FaShieldAlt className="text-emerald-600" />
                <span>256-bit Encrypted Simulated Checkout</span>
              </div>
            </div>

          </div>

        </div>
      </form>
    </div>
  );
};

export default Checkout;
