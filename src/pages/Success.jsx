import React, { useEffect, useState } from "react";
import { PropagateLoader } from "react-spinners";
import { FaCircleCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Success = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-orange-50 flex items-center justify-center px-5">

      {loading ? (
        <PropagateLoader color="#f97316" />
      ) : (
        <div className="bg-white shadow-2xl rounded-3xl p-10 max-w-lg w-full text-center">

          <FaCircleCheck className="text-7xl text-green-500 mx-auto mb-6" />

          <h1 className="text-4xl font-bold text-gray-800">
            Order Confirmed 🎉
          </h1>

          <p className="text-gray-500 mt-4 leading-7">
            Thank you for ordering with FoodHub.
            <br />
            Your delicious meal is being prepared.
          </p>

          <div className="bg-orange-100 rounded-2xl p-5 mt-8">

            <h3 className="font-bold text-xl">
              Estimated Delivery
            </h3>

            <p className="text-3xl text-orange-500 font-bold mt-2">
              25 Minutes
            </p>

          </div>

          <Link
            to="/"
            className="block mt-8 bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-xl font-bold transition"
          >
            Continue Shopping
          </Link>

        </div>
      )}

    </div>
  );
};

export default Success;