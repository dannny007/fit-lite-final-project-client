// Cart.jsx
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiTrash2, FiArrowLeft, FiShoppingBag } from "react-icons/fi";
import { useCart } from "../../contexts/CartContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Cart = () => {
  const {
    cart,
    removeItem,
    updateQuantity,
    clearCart,
    getCartTotal,
    getItemCount,
  } = useCart();
  const navigate = useNavigate();

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
    exit: { opacity: 0 },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: {
      opacity: 0,
      x: -100,
      transition: { duration: 0.3 },
    },
  };

  useEffect(() => {
    window.scrollTo(window.innerWidth, 0);
  }, []);

  if (cart.items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8 mt-20 sm:mt-30 md:mt-40 lg:mt-40 xl:mt-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <div className="flex justify-center mb-6 ">
            <FiShoppingBag className="w-16 sm:w-20 h-16 sm:h-20 text-gray-300" />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-700 mb-4 ">
            Your cart is empty
          </h2>
          <p className="text-gray-500 mb-8 text-sm sm:text-base">
            Looks like you haven't added any items to your cart yet.
          </p>
          <button
            onClick={() => navigate("/shop")}
            className="bg-customPurple text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full
            hover:bg-opacity-90 transition-all duration-300 flex items-center
            gap-2 mx-auto text-sm sm:text-base"
          >
            <FiArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            Continue Shopping
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 mt-16 sm:mt-24 mt-20 sm:mt-30 md:mt-40 lg:mt-40 xl:mt-40">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="max-w-6xl mx-auto"
      >
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
            Shopping Cart
          </h1>
          <button
            onClick={() => navigate("/shop")}
            className="text-customPurple hover:text-purple-700 flex items-center gap-2 text-sm sm:text-base"
          >
            <FiArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            Continue Shopping
          </button>
        </div>

        {/* Cart Info */}
        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 mb-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-sm text-gray-500 mb-4">
            <span>Cart Updated: {formatDate(new Date())}</span>
            <span className="mt-2 sm:mt-0">Items: {getItemCount()}</span>
          </div>

          {/* Cart Items */}
          <AnimatePresence>
            <div className="divide-y divide-gray-200">
              {cart.items.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="py-4 sm:py-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6"
                >
                  {/* Product Image */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-lg"
                  />

                  {/* Product Info */}
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg font-medium text-gray-800">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-500">{item.category}</p>
                  </div>

                  {/* Quantity and Price Container for mobile */}
                  <div className="flex flex-row sm:flex-col justify-between items-center w-full sm:w-auto gap-4">
                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() =>
                          updateQuantity(
                            item.id,
                            Math.max(1, item.quantity - 1)
                          )
                        }
                        className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-gray-300 flex items-center 
                        justify-center hover:bg-gray-100 transition-colors"
                      >
                        -
                      </button>
                      <span className="w-8 sm:w-12 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-gray-300 flex items-center 
                        justify-center hover:bg-gray-100 transition-colors"
                      >
                        +
                      </button>
                    </div>

                    {/* Price */}
                    <div className="text-right">
                      <p className="text-base sm:text-lg font-medium text-gray-800">
                        €{(item.price * item.quantity).toFixed(2)}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-500">
                        €{item.price.toFixed(2)} each
                      </p>
                    </div>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeItem(item)}
                    className="p-2 text-gray-400 hover:text-red-500 transition-colors absolute sm:relative 
                    right-2 top-2 sm:top-auto sm:right-auto"
                  >
                    <FiTrash2 className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </motion.div>
              ))}
            </div>
          </AnimatePresence>
        </div>

        {/* Cart Summary */}
        <div className="flex flex-col-reverse sm:flex-row justify-between items-start gap-4 sm:gap-8">
          {/* Clear Cart Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            onClick={clearCart}
            className="flex items-center gap-2 text-red-500 hover:text-red-600 
            transition-colors text-sm sm:text-base"
          >
            <FiTrash2 className="w-4 h-4 sm:w-5 sm:h-5" />
            Clear Cart
          </motion.button>

          {/* Order Summary */}
          <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 w-full sm:w-auto sm:min-w-[320px]">
            <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">
              Order Summary
            </h2>
            <div className="space-y-3 text-sm sm:text-base text-gray-600">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>€{getCartTotal().toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div
                className="border-t border-gray-200 pt-3 flex justify-between 
                text-base sm:text-lg font-bold text-gray-800"
              >
                <span>Total</span>
                <span>€{getCartTotal().toFixed(2)}</span>
              </div>
            </div>

            <button
              onClick={() => navigate("/checkout")}
              className="w-full mt-6 bg-customPurple text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full
              hover:bg-opacity-90 transition-all duration-300 flex items-center
              justify-center gap-2 font-medium text-sm sm:text-base"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Cart;
