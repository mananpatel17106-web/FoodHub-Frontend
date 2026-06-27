import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../redux/slices/SearchSlice";
import { FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa";
import { GiKnifeFork } from "react-icons/gi";
import { setSort } from "../redux/slices/SortSlice";

const Navbar = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart.cart);
  const wishlist = useSelector((state) => state.wishlist.wishlist);

  const totalCartItems = cart.reduce((total, item) => total + item.qty, 0);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-white/30 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col lg:flex-row justify-between items-center gap-5">
        {/* Logo */}

        <Link to="/" className="flex items-center gap-3">
          <div className="bg-orange-500 p-3 rounded-xl text-white text-2xl">
            <GiKnifeFork />
          </div>

          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Food<span className="text-orange-500">Hub</span>
              <p className="text-xs text-gray-500">Fresh • Fast • Delicious</p>
            </h1>

            {/* <p className="text-gray-500 text-sm">{new Date().toDateString()}</p> */}
          </div>
        </Link>

        {/* Search */}

        <div className="relative w-full lg:w-[420px]">
          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

          <input
            type="search"
            placeholder="Search delicious food..."
            autoComplete="off"
            onChange={(e) => dispatch(setSearch(e.target.value))}
            className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 shadow-sm hover:shadow-md focus:shadow-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
          />
        </div>

        <div className="w-full lg:w-52">
          <select
            onChange={(e) => dispatch(setSort(e.target.value))}
            className="w-full border border-gray-200 shadow-sm hover:shadow-md focus:shadow-lg cursor-pointer rounded-xl px-4 py-3 outline-none focus:border-orange-500"
          >
            <option value="default">Default</option>
            <option value="low">Price : Low → High</option>
            <option value="high">Price : High → Low</option>
            <option value="rating">Top Rated</option>
            <option value="az">Name : A-Z</option>
          </select>
        </div>

        {/* Right Side */}

        <div className="flex items-center gap-5">
          {/* Wishlist */}

          <Link
            to="/wishlist"
            className="relative text-3xl hover:scale-110 transition-all duration-300 text-gray-700 hover:text-red-500 transition"
          >
            <FaHeart />

            {wishlist.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[11px] rounded-full w-5 h-5 flex justify-center items-center">
                {wishlist.length}
              </span>
            )}
          </Link>

          {/* Cart */}

          <div className="relative text-2xl text-gray-700">
            <FaShoppingCart />

            {totalCartItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-[11px] rounded-full w-5 h-5 flex justify-center items-center">
                {totalCartItems}
              </span>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
