import React ,{useContext, useState}from "react";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { GoTriangleDown } from "react-icons/go";
import { Rating } from "@mui/material";
import { MyContext } from "../../App";
import { deleteAddress } from "../../utils/api";
import {  Button } from "@mui/material";
import { Minus, Plus, Trash } from "lucide-react";


const CartItems = ({ cartdata, updateCartQuantity, removeFromCart }) => {
  if (!cartdata || cartdata.length === 0) {
    return <div className="p-4 text-center text-gray-500">Your cart is empty.</div>;
  }

  return (
    <div className="p-4 space-y-4">
      {cartdata.map((item) => {
        const {
          _id,
          productTitle = 'Unnamed Product',
          image,
          price = 0,
          oldPrice = 0,
          quantity = 1,
          countInstock = 0,
          rating = 0,
        } = item;

        const imageUrl = image || '/placeholder.png';
        const subtotal = price * quantity;

        const hasDiscount = oldPrice && oldPrice > price;
        const discount = hasDiscount
          ? Math.round(((oldPrice - price) / oldPrice) * 100)
          : 0;

        return (
          <div key={_id} className="flex items-center gap-4 p-4 border rounded-lg shadow-sm bg-white">
            <img src={imageUrl} alt={productTitle} className="w-20 h-20 object-cover rounded" />

            <div className="flex-1">
              <h3 className="text-lg font-semibold">{productTitle}</h3>
              <p className="text-sm text-gray-500">Rating: ⭐ {rating}</p>

              <div className="flex items-center gap-2 mt-1">
                <span className="text-green-700 font-bold text-md">
                  ₹{price.toLocaleString()}
                </span>

                {hasDiscount && (
                  <>
                    <span className="text-sm text-gray-500 line-through">
                      ₹{oldPrice.toLocaleString()}
                    </span>
                    <span className="text-sm text-red-500 font-medium">
                      ({discount}% OFF)
                    </span>
                  </>
                )}
              </div>

              <p className="text-sm text-gray-500 mt-1">Stock: {countInstock}</p>
              <p className="text-sm text-gray-800 font-medium mt-1">
                Subtotal: ₹{subtotal.toLocaleString()}
              </p>

              <div className="flex items-center mt-2 gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => updateCartQuantity(_id, quantity - 1)}
                  disabled={quantity <= 1}
                >
                  <Minus size={16} />
                </Button>
                <span className="px-3">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => updateCartQuantity(_id, quantity + 1)}
                  disabled={quantity >= countInstock}
                >
                  <Plus size={16} />
                </Button>
              </div>
            </div>

            <Button variant="destructive" size="icon" onClick={() => removeFromCart(_id)}>
              <Trash size={18} />
            </Button>
          </div>
        );
      })}
    </div>
  );
};




export default CartItems