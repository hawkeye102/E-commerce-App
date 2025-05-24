
import React ,{useState,useContext}from "react";

import Button from '@mui/material/Button';
import { IoBagCheck } from "react-icons/io5";


import Rating from "@mui/material/Rating";
import CartItems from "./Cartitems";
import { MyContext } from "../../App";
import { deleteAddress } from "../../utils/api";

const Cart = () => {
  const {
    cartdata,
    SetCartdata,
    updateCartQuantity,
    userData
  } = useContext(MyContext);

  const cartItems = cartdata || [];

 const removeFromCart = async (cartItemId) => {
  try {
    // Ensure the endpoint is hit and cart is updated server-side
    await deleteAddress(`/api/cart/${cartItemId}/${userData?.id}`);

    // Now update frontend state
    SetCartdata((prev) => prev.filter((item) => item._id !== cartItemId));
  } catch (error) {
    console.error("Error removing item from cart:", error);
  }
};



  // Calculate dynamic totals
  const subtotal = cartItems.reduce(
    (acc, item) => acc + (item.price || 0) * item.quantity,
    0
  );

  const totalOldPrice = cartItems.reduce(
    (acc, item) => acc + (item.oldPrice || item.price || 0) * item.quantity,
    0
  );

  const totalDiscount = Math.max(totalOldPrice - subtotal, 0);
  const total = subtotal; // Adjust if taxes/shipping are added later

  return (
    <section className="section py-5 bg-gray-300">
      <div className="container flex w-[80%] max-w-[80%] pl-25 gap-5">
        {/* Left Side: Cart Items */}
        <div className="leff-part w-[70%]">
          <div className="shadow-md rounded-md p-5 mt-2 bg-white">
            <div className="px-3 py-2 mb-2 border-b border-black">
              <h2 className="font-bold">Your Cart</h2>
              <p className="mt-0 mb-2">
                There are{" "}
                <span className="font-bold text-red-500">{cartItems.length}</span>{" "}
                products in your cart
              </p>
            </div>

            <CartItems
              cartdata={cartItems}
              updateCartQuantity={updateCartQuantity}
              removeFromCart={removeFromCart}
            />
          </div>
        </div>

        {/* Right Side: Summary */}
        <div className="rightpart w-[30%]">
          <div className="shadow-md rounded-md p-5 mt-2 bg-white">
            <h3 className="p-3 font-[500]">Cart Totals</h3>
            <hr />
            <p className="flex items-center justify-between px-3 py-3">
              <span>Subtotal</span>
              <span className="text-red-500">
                ₹{subtotal.toLocaleString(undefined, { minimumFractionDigits: 2 })}
              </span>
            </p>
            <p className="flex items-center justify-between px-3 py-3">
              <span>Shipping</span>
              <span className="font-[500]">Free</span>
            </p>
            {totalDiscount > 0 && (
              <p className="flex items-center justify-between px-3 py-3">
                <span>Discount</span>
                <span className="font-[500] text-green-600">
                  -₹{totalDiscount.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                </span>
              </p>
            )}
            <p className="flex items-center justify-between px-3 py-3 font-bold text-lg">
              <span>Total</span>
              <span className="text-red-600">
                ₹{total.toLocaleString(undefined, { minimumFractionDigits: 2 })}
              </span>
            </p>
            <br />
            <Button
              className="checkout-btn flex gap-2 w-full"
              style={{
                backgroundColor: "#f44336",
                color: "white",
                fontWeight: "bold",
                borderRadius: "10px",
                transition: "all 0.3s ease",
              }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#000000")}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#f44336")}
            >
              <IoBagCheck className="text-[20px]" />
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default  Cart