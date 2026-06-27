import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ItemCard from "./ItemCard";

const Cart = () => {
  const [activeCart, setActiveCart] = useState(false);

  const cartItems = useSelector((state) => state.cart.cart);
  const navigate = useNavigate();

  const totalQty = cartItems.reduce((total, item) => total + item.qty, 0);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.qty * item.price,
    0
  );

  const deliveryCharge = cartItems.length > 0 ? 40 : 0;
  const gst = cartItems.length > 0 ? 25 : 0;
  const grandTotal = totalPrice + deliveryCharge + gst;

  return (
    <>
      {/* Floating Cart Button */}
      <FaShoppingCart
        onClick={() => setActiveCart(true)}
        className={`fixed bottom-5 right-5 text-5xl bg-white shadow-lg rounded-full p-3 cursor-pointer z-40
        ${totalQty > 0 ? "animate-bounce" : ""}`}
      />

      {/* Cart Drawer */}
      <div
        className={`fixed top-0 right-0 h-screen w-full lg:w-[28vw] xl:w-[25vw] bg-white shadow-2xl border-l p-5 transition-all duration-500 z-50
        ${activeCart ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold">🛒 My Cart</h2>
            <p className="text-gray-500 text-sm">
              Delicious food waiting for you
            </p>
          </div>

          <IoMdClose
            onClick={() => setActiveCart(false)}
            className="text-3xl cursor-pointer border rounded-md p-1 hover:text-red-500 hover:border-red-500 transition-all"
          />
        </div>

        {/* Cart Items */}
        <div className="mt-6 mb-52 overflow-y-auto h-[55vh]">
          {cartItems.length > 0 ? (
            cartItems.map((food) => (
              <ItemCard
                key={food.id}
                id={food.id}
                name={food.name}
                price={food.price}
                img={food.img}
                qty={food.qty}
              />
            ))
          ) : (
            <div className="h-full flex items-center justify-center">
              <h2 className="text-xl font-semibold text-gray-500">
                Your Cart is Empty 😔
              </h2>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 w-full bg-white border-t p-5">
          <div className="flex justify-between mb-2">
            <span>Items</span>
            <span>{totalQty}</span>
          </div>

          <div className="flex justify-between mb-2">
            <span>Delivery</span>
            <span>₹{deliveryCharge}</span>
          </div>

          <div className="flex justify-between mb-2">
            <span>GST</span>
            <span>₹{gst}</span>
          </div>

          <hr className="my-3" />

          <div className="flex justify-between text-xl font-bold">
            <span>Total</span>
            <span>₹{grandTotal}</span>
          </div>

          <button
            disabled={cartItems.length === 0}
            onClick={() => navigate("/success")}
            className="w-full mt-5 bg-orange-500 hover:bg-orange-600 disabled:bg-gray-400 text-white py-3 rounded-xl font-semibold transition-all"
          >
            Proceed To Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;