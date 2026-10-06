import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import Button from '../components/Button';
import { 
  FaCheckCircle, 
  FaShoppingBag, 
  FaHome, 
  FaPrint, 
  FaTruck, 
  FaCalendarAlt, 
  FaMapMarkerAlt, 
  FaReceipt 
} from 'react-icons/fa';
import { fallbackBakeryImage } from '../data/products';

const OrderSuccess = () => {
  const { lastOrder } = useCart();

  // Fallback demo order in case user directly visited /order-success
  const order = lastOrder || {
    orderId: 'CNC-882314',
    orderDate: 'Today, Just now',
    customer: {
      fullName: 'Valued Patron',
      email: 'patron@cremeandcrust.com',
      phone: '9876543210',
      address: '42 Heritage Promenade',
      city: 'Bengaluru',
      pincode: '560038',
      specialInstructions: 'Handle with care'
    },
    items: [
      {
        id: 1,
        name: 'Chocolate Truffle Cake',
        category: 'Cakes',
        price: 750,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 16,
        name: 'Croissant',
        category: 'Breads',
        price: 140,
        quantity: 2,
        image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80'
      }
    ],
    subtotal: 1030,
    delivery: 0,
    discount: 0,
    total: 1030,
    deliveryMethod: 'Standard Delivery',
    paymentMethod: 'UPI (demo@upi)',
    estimatedDelivery: 'Today within 3–4 hours'
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-10">
      
      {/* Celebration Header */}
      <div className="text-center space-y-4">
        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-emerald-100 border-4 border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto text-4xl sm:text-5xl shadow-soft animate-scale">
          <FaCheckCircle />
        </div>
        
        <span className="inline-block text-xs uppercase tracking-widest font-bold text-bakery-accent px-3 py-1 rounded-full bg-bakery-accent/10 border border-bakery-accent/20">
          Order Confirmed & Sent to Bakehouse
        </span>
        
        <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-bakery-primary tracking-tight">
          Order Placed Successfully!
        </h1>
        
        <p className="text-bakery-muted text-sm sm:text-base max-w-lg mx-auto">
          Thank you, <strong className="text-bakery-primary">{order.customer.fullName}</strong>. Our ovens are already prepping your order. A confirmation has been logged to your records.
        </p>

        {/* Order Identifier Banner */}
        <div className="inline-flex items-center gap-3 bg-bakery-surface border border-bakery-border rounded-2xl px-5 py-3 shadow-sm">
          <span className="text-xs uppercase font-semibold text-bakery-muted">
            Order Reference:
          </span>
          <span className="font-mono text-base sm:text-lg font-bold text-bakery-accent">
            #{order.orderId}
          </span>
        </div>
      </div>

      {/* Main Order Receipt Card */}
      <div className="bg-bakery-surface border border-bakery-border rounded-3xl p-6 sm:p-10 shadow-card space-y-8">
        
        {/* Receipt Key Metadata Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pb-6 border-b border-bakery-border">
          <div className="space-y-1">
            <span className="text-xs uppercase font-bold text-bakery-muted flex items-center gap-1.5">
              <FaCalendarAlt className="text-bakery-accent" />
              <span>Order Date</span>
            </span>
            <p className="text-sm font-semibold text-bakery-primary">
              {order.orderDate}
            </p>
          </div>

          <div className="space-y-1">
            <span className="text-xs uppercase font-bold text-bakery-muted flex items-center gap-1.5">
              <FaTruck className="text-bakery-accent" />
              <span>Delivery Window</span>
            </span>
            <p className="text-sm font-semibold text-emerald-700">
              {order.estimatedDelivery}
            </p>
            <p className="text-[11px] text-bakery-muted">{order.deliveryMethod}</p>
          </div>

          <div className="space-y-1">
            <span className="text-xs uppercase font-bold text-bakery-muted flex items-center gap-1.5">
              <FaReceipt className="text-bakery-accent" />
              <span>Payment Mode</span>
            </span>
            <p className="text-sm font-semibold text-bakery-primary">
              {order.paymentMethod}
            </p>
          </div>
        </div>

        {/* Order Preparation & Dispatch Alert */}
        <div className="bg-amber-50/70 border border-bakery-border rounded-2xl p-4 sm:p-5 flex items-start gap-3.5 text-xs text-bakery-primary">
          <div className="w-8 h-8 rounded-full bg-bakery-accent/15 text-bakery-accent flex items-center justify-center shrink-0 text-base">
            🥐
          </div>
          <div className="space-y-1">
            <p className="font-bold text-sm">
              Fresh Batch Preparing for: <span className="text-bakery-accent">{order.customer.fullName}</span>
            </p>
            <p className="text-bakery-muted leading-relaxed">
              Your order has been queued in our central oven dispatch. A temperature-controlled box is assigned to preserve peak aroma and warmth during transit.
            </p>
          </div>
        </div>

        {/* Delivery Address Details */}
        <div className="space-y-2 bg-bakery-bg p-5 rounded-2xl border border-bakery-border">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-bakery-primary">
            <FaMapMarkerAlt className="text-bakery-accent" />
            <span>Delivery Destination</span>
          </div>
          <p className="text-sm text-bakery-primary font-medium">
            {order.customer.fullName} • <span className="text-bakery-muted">+91 {order.customer.phone}</span>
          </p>
          <p className="text-sm text-bakery-muted">
            {order.customer.address}, {order.customer.city} - {order.customer.pincode}
          </p>
          {order.customer.specialInstructions && (
            <p className="text-xs italic text-bakery-accent pt-1">
              Note: "{order.customer.specialInstructions}"
            </p>
          )}
        </div>

        {/* Ordered Delicacies List */}
        <div className="space-y-4">
          <h3 className="font-serif text-lg font-bold text-bakery-primary">
            Ordered Delicacies
          </h3>

          <div className="divide-y divide-bakery-border/70 border-y border-bakery-border">
            {order.items.map((item) => (
              <div key={item.id} className="py-3.5 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = fallbackBakeryImage;
                    }}
                    className="w-14 h-14 rounded-xl object-cover shrink-0 border border-bakery-border"
                  />
                  <div>
                    <h4 className="font-serif font-bold text-bakery-primary text-sm sm:text-base">
                      {item.name}
                    </h4>
                    <span className="text-xs text-bakery-muted">
                      Qty: {item.quantity} × ₹{item.price}
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="font-serif font-bold text-bakery-primary text-base">
                    ₹{item.price * item.quantity}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Financial Calculation Breakdown */}
        <div className="space-y-2.5 max-w-xs ml-auto text-sm pt-2">
          <div className="flex justify-between text-bakery-muted">
            <span>Subtotal</span>
            <span className="font-semibold text-bakery-primary">₹{order.subtotal}</span>
          </div>
          <div className="flex justify-between text-bakery-muted">
            <span>Delivery</span>
            <span className="font-semibold text-bakery-primary">
              {order.delivery === 0 ? 'FREE' : `₹${order.delivery}`}
            </span>
          </div>
          {order.discount > 0 && (
            <div className="flex justify-between text-emerald-700 font-medium">
              <span>Bakery Discount</span>
              <span>-₹{order.discount}</span>
            </div>
          )}
          <div className="pt-3 border-t border-bakery-border flex justify-between items-baseline">
            <span className="font-serif text-lg font-bold text-bakery-primary">Total Paid</span>
            <span className="font-serif text-2xl font-extrabold text-bakery-accent">
              ₹{order.total}
            </span>
          </div>
        </div>

      </div>

      {/* Navigation & Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
        <Link to="/shop" className="w-full sm:w-auto">
          <Button
            size="lg"
            variant="primary"
            icon={FaShoppingBag}
            className="w-full sm:w-auto shadow-warm"
          >
            Continue Shopping
          </Button>
        </Link>
        <Link to="/" className="w-full sm:w-auto">
          <Button
            size="lg"
            variant="outline"
            icon={FaHome}
            className="w-full sm:w-auto"
          >
            Back to Home
          </Button>
        </Link>
        <button
          type="button"
          onClick={handlePrint}
          className="w-full sm:w-auto px-6 py-3 rounded-full border border-bakery-border text-bakery-primary hover:border-bakery-accent hover:text-bakery-accent transition-colors flex items-center justify-center gap-2 text-sm font-semibold"
        >
          <FaPrint className="w-4 h-4" />
          <span>Print Receipt</span>
        </button>
      </div>

    </div>
  );
};

export default OrderSuccess;
