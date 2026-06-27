import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { addTocart } from "../redux/slices/CartSlice";
import { removeWishlist } from "../redux/slices/WishlistSlice";
import toast from "react-hot-toast";

const Wishlist = () => {
  const dispatch = useDispatch();

  const wishlist = useSelector(
    (state) => state.wishlist.wishlist
  );

  const handleAddToCart = (item) => {
    dispatch(
      addTocart({
        ...item,
        qty: 1,
      })
    );

    toast.success(`${item.name} added to cart`);
  };

  const handleRemove = (id, name) => {
    dispatch(removeWishlist({ id }));
    toast.success(`${name} removed from wishlist`);
  };

  if (wishlist.length === 0) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-orange-50 px-5">
        <FaHeart className="text-7xl text-red-400 mb-6" />

        <h1 className="text-4xl font-bold text-gray-800">
          Your Wishlist is Empty
        </h1>

        <p className="text-gray-500 mt-3 text-center">
          Save your favourite foods here ❤️
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-orange-50 py-10">

      <div className="max-w-7xl mx-auto px-6">

        <div className="flex justify-between items-center mb-10">

          <h1 className="text-4xl font-bold">
            ❤️ My Wishlist
          </h1>

          <span className="bg-red-500 text-white px-4 py-2 rounded-full font-semibold">
            {wishlist.length} Items
          </span>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

          {wishlist.map((item) => (

            <div
              key={item.id}
              className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all"
            >

              <img
                src={item.img}
                alt={item.name}
                className="w-full h-56 object-cover"
              />

              <div className="p-5">

                <div className="flex justify-between items-center">

                  <h2 className="text-xl font-bold">
                    {item.name}
                  </h2>

                  <span className="text-orange-500 font-bold">
                    ₹{item.price}
                  </span>

                </div>

                <p className="text-gray-500 mt-3 text-sm">
                  {item.desc.slice(0, 70)}...
                </p>

                <div className="flex gap-3 mt-6">

                  <button
                    onClick={() => handleAddToCart(item)}
                    className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl flex justify-center items-center gap-2 font-semibold"
                  >
                    <FaShoppingCart />
                    Cart
                  </button>

                  <button
                    onClick={() =>
                      handleRemove(item.id, item.name)
                    }
                    className="bg-red-500 hover:bg-red-600 text-white px-5 rounded-xl"
                  >
                    <MdDelete className="text-xl" />
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
};

export default Wishlist;