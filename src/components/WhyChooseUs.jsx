import React from "react";
import {
  FaTruckFast,
  FaLeaf,
  FaStar,
  FaShieldHeart,
} from "react-icons/fa6";

const features = [
  {
    id: 1,
    icon: <FaTruckFast />,
    title: "Fast Delivery",
    desc: "Get your favorite meals delivered fresh to your doorstep in under 30 minutes.",
    color: "text-orange-500",
    bg: "bg-orange-100",
  },
  {
    id: 2,
    icon: <FaLeaf />,
    title: "Fresh Ingredients",
    desc: "We prepare every meal using fresh vegetables and premium quality ingredients.",
    color: "text-green-500",
    bg: "bg-green-100",
  },
  {
    id: 3,
    icon: <FaStar />,
    title: "Top Rated",
    desc: "Loved by thousands of happy customers with excellent ratings and reviews.",
    color: "text-yellow-500",
    bg: "bg-yellow-100",
  },
  {
    id: 4,
    icon: <FaShieldHeart />,
    title: "Safe Payment",
    desc: "Enjoy secure online payments with complete protection and privacy.",
    color: "text-pink-500",
    bg: "bg-pink-100",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      {/* Heading */}

      <div className="text-center mb-14">

        <p className="text-orange-500 font-semibold tracking-widest uppercase">
          Why Choose Us
        </p>

        <h2 className="text-4xl font-bold text-gray-800 mt-3">
          More Than Just Delicious Food
        </h2>

        <p className="text-gray-500 mt-4 max-w-2xl mx-auto leading-7">
          We don't just deliver food—we deliver happiness, freshness, and an
          unforgettable dining experience right to your doorstep.
        </p>

      </div>

      {/* Cards */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {features.map((feature) => (

          <div
            key={feature.id}
            className="bg-white rounded-3xl shadow-lg hover:shadow-2xl p-8 text-center transition-all duration-300 hover:-translate-y-3 group"
          >

            <div
              className={`w-20 h-20 mx-auto rounded-full ${feature.bg} flex items-center justify-center text-4xl ${feature.color} group-hover:scale-110 transition-all duration-300`}
            >
              {feature.icon}
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mt-6">
              {feature.title}
            </h3>

            <p className="text-gray-500 mt-4 leading-7">
              {feature.desc}
            </p>

          </div>

        ))}

      </div>
    </section>
  );
};

export default WhyChooseUs;