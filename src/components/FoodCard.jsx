import React from "react";
import { FaStar, FaHeart, FaRegHeart, FaShoppingCart } from "react-icons/fa";

import { useDispatch, useSelector } from "react-redux";

import { addTocart } from "../redux/slices/CartSlice";
import { toggleWishlist } from "../redux/slices/WishlistSlice";
import { openModal } from "../redux/slices/ModalSlice";

const FoodCard = ({ id, name, price, desc, rating, img, handleToast }) => {
  const dispatch = useDispatch();

  const wishlist = useSelector((state) => state.wishlist.wishlist);

  const isFavourite = wishlist.some((item) => item.id === id);

  const product = {
    id,
    name,
    price,
    desc,
    rating,
    img,
  };

  const handleAddCart = (e) => {
    e.stopPropagation();

    dispatch(
      addTocart({
        ...product,
        qty: 1,
      }),
    );

    handleToast(name);
  };

  const handleWishlist = (e) => {
    e.stopPropagation();

    dispatch(toggleWishlist(product));
  };

  return (
    <div
      onClick={() => dispatch(openModal(product))}
      className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
    >
      {/* Image */}

      <div className="relative overflow-hidden">
        <img
          src={img}
          alt={name}
          className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
        />

        {/* Wishlist */}

        <button
          onClick={handleWishlist}
          className="absolute top-4 right-4 bg-white p-3 rounded-full shadow-lg hover:scale-110 transition"
        >
          {isFavourite ? (
            <FaHeart className="text-red-500 text-lg" />
          ) : (
            <FaRegHeart className="text-gray-600 text-lg" />
          )}
        </button>

        <div className="absolute top-4 left-4 bg-red-500 text-white text-xs px-3 py-1 rounded-full font-bold">
          🔥 BESTSELLER
        </div>

        {/* Rating */}

        <div className="absolute bottom-4 left-4 bg-white rounded-full px-3 py-1 flex items-center gap-1 shadow">
          <FaStar className="text-yellow-400" />

          <span className="font-semibold text-sm">{rating}</span>
        </div>

        <div className="absolute bottom-4 right-4 bg-white rounded-full px-3 py-1 shadow text-xs font-semibold">
            🚚 25 Min
          </div>
      </div>

      {/* Body */}

      <div className="p-5">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-800">{name}</h2>

          <span className="text-orange-500 text-xl font-bold">₹{price}</span>
        </div>

        <p className="text-gray-500 text-sm mt-3 leading-6">
          {desc.slice(0, 75)}...
        </p>

        <button
          onClick={handleAddCart}
          className="mt-6 w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl flex justify-center items-center gap-2 font-semibold transition hover:scale-[1.02]"
        >
          <FaShoppingCart />
          Add To Cart →
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
