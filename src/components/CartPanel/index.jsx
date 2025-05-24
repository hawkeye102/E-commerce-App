import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { Button, Box } from '@mui/material';
import { MyContext } from "../../App";
import { deleteAddress } from "../../utils/api";

const CartPanel = () => {
  const {
    cartdata,
    userData,
    SetCartdata,
    openAlertBox,
  } = useContext(MyContext);

  const removeFromCart = async (cartItemId) => {
    try {
      const res = await deleteAddress(`/api/cart/${cartItemId}/${userData?.id}`);

      if (res.success) {
        SetCartdata((prev) => prev.filter((item) => item._id !== cartItemId));
        openAlertBox("success", "Item removed from cart.");
      } else {
        openAlertBox("error", "Failed to remove item.");
      }
    } catch (err) {
      openAlertBox("error", "Error removing item.");
    }
  };

  const totalItems = cartdata.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cartdata.reduce((sum, item) => sum + item.SubTotal, 0);
  const shipping = 8;
  const taxIncluded = subtotal + shipping + 25;

  return (
    <>
      <div className="scroll w-full max-h-[240px] overflow-y-scroll py-3 px-4">
        {cartdata.length === 0 ? (
          <p className="text-center text-gray-500">Cart is empty.</p>
        ) : (
          cartdata.map((item) => (
            <div
              key={item._id}
              className="cartItem flex items-center gap-4 w-full border-b border-black py-2"
            >
              <div className="w-[25%] h-[100px] overflow-hidden">
                <Link to={`/product/${item.productId}`} className="block group">
                  <img
                    src={item.image}
                    alt={item.productTitle}
                    className="w-full h-full object-cover rounded-md group-hover:scale-105 transition-transform duration-200"
                  />
                </Link>
              </div>

              <div className="w-[75%] pr-3 relative">
                <Link to={`/product/${item.productId}`}>
                  <h3 className="font-medium hover:text-red-500 hover:underline cursor-pointer">
                    {item.productTitle}
                  </h3>
                </Link>
                <p className="flex items-center text-sm mt-1">
                  <span>Qty:</span>
                  <span className="px-1 font-medium">{item.quantity}</span>
                  <span className="text-red-500 px-4">Price: ₹{item.price}</span>
                </p>

                <MdDelete
                  className="text-[20px] absolute top-[5px] right-[10px] cursor-pointer text-gray-600 hover:text-red-600"
                  onClick={() => removeFromCart(item._id)}
                />
              </div>
            </div>
          ))
        )}
      </div>

      <br />

      <div className="absolute bottom-2 w-full px-4">
        <div className="w-full border-t border-black pt-2 space-y-2">
          <div className="flex justify-between text-sm font-medium">
            <span>{totalItems} item(s)</span>
            <span className="text-red-500">₹{subtotal.toFixed(2)}</span>
          </div>

          <div className="flex justify-between text-sm font-medium">
            <span>Shipping</span>
            <span className="text-red-500">₹{shipping.toFixed(2)}</span>
          </div>

          <div className="flex justify-between text-sm font-medium">
            <span>Total (tax excl)</span>
            <span className="text-red-500">₹{(subtotal + shipping).toFixed(2)}</span>
          </div>

          <div className="flex justify-between text-sm font-medium">
            <span>Total (tax incl)</span>
            <span className="text-red-500">₹{taxIncluded.toFixed(2)}</span>
          </div>
        </div>

        <Box className="flex gap-3 mt-4">
          <Link to="/cart" className="w-full">
            <Button variant="outlined" color="primary" fullWidth>
              View Cart
            </Button>
          </Link>

          <Link to="/checkout" className="w-full">
            <Button variant="contained" color="secondary" fullWidth>
              Checkout
            </Button>
          </Link>
        </Box>
      </div>
    </>
  );
};

export default CartPanel