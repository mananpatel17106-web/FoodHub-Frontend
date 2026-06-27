import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

import {
  FaLocationDot,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa6";
import { GiKnifeFork } from "react-icons/gi";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-20">

      {/* Top */}

      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Logo */}

        <div>

          <div className="flex items-center gap-3">

            <div className="bg-orange-500 p-3 rounded-xl text-2xl">
              <GiKnifeFork />
            </div>

            <h2 className="text-3xl font-bold">
              Food<span className="text-orange-500">Hub</span>
            </h2>

          </div>

          <p className="text-gray-400 mt-6 leading-7">
            Delicious food delivered to your doorstep with fresh ingredients,
            premium quality and lightning-fast service.
          </p>

          <div className="flex gap-4 mt-8">

            <a
              href="#"
              className="bg-gray-800 p-3 rounded-full hover:bg-orange-500 transition duration-300"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              className="bg-gray-800 p-3 rounded-full hover:bg-pink-500 transition duration-300"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="bg-gray-800 p-3 rounded-full hover:bg-sky-500 transition duration-300"
            >
              <FaTwitter />
            </a>

            <a
              href="#"
              className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition duration-300"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="bg-gray-800 p-3 rounded-full hover:bg-white hover:text-black transition duration-300"
            >
              <FaGithub />
            </a>

          </div>

        </div>

        {/* Quick Links */}

        <div>

          <h3 className="text-xl font-bold mb-6">Quick Links</h3>

          <ul className="space-y-4 text-gray-400">

            <li className="hover:text-orange-500 cursor-pointer transition">
              Home
            </li>

            <li className="hover:text-orange-500 cursor-pointer transition">
              Categories
            </li>

            <li className="hover:text-orange-500 cursor-pointer transition">
              Popular Foods
            </li>

            <li className="hover:text-orange-500 cursor-pointer transition">
              About Us
            </li>

            <li className="hover:text-orange-500 cursor-pointer transition">
              Contact
            </li>

          </ul>

        </div>

        {/* Services */}

        <div>

          <h3 className="text-xl font-bold mb-6">Our Services</h3>

          <ul className="space-y-4 text-gray-400">

            <li>🚚 Fast Delivery</li>

            <li>🍕 Fresh Food</li>

            <li>💳 Secure Payment</li>

            <li>⭐ Premium Quality</li>

            <li>🎁 Daily Offers</li>

          </ul>

        </div>

        {/* Contact */}

        <div>

          <h3 className="text-xl font-bold mb-6">
            Contact
          </h3>

          <div className="space-y-5 text-gray-400">

            <div className="flex gap-3 items-center">
              <FaPhone className="text-orange-500" />
              <span>+91 98765 43210</span>
            </div>

            <div className="flex gap-3 items-center">
              <FaEnvelope className="text-orange-500" />
              <span>support@foodhub.com</span>
            </div>

            <div className="flex gap-3 items-center">
              <FaLocationDot className="text-orange-500" />
              <span>Ahmedabad, Gujarat, India</span>
            </div>

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-gray-800">

        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-500 text-center">
            © {new Date().getFullYear()} FoodHub. All Rights Reserved.
          </p>

          <p className="text-gray-500 text-center">
            Designed & Developed with ❤️ using React + Redux Toolkit
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;