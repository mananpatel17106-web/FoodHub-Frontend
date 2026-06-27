import React from "react";
import { FaArrowRight, FaStar, FaTruck, FaUsers } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-10 lg:py-16">
      <div className="relative overflow-hidden rounded-[35px] bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-400 shadow-2xl">

        {/* Background Blur */}
        <div className="absolute -top-16 -left-16 w-72 h-72 bg-white/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-200/20 rounded-full blur-3xl"></div>

        <div className="relative grid lg:grid-cols-2 items-center">

          {/* Left Side */}
          <div className="px-8 py-12 lg:px-16 lg:py-20 text-white">

            <span className="inline-block bg-white text-orange-500 font-bold px-5 py-2 rounded-full shadow-lg">
              🔥 Flat 40% OFF Today
            </span>

            <h1 className="mt-7 text-5xl lg:text-7xl font-extrabold leading-tight">
              Delicious Food
              <br />
              Delivered Fast
            </h1>

            <p className="mt-6 text-lg text-orange-100 leading-8 max-w-xl">
              Experience restaurant-quality meals delivered straight to your
              doorstep with lightning-fast delivery, fresh ingredients and
              unforgettable taste.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-10">

              <button className="flex items-center gap-2 bg-white text-orange-500 font-bold px-7 py-3 rounded-xl shadow-lg hover:scale-105 transition duration-300">
                Order Now <FaArrowRight />
              </button>

              <button className="flex items-center gap-2 border-2 border-white px-7 py-3 rounded-xl hover:bg-white hover:text-orange-500 transition duration-300">
                Explore Menu
                <FaArrowRight />
              </button>

            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12">

              <div>
                <div className="flex items-center gap-2">
                  <FaStar className="text-yellow-300" />
                  <h2 className="text-2xl font-bold">4.9</h2>
                </div>
                <p className="text-orange-100 text-sm mt-1">
                  Customer Rating
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <FaTruck />
                  <h2 className="text-2xl font-bold">30 Min</h2>
                </div>
                <p className="text-orange-100 text-sm mt-1">
                  Fast Delivery
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <FaUsers />
                  <h2 className="text-2xl font-bold">10K+</h2>
                </div>
                <p className="text-orange-100 text-sm mt-1">
                  Happy Customers
                </p>
              </div>

            </div>

          </div>

          {/* Right Side */}
          <div className="relative flex justify-center items-center py-12">

            {/* Burger Image */}
            <img
              src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=900"
              alt="Burger"
              className="w-[320px] sm:w-[420px] lg:w-[500px] rounded-full drop-shadow-[0_30px_50px_rgba(0,0,0,0.35)] hover:scale-105 transition duration-500"
            />

            {/* Floating Rating */}
            <div className="absolute top-10 left-6 bg-white px-5 py-3 rounded-2xl shadow-xl animate-bounce">
              <p className="text-yellow-500 font-bold text-lg">
                ⭐ 4.9 Rating
              </p>
            </div>

            {/* Floating Delivery */}
            <div className="absolute bottom-10 right-6 bg-white px-5 py-3 rounded-2xl shadow-xl">
              <p className="text-green-600 font-bold">
                🚚 Free Delivery
              </p>
            </div>

            {/* Floating Offer */}
            <div className="absolute top-1/2 -right-3 bg-red-500 text-white px-4 py-2 rounded-xl shadow-xl font-semibold rotate-6">
              🔥 40% OFF
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;