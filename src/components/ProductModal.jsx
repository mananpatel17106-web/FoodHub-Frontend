import React from "react";
import { IoMdClose } from "react-icons/io";
import { FaStar, FaHeart, FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

import { closeModal } from "../redux/slices/ModalSlice";
import { addTocart } from "../redux/slices/CartSlice";
import { toggleWishlist } from "../redux/slices/WishlistSlice";
import toast from "react-hot-toast";

const ProductModal = () => {
  const dispatch = useDispatch();

  const { isOpen, product } = useSelector((state) => state.modal);

  const wishlist = useSelector((state) => state.wishlist.wishlist);

  if (!isOpen || !product) return null;

  const isFavourite = wishlist.some(
    (item) => item.id === product.id
  );

  const handleCart = () => {
    dispatch(
      addTocart({
        ...product,
        qty: 1,
      })
    );

    toast.success(`${product.name} added to cart`);
  };

  const handleWishlist = () => {
    dispatch(toggleWishlist(product));
  };

  return (
    <div className="fixed inset-0 bg-black/60 z-[999] flex justify-center items-center p-5">

      <div className="bg-white rounded-3xl overflow-hidden max-w-5xl w-full grid lg:grid-cols-2 relative animate-[fadeIn_.3s]">

        {/* Close */}

        <button
          onClick={() => dispatch(closeModal())}
          className="absolute top-5 right-5 bg-gray-100 hover:bg-red-500 hover:text-white p-3 rounded-full transition"
        >
          <IoMdClose />
        </button>

        {/* Image */}

        <div className="bg-orange-50 flex justify-center items-center p-10">

          <img
            src={product.img}
            alt={product.name}
            className="w-[350px] hover:scale-105 transition duration-500"
          />

        </div>

        {/* Details */}

        <div className="p-10 flex flex-col justify-center">

          <div className="flex justify-between items-center">

            <h2 className="text-4xl font-bold">
              {product.name}
            </h2>

            <button
              onClick={handleWishlist}
              className="text-3xl"
            >
              <FaHeart
                className={
                  isFavourite
                    ? "text-red-500"
                    : "text-gray-300"
                }
              />
            </button>

          </div>

          <div className="flex items-center gap-2 mt-5">

            <FaStar className="text-yellow-400" />

            <span className="font-semibold">
              {product.rating}
            </span>

          </div>

          <h3 className="text-orange-500 text-4xl font-bold mt-6">
            ₹{product.price}
          </h3>

          <p className="text-gray-500 leading-8 mt-6">
            {product.desc}
          </p>

          <button
            onClick={handleCart}
            className="mt-10 bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-xl flex justify-center items-center gap-3 font-bold text-lg transition"
          >
            <FaShoppingCart />

            Add To Cart
          </button>

        </div>

      </div>

    </div>
  );
};

export default ProductModal;