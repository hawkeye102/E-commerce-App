import React, { useContext,useEffect,useState } from "react";
import Button from  '@mui/material/Button'
import Rating from  '@mui/material/Rating'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import  QtyBox from '../Qtybox'
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineCompareArrows } from "react-icons/md";
import { fetchData } from "../../utils/api";
import { MyContext } from "../../App";



 const ProductDetailComponent = ({ product, setActiveTab, scrollToReviews, reviewCount }) => {
  const context = useContext(MyContext);
  const [productActionIndex, setProductActionIndex] = useState(null);
  const itemData = context?.quantities?.[product._id];
  const currentQty = itemData?.quantity || 0;
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
  if (!itemData) {
    context.addTocart(product, context?.userData?.id, quantity);
  } else {
    const newQty = currentQty + quantity;
    context.updateCartQuantity(itemData.cartItemId, newQty);
  }
  setQuantity(1); // Reset local selector
};


  const handleIncreaseQty = () => {
    const newQty = currentQty + 1;
    if (itemData?.cartItemId) {
      context.updateCartQuantity(itemData.cartItemId, newQty);
    } else {
      context.addTocart(product, context?.userData?.id, newQty);
    }
  };

  const handleDecreaseQty = async () => {
    const newQty = currentQty - 1;
    if (newQty === 0) {
      const res = await deleteAddress(`/api/cart/${itemData.cartItemId}/${context?.userData?.id}`);
      if (res?.success) {
        context.openAlertBox("success", "Item removed from cart.");
        context.SetCartdata((prev) => prev.filter((c) => c.productId !== product._id));
      } else {
        context.openAlertBox("error", "Failed to remove item.");
      }
    } else {
      const res = await UpdateData(`/api/cart/${itemData.cartItemId}`, { quantity: newQty });
      if (res?.success) {
        context.updateCartQuantity(itemData.cartItemId, newQty);
      } else {
        context.openAlertBox("error", res.message || "Failed to update cart.");
      }
    }
  };

  const handleAddToWishlist = () => {
    const userId = context?.userData?.id;
    if (!userId) {
      context.openAlertBox("error", "Please log in to add to wishlist.");
      return;
    }
    context.addToWishlist(product, userId);
  };

  if (!product) return <p className="p-4">Loading product details...</p>;

  return (
    <div className="p-2">
      <h1 className="text-[20px] font-[600]">{product.name}</h1>

      <div className="flex items-center gap-3 mt-2">
        <span className="text-gray-600">
          Brand: <span className="font-bold text-black pl-1">{product.brand}</span>
        </span>
        <Rating name="size-small" value={product.rating} size="small" readOnly />
        <span
          className="text-[15px] font-[600] cursor-pointer text-blue-500 hover:underline"
          onClick={scrollToReviews}
        >
          Review({reviewCount || 0})
        </span>
      </div>

      <div className="flex items-center gap-3 mt-2">
        <span className="old-price text-gray-500 line-through text-[15px]">₹{product.oldPrice}</span>
        <span className="new-price text-[15px] font-[500] text-red-600">₹{product.price}</span>
        <span className="text-[15px]">
          Available in stock: <span className="text-emerald-400 font-bold pl-1">{product.countInstock} items</span>
        </span>
      </div>

      <p className="text-[14px] leading-6 mt-3 mb-4">{product.description}</p>

      <div className="flex items-center">
        <span className="text-[16px] pr-2">Size :</span>
        <div className="flex items-center gap-1">
          {["S", "M", "L", "XL"].map((size, idx) => (
            <button
              key={size}
              onClick={() => setProductActionIndex(idx)}
              className={`!min-w-[40px] !border-2 !border-gray-300 h-[30px] ${
                productActionIndex === idx ? "!bg-red-400 !text-white" : ""
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <p className="text-[14px] mt-4 mb-2 py-2">Free Shipping (Est. Delivery 2 to 3 days)</p>


 {/* Quantity Selector */}
      <div className="flex items-center gap-2 mt-4 mb-4">
        <span className="text-[16px]">Quantity:</span>
        <div className="flex items-center gap-2 border px-3 py-1 rounded-md">
          <button
            onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
            className="text-lg px-2 font-bold"
          >
            -
          </button>
          <span className="min-w-[24px] text-center">{quantity}</span>
          <button
            onClick={() =>
              setQuantity((prev) =>
                prev < product.countInstock ? prev + 1 : prev
              )
            }
            className="text-lg px-2 font-bold"
          >
            +
          </button>
        </div>
      </div>

      <div className="flex items-center gap-3">
        {currentQty > 0 ? (
          <div className="flex items-stretch rounded-full border-0.5 overflow-hidden w-[130px] h-[30px] shadow-sm bg-white">
            <button onClick={handleDecreaseQty} className="bg-green-500 w-[30px] h-full flex items-center justify-center">
              -
            </button>
            <div className="w-[70px] text-center flex items-center justify-center font-semibold text-sm text-black">
              {currentQty}
            </div>
            <button onClick={handleIncreaseQty} className="bg-red-500 hover:bg-red-600 w-[30px] h-full flex items-center justify-center">
              +
            </button>
          </div>
        ) : (
          <button onClick={handleAddToCart} className="flex items-center h-[30px] bg-red-600 text-white py-2 px-4 rounded gap-2 hover:bg-black transition duration-300 mb-2">
            <ShoppingCartIcon className="text-[15px]" />
            Add To Cart
          </button>
        )}
      </div>

      <div className="flex items-center gap-3 mt-4">
        <span
          onClick={handleAddToWishlist}
          className="flex items-center gap-2 text-[14px] font-[600] cursor-pointer hover:text-red-500"
        >
          <FaRegHeart className="text-[18px]" /> Add to Wishlist
        </span>

        <span className="pl-2 flex items-center gap-2 text-[14px] font-[600] cursor-pointer hover:text-red-500">
          <MdOutlineCompareArrows className="text-[18px]" /> Add to Compare
        </span>
      </div>
    </div>
  );
};

export default ProductDetailComponent