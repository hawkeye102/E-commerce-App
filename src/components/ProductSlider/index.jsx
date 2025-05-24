import React, { useContext,useEffect,useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import './style.css'
import { ShoppingCart } from "lucide-react";
import { Scale, Heart, Expand } from "lucide-react";
import { MyContext } from "../../App";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FaStarHalfAlt } from "react-icons/fa";
import { deleteAddress, fetchData, UpdateData } from "../../utils/api";

import { FaMinus, FaPlus } from "react-icons/fa";
import CartItems from "../Cart/Cartitems";




const ProductSlider = ({ selectedCategory }) => {
  const context = useContext(MyContext);
  const [products, setProducts] = useState([]);
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    if (!selectedCategory) return;

    fetchData("/api/product").then((res) => {
      if (res?.success && res.rootProducts?.length > 0) {
        const filtered = res.rootProducts.filter(
          (prod) => prod.catName?.toUpperCase() === selectedCategory
        );
        setProducts(filtered);
      } else {
        setProducts([]);
      }
    });
  }, [selectedCategory]);

  // Sync cart data to quantity map
  useEffect(() => {
    const qtyMap = {};
    context.cartdata?.forEach((item) => {
      qtyMap[item.productId] = {
        quantity: item.quantity,
        cartItemId: item._id,
      };
    });
    setQuantities(qtyMap);
  }, [context.cartdata]);

  const handleAddToCart = (product) => {
    const newQty = 1;
    context.addTocart(product, context?.userData?.id, newQty);
    setQuantities((prev) => ({
      ...prev,
      [product._id]: { quantity: newQty },
    }));
  };

  const increaseQty = (product) => {
    const itemData = quantities[product._id];
    const currentQty = itemData?.quantity || 0;
    const newQty = currentQty + 1;

    context.addTocart(product, context?.userData?.id, newQty);
    setQuantities((prev) => ({
      ...prev,
      [product._id]: {
        ...prev[product._id],
        quantity: newQty,
      },
    }));
  };

 const decreaseQty = async (product) => {
  const itemData = quantities[product._id];
  if (!itemData) return;

  const { quantity, cartItemId } = itemData;
  const newQty = quantity - 1;

  if (newQty === 0) {
    // Remove item if quantity is 0
    deleteAddress(`/api/cart/${cartItemId}/${context?.userData?.id}`).then((res) => {
      if (res?.success) {
        context.openAlertBox("success", "Item removed from cart.");
        context.SetCartdata((prev) =>
          prev.filter((item) => item.productId !== product._id)
        );
        setQuantities((prev) => {
          const updated = { ...prev };
          delete updated[product._id];
          return updated;
        });
      } else {
        context.openAlertBox("error", "Failed to remove item.");
      }
    });
  } else {
    try {
      const data = await UpdateData(`/api/cart/${cartItemId}`, { quantity: newQty });

      if (data?.success) {
        setQuantities((prev) => ({
          ...prev,
          [product._id]: {
            ...prev[product._id],
            quantity: newQty,
          },
        }));
        context.openAlertBox("success", "Cart quantity updated.");
      } else {
        context.openAlertBox("error", data.message || "Failed to update cart.");
      }
    } catch (error) {
      console.error("Error updating cart:", error);
      context.openAlertBox("error", "Something went wrong.");
    }
  }
};




  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<AiFillStar key={`full-${i}`} color="gold" />);
    }

    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" color="gold" />);
    }

    while (stars.length < 5) {
      stars.push(<AiOutlineStar key={`empty-${stars.length}`} color="gold" />);
    }

    return stars;
  };

  return (
    <div className="product-slider">
      <h3 className="category-title">{selectedCategory}</h3>
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={6}
        spaceBetween={20}
        navigation
        pagination={false}
        breakpoints={{
          1024: { slidesPerView: 6 },
          768: { slidesPerView: 3 },
          480: { slidesPerView: 2 },
          320: { slidesPerView: 1 },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product._id} className="product-card">
            <div className="relative product-container">
              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                {Math.round(
                  ((product.oldPrice - product.price) / product.oldPrice) * 100
                )}
                %
              </span>
              <img
                src={product.images?.[0]}
                alt={product.name}
                className="product-img"
              />
              <div className="product-actions">
                <button>
                  <Scale size={20} />
                </button>
                <button>
                  <Heart size={20} />
                </button>
                <button
                  onClick={() => {
                    context.setSelectedProductId(product._id);
                    context.setopenProductDetailsModal(true);
                  }}
                >
                  <Expand size={20} />
                </button>
              </div>
            </div>

            <div className="text-left w-full px-2">
              <p className="text-sm text-gray-500 mb-1">{product.brand}</p>
              <p className="text-lg font-medium text-black mb-1">
                {product.name}
              </p>
              <p className="text-sm mt-1">
                <span className="line-through text-gray-400 mr-2">
                  ₹{product.oldPrice}
                </span>
                <span className="font-small discounted-price">
                  ₹{product.price}
                </span>
              </p>
              <div className="flex gap-1 my-1">{renderStars(product.rating)}</div>
            </div>

            <div className="mt-3 w-full px-3 pb-2">
              {quantities[product._id]?.quantity ? (
                <div className="flex items-stretch rounded-full border-0.5 overflow-hidden w-[130px] h-[25px] shadow-sm bg-white">
                  <button
                    onClick={() => decreaseQty(product)}
                    className="bg-green-500 w-[28px] h-full flex items-center justify-center"
                  >
                    <FaMinus className="text-gray-700 text-sm" />
                  </button>
                  <div className="w-[74px] text-center flex items-center justify-center font-semibold text-sm text-black">
                    {quantities[product._id]?.quantity || 0}
                  </div>
                  <button
                    onClick={() => increaseQty(product)}
                    className="bg-red-500 hover:bg-red-600 w-[28px] h-full flex items-center justify-center rounded-r-full"
                  >
                    <FaPlus className="text-white text-sm" />
                  </button>
                </div>
              ) : (
                <button
                  className="add-to-cart w-full py-2 mt-2 border border-black rounded-full flex items-center justify-center gap-2"
                  onClick={() => handleAddToCart(product)}
                >
                  <ShoppingCart size={18} /> ADD TO CART
                </button>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};




export default ProductSlider;