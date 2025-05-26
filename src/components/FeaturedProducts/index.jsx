import React, { useContext,useState,useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ShoppingCart } from "lucide-react";
import "./style.css"; // Import CSS file
import { Scale, Heart, Expand } from "lucide-react";
import { MyContext } from "../../App";
import { fetchData } from "../../utils/api";
import { deleteAddress,UpdateData } from "../../utils/api";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaMinus, FaPlus } from "react-icons/fa";




const FeaturedProducts = () => {
    // Function to render stars based on rating
const context = useContext(MyContext);
  const [products, setProducts] = useState([]);
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    fetchData("/api/product/featured-products").then((res) => {
      if (res?.success && res.featuredProducts?.length > 0) {
        setProducts(res.featuredProducts);
      } else {
        setProducts([]);
      }
    });
  }, []);

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
    if (quantities[product._id]) return;
    const newQty = 1;
    context.addTocart(product, context?.userData?.id, newQty);
  };

  const increaseQty = (product) => {
    const itemData = quantities[product._id];
    const currentQty = itemData?.quantity || 0;
    const newQty = currentQty + 1;

    if (itemData?.cartItemId) {
      context.updateCartQuantity(itemData.cartItemId, newQty);
    } else {
      context.addTocart(product, context?.userData?.id, newQty);
    }
  };

  const decreaseQty = async (product) => {
    const itemData = quantities[product._id];
    if (!itemData) return;

    const { quantity, cartItemId } = itemData;
    const newQty = quantity - 1;

    if (newQty === 0) {
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
          context.updateCartQuantity(cartItemId, newQty);
        } else {
          context.openAlertBox("error", data.message || "Failed to update cart.");
        }
      } catch (error) {
        console.error("Error updating cart:", error);
        context.openAlertBox("error", "Something went wrong.");
      }
    }
  };

  const handleAddToWishlist = (product) => {
    const userId = context?.userData?.id;
    if (!userId) {
      context.openAlertBox("error", "Please log in to add to wishlist.");
      return;
    }
    context.addToWishlist(product, userId);
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
    <div className="latest-products w-screen">
      <h2 className="text-xl font-semibold mt-4">Featured Products</h2>
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={6}
        navigation
        breakpoints={{
          320: { slidesPerView: 1 },
          480: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 6 },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product._id}>
            <div className="product-card relative">
              <span className="absolute top-2 z-50 left-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                {Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}%
              </span>

             <div className="relative w-full h-[170px] overflow-hidden group">
  <img
    src={product.images?.[0]}
    alt={product.name}
    className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
  />
  <img
    src={product.images?.[1] || product.images?.[0]}
    alt={product.name}
    className="absolute top-0 left-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
  />
</div>


              <div className="product-action absolute top-2 right-2 flex flex-col gap-2">
                <button><Scale size={16} /></button>
                <button onClick={() => handleAddToWishlist(product)}>
                  <Heart size={16} className="hover:text-red-500" />
                </button>
                <button onClick={() => {
                  context.setSelectedProductId(product._id);
                  context.setopenProductDetailsModal(true);
                }}>
                  <Expand size={16} />
                </button>
              </div>

              <div className="product-info px-2 py-2 text-left">
                <p className="text-xs text-gray-500">{product.brand}</p>
                <p className="text-sm font-medium text-black">{product.name}</p>
                <p className="text-sm mt-1">
                  <span className="line-through text-gray-400 mr-2">₹{product.oldPrice}</span>
                  <span className="font-semibold text-black">₹{product.price}</span>
                </p>
                <div className="flex gap-1 mt-1">{renderStars(product.rating || 0)}</div>
              </div>

              <div className="mt-2 px-2 pb-2">
                {quantities[product._id]?.quantity ? (
                  <div className="flex items-stretch rounded-full border overflow-hidden w-[130px] h-[25px] shadow-sm bg-white">
                    <button
                      onClick={() => decreaseQty(product)}
                      className="bg-green-500 w-[28px] flex items-center justify-center"
                    >
                      <FaMinus className="text-gray-700 text-sm" />
                    </button>
                    <div className="w-[74px] text-center flex items-center justify-center font-semibold text-sm text-black">
                      {quantities[product._id]?.quantity || 0}
                    </div>
                    <button
                      onClick={() => increaseQty(product)}
                      className="bg-red-500 hover:bg-red-600 w-[28px] flex items-center justify-center rounded-r-full"
                    >
                      <FaPlus className="text-white text-sm" />
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="add-to-cart w-full py-2 mt-2 border border-black rounded-full flex items-center justify-center gap-2"
                  >
                    <ShoppingCart size={18} /> ADD TO CART
                  </button>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
  };
  
  export default FeaturedProducts;