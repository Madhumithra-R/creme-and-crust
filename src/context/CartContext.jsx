import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

const CART_STORAGE_KEY = 'creme_and_crust_cart_v1';
const LAST_ORDER_KEY = 'creme_and_crust_last_order';

export const CartProvider = ({ children }) => {
  // Initialize cart from localStorage safely
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      console.error('Error loading cart from localStorage', e);
      return [];
    }
  });

  // State for toast notifications
  const [toast, setToast] = useState(null);

  // Sync cart items with localStorage whenever changed
  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
    } catch (e) {
      console.error('Error saving cart to localStorage', e);
    }
  }, [cartItems]);

  const showToast = (message, type = 'success') => {
    setToast({ id: Date.now(), message, type });
  };

  const closeToast = () => {
    setToast(null);
  };

  // Add item to cart with optional quantity
  const addToCart = (product, quantity = 1) => {
    if (!product || quantity <= 0) return;

    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prev, { ...product, quantity }];
      }
    });

    showToast(`Added ${quantity > 1 ? `${quantity}x ` : ''}"${product.name}" to your cart!`);
  };

  // Remove item completely from cart
  const removeFromCart = (productId) => {
    const itemToRemove = cartItems.find(item => item.id === productId);
    setCartItems(prev => prev.filter(item => item.id !== productId));
    if (itemToRemove) {
      showToast(`Removed "${itemToRemove.name}" from cart`, 'info');
    }
  };

  // Increase item quantity
  const increaseQuantity = (productId) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Decrease item quantity (removes if reaches 0)
  const decreaseQuantity = (productId) => {
    setCartItems(prev =>
      prev
        .map(item =>
          item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter(item => item.quantity > 0)
    );
  };

  // Clear entire cart
  const clearCart = () => {
    setCartItems([]);
    try {
      localStorage.removeItem(CART_STORAGE_KEY);
    } catch (e) {
      console.error('Error clearing cart storage', e);
    }
  };

  // Calculations
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  // Delivery rule: Free delivery for orders above ₹999. Otherwise delivery = ₹60. (0 if cart is empty)
  const delivery = cartItems.length === 0 ? 0 : subtotal > 999 ? 0 : 60;

  // Discount rule: ₹100 discount when subtotal is ₹1500 or above
  const discount = subtotal >= 1500 ? 100 : 0;

  // Grand total
  const total = cartItems.length === 0 ? 0 : Math.max(0, subtotal - discount + delivery);

  // Order management for checkout & order success persistence
  const [lastOrder, setLastOrder] = useState(() => {
    try {
      const savedOrder = localStorage.getItem(LAST_ORDER_KEY);
      return savedOrder ? JSON.parse(savedOrder) : null;
    } catch (e) {
      return null;
    }
  });

  const saveOrder = (orderData) => {
    setLastOrder(orderData);
    try {
      localStorage.setItem(LAST_ORDER_KEY, JSON.stringify(orderData));
    } catch (e) {
      console.error('Error saving order to localStorage', e);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartCount,
        subtotal,
        delivery,
        discount,
        total,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        toast,
        showToast,
        closeToast,
        lastOrder,
        saveOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
