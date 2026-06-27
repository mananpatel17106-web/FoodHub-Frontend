import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CategoryMenu from "../components/CategoryMenu";
import FoodItem from "../components/FoodItem";
import Cart from "../components/Cart";
import WhyChooseUs from "../components/WhyChooseUs";
import Footer from "../components/Footer";
import ProductModal from "../components/ProductModal";
import ScrollToTopButton from "../components/ScrollToTopButton";


const Home = () => {
  return (
    <div className="min-h-screen bg-orange-50">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Categories */}
      <CategoryMenu />

      {/* Food Items */}
      <FoodItem />

      <WhyChooseUs />

      {/* Floating Cart */}
      <Cart />

      <ProductModal />

      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Home;