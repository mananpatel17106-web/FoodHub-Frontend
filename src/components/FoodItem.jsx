import React from "react";
import FoodCard from "./FoodCard";
import FoodData from "../data/FoodData";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

const FoodItem = () => {
  const category = useSelector((state) => state.category.category);
  const search = useSelector((state) => state.search.search);
  const sort = useSelector((state) => state.sort.sort);

  const handleToast = (name) => {
    toast.success(`${name} added to cart`);
  };

  let filteredFoods = FoodData.filter((food) => {
  if (category === "All") {
    return food.name.toLowerCase().includes(search.toLowerCase());
  }

  return (
    food.category === category &&
    food.name.toLowerCase().includes(search.toLowerCase())
  );
});

switch (sort) {
  case "low":
    filteredFoods.sort((a, b) => a.price - b.price);
    break;

  case "high":
    filteredFoods.sort((a, b) => b.price - a.price);
    break;

  case "rating":
    filteredFoods.sort((a, b) => b.rating - a.rating);
    break;

  case "az":
    filteredFoods.sort((a, b) => a.name.localeCompare(b.name));
    break;

  default:
    break;
}
  return (
    <>
      <Toaster position="top-right" />

      <section className="max-w-7xl mx-auto px-6 py-10">

        <div className="flex justify-between items-center mb-8 flex-wrap gap-3">

          <div>

            <p className="text-orange-500 font-semibold uppercase">
              Popular Dishes
            </p>

            <h2 className="text-3xl font-bold text-gray-800">
              Delicious Food For You 🍴
            </h2>

          </div>

          <span className="bg-orange-100 text-orange-600 px-4 py-2 rounded-full font-semibold">
            {filteredFoods.length} Items
          </span>

        </div>

        {filteredFoods.length > 0 ? (

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

            {filteredFoods.map((food) => (
              <FoodCard
                key={food.id}
                id={food.id}
                name={food.name}
                price={food.price}
                desc={food.desc}
                rating={food.rating}
                img={food.img}
                handleToast={handleToast}
              />
            ))}

          </div>

        ) : (

          <div className="text-center py-20">

            <h2 className="text-3xl font-bold text-gray-700">
              😔 No Food Found
            </h2>

            <p className="text-gray-500 mt-3">
              Try searching something else.
            </p>

          </div>

        )}

      </section>
    </>
  );
};

export default FoodItem;