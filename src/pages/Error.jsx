import React from "react";
import { Link } from "react-router-dom";
import { FaTriangleExclamation } from "react-icons/fa6";

const Error = () => {
  return (
    <div className="min-h-screen bg-orange-50 flex justify-center items-center px-5">

      <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-xl text-center">

        <FaTriangleExclamation className="text-7xl text-red-500 mx-auto mb-6" />

        <h1 className="text-7xl font-extrabold text-gray-800">
          404
        </h1>

        <h2 className="text-3xl font-bold mt-4">
          Page Not Found
        </h2>

        <p className="text-gray-500 mt-4 leading-7">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <Link
          to="/"
          className="inline-block mt-8 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold transition"
        >
          Back To Home
        </Link>

      </div>

    </div>
  );
};

export default Error;