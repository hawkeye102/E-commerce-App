import React ,{useState,useEffect}from "react";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { useContext } from "react";
import { Button, Rating } from "@mui/material";
import { MyContext } from "../../../App";
import { deleteAddress, postData } from "../../../utils/api";
import { fetchData } from "../../../utils/api";


const MyListItems = ({ item, userId }) => {
  const {
    cartdata,
    addTocart,
    updateCartQuantity,
    openAlertBox,
    setWishlistItems,
  } = useContext(MyContext);

  const [isInCart, setIsInCart] = useState(false);
  const [cartItemId, setCartItemId] = useState(null);

  useEffect(() => {
    if (!cartdata || !item?.productId) return;

    const foundItem = cartdata.find(
      (cartItem) => cartItem.productId === item.productId
    );

    setIsInCart(!!foundItem);
    setCartItemId(foundItem?._id || null);
  }, [cartdata, item?.productId]);

  const handleAddToCart = () => {
    if (!userId) {
      openAlertBox("error", "User ID missing. Please login.");
      return;
    }

    const quantity = 1;

    const product = {
      _id: item.productId,
      name: item.productTitle,
      images: [item.image],
      rating: item.ratings || 0,
      price: item.Price,
      oldPrice: item.oldPrice,
      countInstock: item.countInstock || 1,
    };

    if (isInCart && cartItemId) {
      updateCartQuantity(cartItemId, quantity + 1);
    } else {
      addTocart(product, userId, quantity);
    }
  };

  const handleRemove = async () => {
    try {
      const res = await deleteAddress(`/api/mylist/${item._id}`);
      if (res?.success) {
        openAlertBox("success", "Item removed from Wishlist.");
        setWishlistItems((prev) => prev.filter((i) => i._id !== item._id));
      } else {
        openAlertBox("error", "Failed to remove item.");
      }
    } catch (error) {
      openAlertBox("error", "Error removing item.");
    }
  };

  return (
    <div className="cartItem w-full p-3 flex items-center gap-3 border-b border-black">
      {/* Product image */}
      <div className="img w-[20%] rounded-md overflow-hidden">
        <Link to={`/product/${item.productId}`}>
          <img
            src={item.image}
            alt={item.productTitle}
            className="w-full h-auto transition-transform duration-200 hover:scale-105"
          />
        </Link>
      </div>

      {/* Info and actions */}
      <div className="info1 w-[80%] relative">
        <IoClose
          title="Remove from Wishlist"
          className="cursor-pointer absolute top-[10px] right-[10px] text-[20px] hover:text-red-500"
          onClick={handleRemove}
        />

        <span className="text-[13px] font-medium text-gray-500">{item.brand}</span>
        <h2 className="text-[15px] font-semibold">
          <Link to={`/product/${item.productId}`} className="hover:text-red-400 transition">
            {item.productTitle}
          </Link>
        </h2>

        <Rating name="size-small" value={item.ratings || 0} size="small" readOnly />

        <div className="price-details mt-2">
          <span className="text-[14px] font-semibold text-black">₹{item.Price?.toFixed(2)}</span>
          {item.oldPrice && item.oldPrice > item.Price && (
            <>
              <span className="line-through text-[14px] font-semibold pl-4 text-gray-400">
                ₹{item.oldPrice?.toFixed(2)}
              </span>
              <span className="text-[14px] font-semibold pl-4 text-green-600">
                {Math.round(((item.oldPrice - item.Price) / item.oldPrice) * 100)}% OFF
              </span>
            </>
          )}
        </div>

        <div className="mt-4">
          <Button
            className={`!text-white !font-medium transition ${
              isInCart
                ? "!bg-green-600 hover:!bg-green-700 cursor-not-allowed"
                : "!bg-red-500 hover:!bg-black"
            }`}
            onClick={handleAddToCart}
            disabled={isInCart}
          >
            {isInCart ? "Added to Cart" : "Add to Cart"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default  MyListItems