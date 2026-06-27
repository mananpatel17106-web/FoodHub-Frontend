import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

import {
  incrementQty,
  decrementQty,
  removeFromcart,
} from "../redux/slices/CartSlice";

const ItemCard = ({ id, name, price, img, qty }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-3 bg-white shadow-md rounded-xl p-3 mb-3 relative">
      {/* Delete */}
      <MdDelete
        onClick={() => {
          dispatch(removeFromcart({ id }));
          toast.success(`${name} Removed`);
        }}
        className="absolute right-3 top-3 text-xl text-red-500 cursor-pointer hover:scale-110 transition-all"
      />

      {/* Image */}
      <img
        src={img}
        alt={name}
        className="w-16 h-16 rounded-lg object-cover"
      />

      {/* Details */}
      <div className="flex-1">
        <h2 className="font-semibold text-gray-800">{name}</h2>

        <div className="flex justify-between items-center mt-2">
          <span className="text-green-600 font-bold">
            ₹{price}
          </span>

          <div className="flex items-center gap-2">
            <AiOutlineMinus
              onClick={() => {
                if (qty > 1) {
                  dispatch(decrementQty({ id }));
                }
              }}
              className="border-2 border-gray-500 rounded-md p-1 text-2xl cursor-pointer hover:bg-green-500 hover:text-white hover:border-green-500 transition-all"
            />

            <span className="font-semibold">{qty}</span>

            <AiOutlinePlus
              onClick={() => dispatch(incrementQty({ id }))}
              className="border-2 border-gray-500 rounded-md p-1 text-2xl cursor-pointer hover:bg-green-500 hover:text-white hover:border-green-500 transition-all"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;