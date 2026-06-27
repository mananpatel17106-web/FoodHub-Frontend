import React, { useEffect, useState } from "react";
import FoodData from "../data/FoodData";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../redux/slices/CategorySlice";

const CategoryMenu = () => {
  const [categories, setCategories] = useState([]);

  const dispatch = useDispatch();

  const selected_category = useSelector(
    (state) => state.category.category
  );

  useEffect(() => {
    const unique_categories = [
      "All",
      ...new Set(FoodData.map((food) => food.category)),
    ];

    setCategories(unique_categories);
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-6 mt-10">

      <div className="flex items-center justify-between flex-wrap gap-3">

        <div>
          <p className="text-orange-500 font-semibold tracking-wide">
            EXPLORE MENU
          </p>

          <h2 className="text-3xl font-bold text-gray-800 mt-1">
            Choose Your Favourite Category 🍽️
          </h2>
        </div>

      </div>

      <div className="flex gap-4 mt-8 overflow-x-auto scrollbar-hide pb-3">

        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => dispatch(setCategory(category))}
            className={`whitespace-nowrap px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-md

            ${
              selected_category === category
                ? "bg-orange-500 text-white scale-105"
                : "bg-white text-gray-700 hover:bg-orange-500 hover:text-white hover:scale-105"
            }`}
          >
            {category}
          </button>
        ))}

      </div>

    </section>
  );
};

export default CategoryMenu;